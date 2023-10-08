import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Footer from "@/components/Footer";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: members, isLoading, isValidating, error } = useSWR("/api/member", fetcher);

  if (status === "unauthenticated") router.replace("/login");
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Navbar>
        {isLoading || isValidating || !members ? (
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

            <div className="row">
              <div className="col flex flex-col justify-center items-center w-full">
                <h1 className="font-semibold opacity-80 mb-5 text-xl uppercase">Sisa Suara</h1>
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
                        .filter((member) => !member.voted)
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
