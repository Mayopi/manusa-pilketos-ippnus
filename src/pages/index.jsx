import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";
import Candidate from "@/components/Candidate";
import Head from "next/head";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Manusa Pilketos</title>
      </Head>
      <Navbar>
        <main className={`px-5 ${inter.className} mt-24`}>
          <div className="hero-section row flex flex-wrap">
            <div className="col lg:w-1/2 w-full">
              <h1 className="font-bold uppercase lg:text-3xl text-2xl tracking-wider lg:w-[80%]">PERMUDAH PEMILIHAN CALON KETUA OSIS MU!</h1>

              <p className="italic my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia eos porro et voluptatibus</p>

              <div className="button-container flex gap-3">
                <button className="btn btn-primary">
                  Mulai Pemilihan <FaVoteYea className="inline text-lg" />
                </button>
                <button className="btn btn-primary btn-outline">
                  Lihat Kandidat <BsFillPersonVcardFill className="inline text-lg" />
                </button>
              </div>
            </div>

            <div className="col lg:w-1/2 w-full lg:mt-0 mt-10 flex justify-center items-center">
              <div className="card w-96 bg-base-100 rounded shadow-xl">
                <figure>
                  <img src="https://via.placeholder.com/300x150" alt="Shoes" className="rounded" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Pemilihan Ketua Osis</h2>
                  <p>Manusa Mengadakan Pemilihan Ketua Osis Periode 2023 - 2024</p>
                </div>
              </div>
            </div>
          </div>

          <div className="divider uppercase font-semibold text-xl">Calon Ketua Osis</div>

          <Candidate />
        </main>
      </Navbar>

      <Footer />
    </>
  );
}
