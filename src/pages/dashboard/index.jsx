import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Footer from "@/components/Footer";
import { BsFilter } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RiVoiceRecognitionFill, RiVoiceRecognitionLine } from "react-icons/ri";
import Loading from "@/components/Loading";
import { MdHowToVote } from "react-icons/md";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filterMember, setFilterMember] = useState({
    class: "all",
    status: {
      osis: "all",
      ippnus: "all",
    },
  });

  const [searchResult, setSearchResult] = useState(null);

  const { data: members, isLoading, isValidating, error } = useSWR("/api/member", fetcher);
  const { data: candidates, isLoading: candidateLoading, isValidating: candidateValidating, error: candidateError } = useSWR("/api/candidate", fetcher);

  const { data: participants, isLoading: isLoadingParticipant, isValidating: isValidatingParticipant, error: errorParticipant } = useSWR("/api/participant", fetcher);

  useEffect(() => {
    setSearchResult(members);
  }, [members]);

  const handleSearchName = (target) => {
    const filteredMember = members.filter((member) => member.name.toLowerCase().includes(target.value.toLowerCase()) || member.nis.includes(target.value));
    setSearchResult(filteredMember);
  };

  if (status === "unauthenticated") router.replace("/login");
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      {isLoading || isValidating || !members || !candidates || candidateLoading || candidateValidating || !participants || isLoadingParticipant || isValidatingParticipant ? (
        <Loading />
      ) : (
        <Navbar>
          <main className="px-5 mt-24">
            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Dasar OSIS</h1>
            <div className="row flex flex-wrap">
              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <RiVoiceRecognitionFill className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Suara</div>
                    <div className="stat-value text-primary">{members.filter((member) => member.voted.osis).length}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <RiVoiceRecognitionLine className="text-3xl" />
                    </div>
                    <div className="stat-title">Sisa Suara</div>
                    <div className="stat-value text-secondary">{members.filter((member) => !member.voted.osis).length}</div>
                  </div>
                </div>
              </div>

              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div className="radial-progress text-accent" style={{ "--value": ((members.filter((member) => member.voted.osis).length / members.length) * 100 || 0).toFixed(2), "--size": "12rem", "--thickness": "5px" }}>
                  {((members.filter((member) => member.voted.osis).length / members.length) * 100 || 0).toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Dasar IPNU dan IPPNU</h1>

            <div className="row flex flex-wrap">
              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <RiVoiceRecognitionFill className="text-3xl" />
                    </div>
                    <div className="stat-title">Total Suara</div>
                    <div className="stat-value text-primary">{members.filter((member) => member.voted.ippnus).length}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <RiVoiceRecognitionLine className="text-3xl" />
                    </div>
                    <div className="stat-title">Sisa Suara</div>
                    <div className="stat-value text-secondary">{members.filter((member) => !member.voted.ippnus).length}</div>
                  </div>
                </div>
              </div>

              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div className="radial-progress text-accent" style={{ "--value": ((members.filter((member) => member.voted.ippnus).length / members.length) * 100 || 0).toFixed(2), "--size": "12rem", "--thickness": "5px" }}>
                  {((members.filter((member) => member.voted.ippnus).length / members.length) * 100 || 0).toFixed(2)}%
                </div>
              </div>
            </div>
            <div className="divider"></div>

            <div className="divider"></div>

            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Kandidat OSIS</h1>

            <div className="row flex flex-wrap">
              {candidates
                .filter((candidate) => candidate.role == "OSIS")
                .map((candidate, index) => (
                  <div key={index} className="col w-full lg:w-1/3 p-5">
                    <div className="card bg-base-200 shadow-xl">
                      <div className="card-body flex flex-col justify-center items-center">
                        <div className="avatar">
                          <div className="w-16 rounded-full border">
                            <Image
                              src={candidate.name == "Adnan Dhukha A." ? "/images/adnan-dhukha-profile.png" : candidate.name == "Fajar Ardiansyah" ? "/images/fajar-ardiansyah-profile.png" : "/images/rohmatin-lutfiana-profile.png"}
                              width={80}
                              height={80}
                            />
                          </div>
                        </div>

                        <h3 className="uppercase text-lg my-3">{candidate.name}</h3>

                        <div className="radial-progress text-primary" style={{ "--value": ((candidate.participants.length / participants.filter((participant) => participant.voteRole == "OSIS").length) * 100 || 0).toFixed(2) }}>
                          {((candidate.participants.length / participants.filter((participant) => participant.voteRole == "OSIS").length) * 100 || 0).toFixed(2)}%
                        </div>

                        <p className="font-semibold uppercase text-center text-lg my-3">Suara Terkumpul</p>
                        <p className="font-semibold uppercase text-center text-xl text-accent">
                          {candidate.participants.length} <MdHowToVote className="inline" />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="divider"></div>

            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Kandidat IPNU</h1>

            <div className="row flex flex-wrap justify-center items-center">
              {candidates
                .filter((candidate) => candidate.role == "IPNU")
                .map((candidate, index) => (
                  <div key={index} className="col w-full lg:w-1/3 p-5">
                    <div className="card bg-base-200 shadow-xl">
                      <div className="card-body flex flex-col justify-center items-center">
                        <div className="avatar">
                          <div className="w-16 rounded-full border">
                            <Image src={candidate.name == "Anggit Setiadi" ? "/images/anggit-setiadi-profile.png" : "/images/iqmal-maulana-profile.png"} width={80} height={80} />
                          </div>
                        </div>

                        <h3 className="uppercase text-lg my-3">{candidate.name}</h3>

                        <div className="radial-progress text-primary" style={{ "--value": ((candidate.participants.length / participants.filter((participant) => participant.voteRole == "IPNU").length) * 100 || 0).toFixed(2) }}>
                          {((candidate.participants.length / participants.filter((participant) => participant.voteRole == "IPNU").length) * 100 || 0).toFixed(2)}%
                        </div>

                        <p className="font-semibold uppercase text-center text-lg my-3">Suara Terkumpul</p>
                        <p className="font-semibold uppercase text-center text-xl text-accent">
                          {candidate.participants.length} <MdHowToVote className="inline" />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="divider"></div>

            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Kandidat IPPNU</h1>

            <div className="row flex flex-wrap justify-center items-center">
              {candidates
                .filter((candidate) => candidate.role == "IPPNU")
                .map((candidate, index) => (
                  <div key={index} className="col w-full lg:w-1/3 p-5">
                    <div className="card bg-base-200 shadow-xl">
                      <div className="card-body flex flex-col justify-center items-center">
                        <div className="avatar">
                          <div className="w-16 rounded-full border">
                            <Image src={candidate.name == "Berliana Zahra Pramudhita" ? "/images/berliana-zahra-profile.png" : "/images/shofia-qutrotunnada-profile.png"} width={80} height={80} />
                          </div>
                        </div>

                        <h3 className="uppercase text-lg my-3">{candidate.name}</h3>

                        <div className="radial-progress text-primary" style={{ "--value": ((candidate.participants.length / participants.filter((participant) => participant.voteRole == "IPPNU").length) * 100 || 0).toFixed(2) }}>
                          {((candidate.participants.length / participants.filter((participant) => participant.voteRole == "IPPNU").length) * 100 || 0).toFixed(2)}%
                        </div>

                        <p className="font-semibold uppercase text-center text-lg my-3">Suara Terkumpul</p>
                        <p className="font-semibold uppercase text-center text-xl text-accent">
                          {candidate.participants.length} <MdHowToVote className="inline" />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="divider"></div>

            <div className="row">
              <div className="col flex flex-col justify-center items-center w-full">
                <h1 className="font-semibold opacity-80 mb-5 text-xl uppercase">Sisa Suara</h1>

                <div className="w-full flex gap-2 flex-wrap my-5">
                  <h1 className="font-semibold opacity-80 mb-5 text-xl uppercase">
                    Filter <BsFilter className="text-4xl inline" />
                  </h1>
                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary m-1">
                      {filterMember.class == "all" ? "Class" : filterMember.class}
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52 flex flex-col gap-1">
                      <li>
                        <button className={`btn ${filterMember == "all" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, class: "all" })}>
                          All
                        </button>
                      </li>
                      {[...new Set(members.map((member) => member.class))].map((classValue, index) => (
                        <li key={index}>
                          <button className={`btn ${filterMember.class == classValue ? "btn-disabled" : ""}  `} onClick={() => setFilterMember({ ...filterMember, class: classValue })}>
                            {classValue}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary m-1">
                      {filterMember.status.osis == "all" ? "Status OSIS" : filterMember.status.osis}
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52 flex flex-col gap-1">
                      <li>
                        <button className={`btn ${filterMember.status == "all" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, osis: "all" } })}>
                          All
                        </button>
                      </li>
                      <li>
                        <button className={`btn ${filterMember.status == "pending" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, osis: "pending" } })}>
                          Pending
                        </button>
                      </li>
                      <li>
                        <button className={`btn ${filterMember.status == "selesai" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, osis: "selesai" } })}>
                          Selesai
                        </button>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown">
                    <label tabIndex={0} className="btn btn-primary m-1">
                      {filterMember.status.ippnus == "all" ? "Status IPPNUS" : filterMember.status.ippnus}
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52 flex flex-col gap-1">
                      <li>
                        <button className={`btn ${filterMember.status == "all" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, ippnus: "all" } })}>
                          All
                        </button>
                      </li>
                      <li>
                        <button className={`btn ${filterMember.status == "pending" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, ippnus: "pending" } })}>
                          Pending
                        </button>
                      </li>
                      <li>
                        <button className={`btn ${filterMember.status == "selesai" ? "btn-disabled" : ""}`} onClick={() => setFilterMember({ ...filterMember, status: { ...filterMember.status, ippnus: "selesai" } })}>
                          Selesai
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="w-full flex justify-end">
                  <input type="text" placeholder="Cari Nama" className="input input-bordered w-full max-w-lg my-5" onChange={({ target }) => handleSearchName(target)} />
                </div>

                <div className="overflow-x-auto w-full bg-base-200 rounded p-3">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>NIS</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>OSIS</th>
                        <th>IPPNUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {searchResult
                        .filter((member) => {
                          // Filter berdasarkan kelas
                          const classFilter = filterMember.class === "all" || member.class === filterMember.class;

                          // Filter berdasarkan status
                          const osisStatusFilter = filterMember.status.osis === "all" || (filterMember.status.osis === "pending" && !member.voted.osis) || (filterMember.status.osis === "selesai" && member.voted.osis);

                          const ippnusStatusFilter = filterMember.status.ippnus === "all" || (filterMember.status.ippnus === "pending" && !member.voted.ippnus) || (filterMember.status.ippnus === "selesai" && member.voted.ippnus);

                          // Gabungkan filter berdasarkan kelas dan status
                          return classFilter && osisStatusFilter && ippnusStatusFilter;
                        })

                        .map((vote, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{vote.nis}</td>
                            <td>{vote.name}</td>
                            <td>{vote.class}</td>
                            <td>
                              {vote.voted.osis ? (
                                <p className="badge badge-success badge-sm bg-opacity-20 text-green-500 text-xs text text-center">Selesai</p>
                              ) : (
                                <p className="badge badge-warning badge-sm bg-opacity-20 text-yellow-500 text-xs text text-center">Pending</p>
                              )}
                            </td>
                            <td>
                              {vote.voted.ippnus ? (
                                <p className="badge badge-success badge-sm bg-opacity-20 text-green-500 text-xs text text-center">Selesai</p>
                              ) : (
                                <p className="badge badge-warning badge-sm bg-opacity-20 text-yellow-500 text-xs text text-center">Pending</p>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <Footer />
          </main>
        </Navbar>
      )}
    </>
  );
};

export default Dashboard;
