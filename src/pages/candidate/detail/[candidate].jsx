import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaVoteYea, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import useSWR from "swr";
import Image from "next/image";
import Loading from "@/components/Loading";

const fetcher = (url) => fetch(url).then((r) => r.json());

const CandidateDetail = () => {
  const router = useRouter();
  const { candidate } = router.query;

  const { data, isLoading, isValidating, error } = useSWR(candidate ? `/api/candidate/${candidate}` : null, fetcher);

  return (
    <>
      <Head>
        <title>{candidate ? candidate.replace("-", " ") : "Loading..."}</title>
      </Head>
      {isLoading || isValidating || !data ? (
        <Loading />
      ) : (
        <Navbar>
          <main className="px-5 my-24">
            <div className="row flex flex-wrap">
              <div className="col flex flex-col p-5 items-center rounded lg:w-1/3 w-full">
                <div className="avatar">
                  <div className="w-24 rounded-full border">
                    <Image
                      src={
                        data.name == "Adnan Dhukha A."
                          ? "/images/adnan-dhukha-profile.png"
                          : data.name == "Fajar Ardiansyah"
                          ? "/images/fajar-ardiansyah-profile.png"
                          : data.name == "Rohmatin Lutfiana"
                          ? "/images/rohmatin-lutfiana-profile.png"
                          : data.name == "Anggit Setiadi"
                          ? "/images/anggit-setiadi-profile.png"
                          : data.name == "Iqmal Maulana"
                          ? "/images/iqmal-maulana-profile.png"
                          : data.name == "Berliana Zahra Pramudhita"
                          ? "/images/berliana-zahra-profile.png"
                          : "/images/shofia-qutrotunnada-profile.png"
                      }
                      width={80}
                      height={80}
                    />
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

              <div className="col justify-center w-full lg:w-2/3 prose lg:prose-lg">
                {data.profile && (
                  <div className="biodata w-full">
                    <h3 className="font-semibold opacity-80 text-xl mb-5">Biodata Diri</h3>
                    <p dangerouslySetInnerHTML={{ __html: data.profile }}></p>
                  </div>
                )}

                <div className="divider uppercase text-lg font-semibold">Visi Misi Untuk Manusa</div>

                <div className="visi-misi prose lg:prose-lg">
                  <h3 className="font-semibold opacity-80 text-xl mb-5">Visi</h3>
                  <ol>
                    {data.vision.map((vision, index) => (
                      <li key={index}>{vision}</li>
                    ))}
                  </ol>
                  <h3 className="font-semibold opacity-80 text-xl my-5">Misi</h3>

                  <ol>
                    {data.mission.map((mission, index) => (
                      <li key={index}>{mission}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </main>
        </Navbar>
      )}
    </>
  );
};

export default CandidateDetail;
