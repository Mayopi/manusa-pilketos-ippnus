import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaVoteYea } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import Candidate from "@/components/Candidate";
import Head from "next/head";
import Footer from "@/components/Footer";
import Link from "next/link";

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
                <Link href={"/dashboard"} className="btn btn-primary">
                  Dashboard <BiSolidDashboard className="inline text-lg" />
                </Link>
                <Link href="#candidates" className="btn btn-secondary btn-outline">
                  Lihat Kandidat <BsFillPersonVcardFill className="inline text-lg" />
                </Link>
              </div>
            </div>

            <div className="col lg:w-1/2 w-full lg:mt-0 mt-10 flex justify-center items-center">
              <Image src={"/images/logo-pilketos.png"} height={150} width={400} />
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
