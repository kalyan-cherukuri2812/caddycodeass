import "./index.css"


import { BsGithub,BsPeopleFill,BsFillBarChartFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";



import Tabel from "../Tabel";
import Charts from "../Chart"


const Display=()=>(
    <div className="display-div">

       <div className="top-div-1">
        <div className="top-div-sub-1">
            <h1 className="top-div-sub-1-h" >Admin   /</h1>
            <h1 className="top-div-sub-1-h d" >Dashbord</h1>
        </div>
        <button className="github-btn" type="button"><BsGithub className="git-icon"/>GitHub</button>
       </div>

       <div className="dashbord-card">
        <h1 className="dashboard-h">Dashbord</h1>
        <button className="dashboard-btn" typr="button">Button</button>
       </div>

       <div className="cl-s-p-div">
        <div className="cl-s-p-card"> 
            <div className="cl-s-p-sub">
                <h1 className="cl-s-p-h1">Clients</h1>
                <h1  className="cl-s-p-h2">512</h1>
            </div>
<BsPeopleFill   className="cl-icon"/>
        </div>

        <div  className="cl-s-p-card">
            <div  className="cl-s-p-sub">
                <h1 className="cl-s-p-h1">Sales</h1>
                <h1  className="cl-s-p-h2">$7,770</h1>
            </div>
<AiOutlineShoppingCart   className="s-icon"/>
        </div>

        <div  className="cl-s-p-card">
            <div  className="cl-s-p-sub">
                <h1 className="cl-s-p-h1">Performance</h1>
                <h1  className="cl-s-p-h2">256%</h1>
            </div>
<BsFillBarChartFill   className="p-icon"/>
        </div>
       </div>

       <div className="tabel-clint-div per-c">
        <div className="tabrl-clint-card">
            <BsPeopleFill className="pep-icon"/>
            <h1 className="tabel-clint-h">Clients</h1>
        </div>

        <MdRefresh/>
        </div>
       <Charts/>
       <Tabel/>
    </div>
)
export default Display