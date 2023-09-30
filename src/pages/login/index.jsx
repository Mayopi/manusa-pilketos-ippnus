import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import LoadingButton from "@/components/LoadingButton";
import { useState } from "react";
import { HiLogin } from "react-icons/hi";

const Login = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  if (status === "authenticated") router.replace("/dashboard");

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Navbar>
        <main className="px-5 mt-24">
          <h1 className="font-semibold text-center uppercase text-xl mb-10">Login Menggunakan Akun Anda</h1>

          <div className="w-full flex justify-center">
            <div className="w-[80%] bg-base-200 shadow p-5 rounded">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  name="username"
                  onChange={(e) => {
                    setCredentials({ ...credentials, username: e.target.value });
                  }}
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  name="password"
                  onChange={(e) => {
                    setCredentials({ ...credentials, password: e.target.value });
                  }}
                />
              </div>

              {error ? <p className="text-red-500 my-5">{error}</p> : null}

              {loading ? (
                <LoadingButton />
              ) : (
                <button
                  onClick={async () => {
                    const { status, data, error } = await signIn("credentials", {
                      username: credentials.username,
                      password: credentials.password,
                      redirect: false,
                      callbackUrl: "/dashboard",
                    });

                    console.log(status, data, error);

                    if (error) {
                      setError(error);
                    }
                  }}
                  className="btn btn-primary uppercase tracking-wider w-full mt-5"
                >
                  Login <HiLogin className="inline text-xl" />
                </button>
              )}
            </div>
          </div>
        </main>
      </Navbar>
    </>
  );
};

export default Login;
