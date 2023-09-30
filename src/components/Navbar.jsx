import Link from "next/link";
import useSWR from "swr";
import { BiSolidDashboard } from "react-icons/bi";
import { useSession, signOut } from "next-auth/react";
import { HiLogout } from "react-icons/hi";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Navbar = ({ children }) => {
  const { data, isLoading, isValidating, error } = useSWR("/api/candidate", fetcher);
  const { data: session, status } = useSession();

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link href="/" className="btn btn-ghost">
              Manusa Pilketos
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            {data && (
              <ul className="menu menu-horizontal">
                {data.map((candidate) => (
                  <li key={candidate._id}>
                    <Link href={"/candidate/detail/".concat(candidate.slug)}>{candidate.name}</Link>
                  </li>
                ))}

                <div className="divider divider-horizontal"></div>
                <li>
                  <Link href={"/dashboard"}>
                    Dashboard <BiSolidDashboard className="inline" />
                  </Link>
                </li>
                {session && status === "authenticated" && (
                  <li>
                    <button onClick={() => signOut()}>
                      Logout <HiLogout className="inline" />
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        {data && (
          <ul className="menu p-4 w-80 min-h-full bg-base-200">
            {data.map((candidate) => (
              <li key={candidate._id}>
                <Link href={"/candidate/detail/".concat(candidate.slug)}>{candidate.name}</Link>
              </li>
            ))}

            <div className="divider"></div>
            <li>
              <Link href={"/dashboard"}>
                Dashboard <BiSolidDashboard className="inline" />
              </Link>
            </li>
            {session && status === "authenticated" && (
              <li>
                <button onClick={() => signOut()}>
                  Logout <HiLogout className="inline" />
                </button>
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
