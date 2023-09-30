import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: voted, isLoading: votedLoading, isValidating: votedValidating, error: votedError } = useSWR("/api/member?voted=true", fetcher);

  const { data: unvoted, isLoading: unvotedLoading, isValidating: unvotedValidating, error: unvotedError } = useSWR("/api/member?unvoted=true", fetcher);

  const { data: members, isLoading: membersLoading, isValidating: membersValidating, error: membersError } = useSWR("/api/member", fetcher);

  if (status === "unauthenticated") router.replace("/login");
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Navbar>
        {votedLoading || votedValidating || unvotedLoading || unvotedValidating || membersLoading || membersValidating ? (
          <div className="loading loading-spinner loading-lg">Loading...</div>
        ) : (
          <main className="px-5 mt-24">
            <h1 className="font-semibold text-center text-xl uppercase -tracking-wider mb-5">Statistika Dasar</h1>
            <div className="row flex flex-wrap">
              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center">
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-figure text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                    </div>
                    <div className="stat-title">Total Suara</div>
                    <div className="stat-value text-primary">{voted.length}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div className="stat-title">Sisa Suara</div>
                    <div className="stat-value text-secondary">{unvoted.length}</div>
                  </div>
                </div>
              </div>

              <div className="col p-5 lg:w-1/2 w-full flex justify-center items-center">
                <div className="radial-progress text-accent" style={{ "--value": ((voted.length / members.length) * 100 || 0).toFixed(2), "--size": "12rem", "--thickness": "5px" }}>
                  {((voted.length / members.length) * 100 || 0).toFixed(2)}%
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="row">
              <div className="col p-5 flex flex-col justify-center items-center w-full">
                <h1 className="font-semibold opacity-80 mb-5 text-xl uppercase">Sisa Suara</h1>
                <div className="overflow-x-auto w-full">
                  <table className="table table-zebra">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>NIS</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Vote</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      {unvoted.map((vote, index) => (
                        <tr key={index}>
                          <td>{vote.nis}</td>
                          <td>{vote.name}</td>
                          <td>{vote.class}</td>
                          <td>
                            <p className="badge badge-warning bg-opacity-20 text-yellow-500">Belum Voting</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        )}
      </Navbar>
    </>
  );
};

export default Dashboard;
