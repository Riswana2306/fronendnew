import { Link } from "react-router-dom";

const Navbar=()=>{
  return (<>
  
  
    <div className="sticky top-0 z-50 bg-slate-950 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link to="/"className="text-xl  font-bold text-amber-300 md:text-2xl"
        >
          🌙AKM Ramzan journey 2️⃣0️⃣2️⃣6️⃣ </Link>

        <div className="hidden gap-6 md:flex">
          <Link to="/" className="hover:text-amber-300">🏠 Home</Link>

          <Link to="/day30" className="hover:text-amber-300"> 🌙 Day 30 </Link>

          <Link to="/eid" className="hover:text-amber-300">⭐ Eid Day  </Link>

          <Link to="/kodaikanal" className="hover:text-amber-300"> 🏔️ Kodaikanal</Link>

          <Link to="/photos" className="hover:text-amber-300"> 📸 Photos</Link>

          <Link to="/videos" className="hover:text-amber-300"> 🎥 Video </Link>
        </div>
      </div>
    </div>
      </>
  );
}

export default Navbar;