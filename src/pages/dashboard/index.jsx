import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Footer from "@/components/Footer";
import { BsFilter } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [filterMember, setFilterMember] = useState("all");

  const { data: members, isLoading, isValidating, error } = useSWR("/api/member", fetcher);
  const { data: candidates, isLoading: candidateLoading, isValidating: candidateValidating, error: candidateError } = useSWR("/api/candidate", fetcher);

  const { data: participants, isLoading: isLoadingParticipant, isValidating: isValidatingParticipant, error: errorParticipant } = useSWR("/api/participant", fetcher);

  console.log(candidates);
  console.log(participants);

  if (status === "unauthenticated") router.replace("/login");
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Navbar>
        {isLoading || isValidating || !members || !candidates || candidateLoading || candidateValidating || !participants || isLoadingParticipant || isValidatingParticipant ? (
          <div className="loading loading-spinner loading-lg">Loading...</div>
        ) : (
          <main className="px-5 mt-24">
            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Dasar</h1>
            <div className="row flex flex-wrap">
              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <div className="stat-title">Total Suara</div>
                    <div className="stat-value text-primary">{members.filter((member) => member.voted).length}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div className="stat-title">Sisa Suara</div>
                    <div className="stat-value text-secondary">{members.filter((member) => !member.voted).length}</div>
                  </div>
                </div>
              </div>

              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center bg-base-200 rounded">
                <div
                  className="radial-progress text-accent"
                  style={{ "--value": ((members.filter((member) => member.voted).length / members.filter((member) => !member.voted).length) * 100 || 0).toFixed(2), "--size": "12rem", "--thickness": "5px" }}
                >
                  {((members.filter((member) => member.voted).length / members.length) * 100 || 0).toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Kandidat</h1>

            <div className="row flex flex-wrap">
              {candidates.map((candidate, index) => (
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

                      <div className="radial-progress text-primary" style={{ "--value": ((candidate.participants.length / participants.length) * 100 || 0).toFixed(2) }}>
                        {((candidate.participants.length / participants.length) * 100 || 0).toFixed(2)}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="row">
              <div className="col flex flex-col justify-center items-center w-full">
                <h1 className="font-semibold opacity-80 mb-5 text-xl uppercase">Sisa Suara</h1>

                <div className="w-full flex gap-2 flex-wrap">
                  <BsFilter className="text-4xl" />
                  <div className="dropdown">
                    <label tabIndex={0} className="btn m-1">
                      {filterMember == "all" ? "Class" : filterMember}
                    </label>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52 flex flex-col gap-1">
                      <li>
                        <button className={`btn ${filterMember == "all" ? "btn-disabled" : ""}`} onClick={() => setFilterMember("all")}>
                          All
                        </button>
                      </li>
                      {[...new Set(members.map((member) => member.class))].map((classValue, index) => (
                        <li key={index}>
                          <button className={`btn ${filterMember == classValue ? "btn-disabled" : ""}  `} onClick={() => setFilterMember(classValue)}>
                            {classValue}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {members
                        .filter((member) => {
                          if (filterMember == "all") {
                            return !member.voted;
                          } else {
                            return !member.voted && member.class == filterMember;
                          }
                        })
                        .map((vote, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{vote.nis}</td>
                            <td>{vote.name}</td>
                            <td>{vote.class}</td>
                            <td>
                              <p className="badge badge-warning badge-sm bg-opacity-20 text-yellow-500 text-xs text text-center">Pending</p>
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
        )}
      </Navbar>
    </>
  );
};

export default Dashboard;
