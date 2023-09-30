import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { FaVoteYea, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const CandidateDetail = () => {
  const router = useRouter();
  const { candidate } = router.query;

  return (
    <>
      <Head>
        <title>{candidate ? candidate.replace("-", " ") : "Loading..."}</title>
      </Head>
      <Navbar>
        {candidate && (
          <main className="px-5 mt-24">
            <div className="row flex flex-wrap">
              <div className="col flex flex-col p-5 items-center rounded lg:w-1/3 w-full">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://via.placeholder.com/100" />
                  </div>
                </div>
                <p className="text-xs opacity-70 my-3">Kandidat Pertama</p>
                <h1 className="font-semibold tracking-wide text-xl">{candidate.replace("-", " ")}</h1>
                <p className="italic text-center">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ut?"</p>

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
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore officia aperiam neque in dolores eaque? Totam ab nemo veniam fugiat minus, explicabo quae vel excepturi tempora sint distinctio neque odit. Corrupti
                    consequuntur reiciendis laboriosam eum temporibus, delectus quia nulla facilis sed corporis obcaecati iure neque architecto impedit dicta labore nemo ab hic, est, modi fugit cum vitae. Iusto sint voluptas officia iure
                    molestiae! Dicta animi, quibusdam repellat illum iure fuga perferendis facilis veniam natus veritatis laudantium fugit molestiae facere explicabo tempore aperiam dolor voluptatem cupiditate est similique omnis culpa
                    cumque. Ducimus hic culpa laborum nam aspernatur quae deleniti quo. Libero!
                  </p>
                </div>

                <div className="divider uppercase text-lg font-semibold">Visi Misi Untuk Manusa</div>

                <div className="visi-misi">
                  <h3 className="font-semibold opacity-80 text-xl mb-5">Visi</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, ex. Possimus earum adipisci, odio cumque totam voluptatem. Numquam possimus aspernatur accusantium et eveniet, dolor debitis quis, rerum, asperiores
                    eligendi optio. Dignissimos sed culpa, at rerum necessitatibus amet, provident aperiam incidunt esse cum obcaecati excepturi voluptatibus, enim laudantium voluptatem minus ea!
                  </p>
                </div>

                <h3 className="font-semibold opacity-80 text-xl my-5">Misi</h3>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium harum, saepe deleniti temporibus esse iusto aperiam adipisci alias dolorem deserunt quaerat consequuntur voluptatum, repellat mollitia dignissimos dolor
                  earum vel est laudantium! Quis, sequi. Non ea sit modi voluptatibus eius illum minima dolor, rem maxime. Assumenda nisi hic, libero, quibusdam totam numquam nostrum reprehenderit atque blanditiis est ipsum veniam error
                  consectetur porro necessitatibus quas aliquam possimus maiores exercitationem molestias ad eligendi mollitia. Esse quaerat ratione aspernatur id culpa explicabo voluptates maiores?
                </p>
              </div>
            </div>
          </main>
        )}
      </Navbar>
    </>
  );
};

export default CandidateDetail;
