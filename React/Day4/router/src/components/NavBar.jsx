import { Link } from "react-router-dom"
const NavBar=()=>{
    return (<>

    <div className="bg-gray-500  flex items-center justify-between p-3 font-bold">
        <div className="left">
            <img src="./favicon.svg"/>
        </div>
        <div className="flex gap-4 justify-end items-center">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/help"}>Help</Link>
        </div>
    </div>
    </>)

}
export default NavBar