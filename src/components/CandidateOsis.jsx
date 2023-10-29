import { TbListDetails } from "react-icons/tb";
import Link from "next/link";
import useSWR from "swr";
import stringToSlug from "@/lib/stringToSlug";
import Image from "next/image";

const fetcher = (url) => fetch(url).then((r) => r.json());

const CandidateOsis = () => {
  const { data, isLoading, error } = useSWR("/api/candidate?role=OSIS", fetcher);

  return (
    <div className="candidate" id="candidates">
      <div className="row flex flex-wrap gap-3 mt-12 justify-center items-center">
        {!data ? (
          <div className="loading loading-spinner loading-lg"></div>
        ) : (
          data.map((candidate) => {
            return (
              <div key={candidate._id} className="col flex justify-center items-center lg:w-[32%] w-full my-5">
                <div className="card w-96 bg-base-200 group rounded shadow-xl cursor-pointer">
                  <figure className="relative">
                    <Image
                      src={candidate.name == "Adnan Dhukha A." ? "/images/adnan-dhukha-pose.png" : candidate.name == "Fajar Ardiansyah" ? "/images/fajar-ardiansyah-pose.png" : "/images/rohmatin-lutfiana-pose.png"}
                      alt="Shoes"
                      width={200}
                      height={200}
                      className="rounded"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title group-hover:text-primary transition">{candidate.name}</h2>
                    <p>{candidate.bio}</p>

                    <div className="card-actions justify-end">
                      <Link href={`/candidate/detail/${candidate.slug}`} className="btn btn-outline btn-primary">
                        Vote Kandidat <TbListDetails className="inline text-lg" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CandidateOsis;
