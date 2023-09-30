import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaVoteYea, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const CandidateDetail = () => {
  const router = useRouter();
  const { candidate } = router.query;

  const { data, isLoading, isValidating, error } = useSWR(candidate ? `/api/candidate/${candidate}` : null, fetcher);

  if (data) {
    console.log(data);
  }

  return (
    <>
      <Head>
        <title>{candidate ? candidate.replace("-", " ") : "Loading..."}</title>
      </Head>
      <Navbar>
        {isLoading || isValidating || !data ? (
          <div className="loading loading-spinner loading-lg">Loading</div>
        ) : (
          <main className="px-5 mt-24">
            <div className="row flex flex-wrap">
              <div className="col flex flex-col p-5 items-center rounded lg:w-1/3 w-full">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://via.placeholder.com/100" />
                  </div>
                </div>
                <p className="text-xs opacity-70 my-3">Posisi Kandidat: {data.position}</p>
                <h1 className="font-semibold tracking-wide text-xl">{data.name}</h1>
                <p className="italic text-center">&quot;{data.bio}&quot;</p>

                <div className="social-media flex my-5 gap-3">
                  <a href={`https://instagram.com/${candidate}`} className="text-2xl hover:text-primary transition">
                    <AiFillInstagram />
                  </a>
                  <a href={`https://facebook.com/${candidate}`} className="text-2xl hover:text-primary transition">
                    <AiFillFacebook />
                  </a>
                  <a href={`https://twitter.com/${candidate}`} className="text-2xl hover:text-primary transition">
                    <FaTwitter />
                  </a>
                </div>

                <Link href={`/candidate/vote/${candidate}`} className="btn btn-primary normal-case tracking-wide w-full text-xl">
                  Vote Kandidat <FaVoteYea className="inline text-lg" />
                </Link>
              </div>

              <div className="col justify-center w-full lg:w-2/3">
                <div className="biodata">
                  <h3 className="font-semibold opacity-80 text-xl mb-5">Biodata Diri</h3>
                  <p>{data.profile}</p>
                </div>

                <div className="divider uppercase text-lg font-semibold">Visi Misi Untuk Manusa</div>

                <div className="visi-misi">
                  <h3 className="font-semibold opacity-80 text-xl mb-5">Visi</h3>
                  <p>{data.vision}</p>
                </div>

                <h3 className="font-semibold opacity-80 text-xl my-5">Misi</h3>

                <p>{data.mission}</p>
              </div>
            </div>
          </main>
        )}
      </Navbar>
    </>
  );
};

export default CandidateDetail;
