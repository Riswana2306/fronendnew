const Fday = () => {
  return (
    <>
      <div className="bg-slate-50 px-5 py-12">

        <h1 className="text-center text-4xl font-bold">
          🌙 Day 30
        </h1>

        <p className="mt-4 text-center text-gray-600">
          The last day of Ramadan and Eid preparations.
        </p>

        
        <h2 className="mt-10 text-2xl font-bold text-center">
          🎥 Iftar 6:45pm
        </h2>

        <div className="mt-5">
          <div className="rounded-xl bg-white p-4 shadow">
            <video controls className="mx-auto w-full max-w-2xl rounded-lg">
              <source src="./day30.mp4" type="video/mp4" />
            </video>
            <h3 className="mt-3 text-center font-bold">
              Final Iftar
            </h3>
          </div>
        </div>

      
        <h2 className="mt-12 text-2xl font-bold text-center">
          📸iftar Photos
        </h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

          <img
            src="./5.jpeg"
            alt="Day 30"
            className="h-60 w-full rounded-xl object-cover shadow"
          />

          <img
            src="./7.jpeg"
            alt="Eid"
            className="h-60 w-full rounded-xl object-cover shadow"
          />

          <img
            src="./8.jpeg"
            alt="Iftar"
            className="h-60 w-full rounded-xl object-cover shadow"
          />

        </div>

      
        <div className="mt-12 rounded-xl bg-amber-100 p-8 text-center">

          <h2 className="text-2xl font-bold">
            ❤️ Beautiful Memories
          </h2>

          <p className="mt-4 text-gray-700">
            The last day of Ramadan was filled with happiness,
            prayers, family love and beautiful memories.
          </p>

          <h3 className="mt-5 font-bold text-amber-700">
            Ramadan Mubarak 🌙
          </h3>

        </div>

      </div>
    </>
  );
};

export default Fday;