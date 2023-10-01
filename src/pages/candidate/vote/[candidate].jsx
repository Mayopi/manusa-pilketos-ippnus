import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdHowToVote } from "react-icons/md";
import LoadingButton from "@/components/LoadingButton";

const VoteCandidate = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { candidate } = router.query;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/vote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nis: e.target.nis.value,
        name: e.target.name.value,
        class: e.target.class.value,
        reason: e.target.reason.value,
        candidate,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoading(false);
      setError(null);
      router.replace("/candidate/detail/".concat(candidate));
    } else {
      setError(data.error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>{candidate ? "Vote ".concat(candidate.replace("-", " ")) : "Loading..."}</title>
      </Head>

      <Navbar>
        {candidate && (
          <main className="px-5 my-24">
            <h1 className="text-center font-semibold uppercase text-xl mb-5">
              Anda Sedang Memvoting <span className="text-primary">{candidate.replace("-", " ")}</span>
            </h1>

            <div className="w-full flex justify-center items-center lg:p-5 bg-base-200 rounded">
              <form onSubmit={(e) => handleSubmit(e)} className="w-full">
                <div className="row flex flex-wrap">
                  <div className="form-control w-full lg:w-1/2 p-5">
                    <label className="label">
                      <span className="label-text">Masukkan NIS Anda</span>
                    </label>
                    <input type="number" placeholder="Type here" className="input input-bordered w-full" name="nis" />
                  </div>

                  <div className="form-control w-full lg:w-1/2 p-5">
                    <label className="label">
                      <span className="label-text">Masukkan Nama Anda</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" name="name" />
                  </div>
                </div>

                <div className="row flex flex-wrap">
                  <div className="form-control w-full lg:w-1/2 p-5">
                    <label className="label">
                      <span className="label-text">Masukkan Kelas Anda</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" name="class" />
                  </div>

                  <div className="form-control w-full lg:w-1/2 p-5">
                    <label className="label">
                      <span className="label-text">Alasan Voting</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Alasan Voting" name="reason"></textarea>
                  </div>
                </div>

                <div className="p-5">
                  {error ? <p className="text-red-500 mb-3">{error}</p> : null}
                  {loading ? (
                    <LoadingButton />
                  ) : (
                    <button type="submit" className="btn btn-primary font-semibold text-lg uppercase tracking-wider w-full">
                      Kirim Suara <MdHowToVote className="inline" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </main>
        )}
      </Navbar>
    </>
  );
};

export default VoteCandidate;
