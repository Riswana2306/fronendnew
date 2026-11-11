const  Videos=()=> {
  return (<>
 
    <div className="bg-slate-50 px-5 py-16">

      <h1 className="text-center text-4xl font-bold">
        2026 Ramzan & Kodaikanal Trip- Beautiful Memories
      </h1>

      <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-4 shadow-lg">
          <video
            controls
            className="w-full rounded-xl"
          >
            <source src="./day30.mp4" type="video/mp4" />
          </video>

          <h2 className="mt-4 text-xl font-bold">
            🌙 Ramadan Memories
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-lg">
          <video
            controls
            className="w-full rounded-xl"
          >
            <source src="./k3.mp4" type="video/mp4" />
          </video>

          <h2 className="mt-4 text-xl font-bold">
            🏔️ Kodaikanal Trip
          </h2>
        </div>

      </div>

    </div>
     </>
  );
}

export default Videos;




