import "./index.css"
import { BiDesktop,BiLogInCircle } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaTable } from "react-icons/fa";
import { AiOutlineForm,AiFillInfoCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdSubject } from "react-icons/md";


const SidBar=()=>(
    <div className="side-bar-div">
        <h1 className="admin-one-div">Admin <span className="admin-one-div-span">One</span> </h1>
        <h1 className="sb-m-h">GENERAL</h1>
       <div className="sb-h-div sel-sb-h">
        <BiDesktop className="sb-icon"/>
       <h1 className="sb-h">Dashboard</h1>
       </div>
        <h1 className="sb-m-h">EXAMPLES</h1>
        <div className="sb-h-div">
        <FaTable className="sb-icon"/>
       <h1 className="sb-h">Tables</h1>
       </div>
       <div className="sb-h-div">
        <AiOutlineForm className="sb-icon"/>
       <h1 className="sb-h">Forms</h1>
       </div>
       <div className="sb-h-div">
        <CgProfile className="sb-icon"/>
       <h1 className="sb-h">Profile</h1>
       </div>
       <div className="sb-h-div">
        <BiLogInCircle className="sb-icon"/>
       <h1 className="sb-h">Login</h1>
       </div>
       <div className="sb-h-div">
        <MdSubject className="sb-icon"/>
       <h1 className="sb-h">Submenus</h1>
       </div>
        <h1 className="sb-m-h">ABOUT</h1>
        <div className="sb-h-div">
        <AiFillInfoCircle className="sb-icon"/>
       <h1 className="sb-h">About</h1>
       </div>
       <div className="sb-h-div">
        <BsGithub className="sb-icon"/>
       <h1 className="sb-h">GitHub</h1>
       </div>
    </div>
)

export default SidBar