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

  const { data: participants, isLoading: isLoadingParticipant, isValidating: isValidatingParticipant, error: errorParticipant } = useSWR("/api/participant", fetcher);

  return (
    <>
      <Head>
        <title>{candidate ? candidate.replace("-", " ") : "Loading..."}</title>
      </Head>
      <Navbar>
        {isLoading || isValidating || !data || isLoadingParticipant || isValidatingParticipant || !participants ? (
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
                <header className="w-full flex flex-wrap justify-between">
                  <div className="biodata lg:w-1/3 w-full">
                    <h3 className="font-semibold opacity-80 text-xl mb-5">Biodata Diri</h3>
                    <p>{data.profile}</p>
                  </div>

                  <div className="divider divider-horizontal"></div>

                  <div className="votings lg:w-1/3 w-full lg:mt-0 mt-5">
                    <h3 className="font-semibold opacity-80 text-xl mb-5">Total Suara Kandidat</h3>

                    <div className="stats shadow flex items-center justify-center flex-col gap-3">
                      <div className="stat">
                        <div className="stat-figure text-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                          </svg>
                        </div>
                        <div className="stat-title">Total Suara</div>
                        <div className="stat-value text-primary">{data.participants.length}</div>
                        <div className="stat-desc">21% more than last month</div>
                      </div>

                      <div className="radial-progress text-accent text-xl font-semibold" style={{ "--value": (data.participants.length / participants.length) * 100, "--size": "12rem", "--thickness": "5px" }}>
                        {((data.participants.length / participants.length) * 100).toString().concat("%")}
                      </div>
                    </div>
                  </div>
                </header>

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
