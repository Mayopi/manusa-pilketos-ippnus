import { TbListDetails } from "react-icons/tb";

const Candidate = () => {
  return (
    <div className="candidate">
      <div className="row flex flex-wrap gap-3 mt-12 justify-center items-center">
        <div className="col flex lg:justify-center justify-start items-center lg:w-[32%] w-full my-5">
          <div className="card w-96 bg-base-100 group rounded shadow-xl cursor-pointer">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body">
              <h2 className="card-title group-hover:text-primary transition">Kandidat 1</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?</p>

              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">
                  Detail Kandidat <TbListDetails className="inline text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col flex lg:justify-center justify-end items-center lg:w-[32%] w-full my-5">
          <div className="card w-96 bg-base-100 group rounded shadow-xl cursor-pointer">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body">
              <h2 className="card-title group-hover:text-primary transition">Kandidat 2</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?</p>

              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">
                  Detail Kandidat <TbListDetails className="inline text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col flex lg:justify-center justify-start items-center lg:w-[32%] w-full my-5">
          <div className="card w-96 bg-base-100 group rounded shadow-xl cursor-pointer">
            <figure>
              <img src="https://via.placeholder.com/200" alt="Shoes" className="rounded" />
            </figure>
            <div className="card-body">
              <h2 className="card-title group-hover:text-primary transition">Kandidat 3</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, perferendis?</p>

              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-primary">
                  Detail Kandidat <TbListDetails className="inline text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
