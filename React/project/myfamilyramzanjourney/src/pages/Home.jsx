
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16">

        <h2 className="text-center text-3xl font-bold text-slate-900">
          My Family Ramzan Special Memories 2026
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img src="./30.png" alt="Day 30" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">🌙 Day 30</h3>
              <p className="mt-3 text-gray-600">
                The last day of Ramadan, Eid preparation,
                Iftar and beautiful memories.
              </p>

              <Link to="/day30" className="mt-5 inline-block rounded-lg bg-slate-950 px-5 py-2 text-white hover:bg-amber-500">
                View Day 30
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img src="./eid.jpg" alt="Eid Day" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">⭐ Eid Day </h3>
              <p className="mt-3 text-gray-600">
                Eid prayer, new dress, family celebration
                and beautiful Eid memories.
              </p>

              <Link to="/eid" className="mt-5 inline-block rounded-lg bg-slate-950 px-5 py-2 text-white hover:bg-amber-500">
                View Eid
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img src="./kodai.jpeg" alt="Kodaikanal" className="h-56 w-full object-cover" />

            <div className="p-6">
              <h3 className="text-2xl font-bold">🍀 Kodaikanal</h3>
              <p className="mt-3 text-gray-600">
                A beautiful trip filled with nature,
                travel and unforgettable moments.
              </p>

              <Link to="/kodaikanal" className="mt-5 inline-block rounded-lg bg-slate-950 px-5 py-2 text-white hover:bg-amber-500">
                View Trip
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 text-center text-white">
        <h2 className="text-3xl font-bold text-amber-300">
          Ramadan Memories 🤍
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Every moment of Ramadan is a beautiful memory
          that stays in the heart forever.
        </p>
      </section>
    </>
  );
};

export default Home;
