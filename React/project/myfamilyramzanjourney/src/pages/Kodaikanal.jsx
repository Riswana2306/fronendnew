const Kodaikanal=()=> {
  return (
    <div className="bg-slate-50">

      <section className="mx-auto max-w-6xl px-5 py-16">

        <h1 className="text-center text-4xl font-bold">
          🏔️ Kodaikanal Trip 2026
        </h1>

        <p className="mt-4 text-center text-gray-600">
          Beautiful places, nature and unforgettable memories.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl bg-white shadow-lg">

          <img
            src="./k9.jpg"
            alt="Kodaikanal"
            className="h-96 w-full object-cover"
          />

          <div className="p-8">
            <h2 className="text-2xl font-bold">
              🌿 My Kodaikanal Memories
            </h2>

            <p className="mt-4 text-gray-600">
              The trip was filled with beautiful views,
              cool weather, nature and lots of happy moments.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Kodaikanal;