
const Photos = () => {
  return (
    <>
      <div className="bg-slate-50 px-5 py-10">

        <h1 className="text-center text-3xl font-bold text-slate-900">
          📸 2026 Kodaikanal Memories
        </h1>

         <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-3">

          <video src="./k1.mp4"controls className="w-full rounded-xl" />
          <video src="./k2.mp4" controls className="w-full rounded-xl" />
         

        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">

          <img src="/k1.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k2.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k3.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k4.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k5.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k6.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k7.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k8.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k9.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k10.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k11.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k12.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          <img src="/k13.jpg" className="w-full h-auto rounded-xl shadow-lg" />
          
         
        </div>

        <h2 className="mt-12 text-center text-2xl font-bold">
          🎥 Kodaikanal Videos
        </h2>

       
      </div>
    </>
  );
};

export default Photos;
