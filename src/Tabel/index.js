import "./index.css"
import { faker } from '@faker-js/faker';
import { MdSettingsApplications,MdRefresh } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { MdDelete} from "react-icons/md";

import  { Component } from 'react'

import ProgressBar from "@ramonak/react-progress-bar";

export default class Tabel extends Component {
    state={data:[],page:[0,10,1]}

    componentDidMount=()=>{
        let data=[]
        for (let i=0;i<30;i++){
            const id=faker.datatype.uuid();
            const name=faker.name.fullName();
           const company=faker.company.name();
           const city=faker.address.city();
           const progress=faker.datatype.number({min: 5, max: 100});
           const date=String(faker.date.past());

        data=[...data,{id,name,company,city,progress,date}]
        }
        this.setState({data:data})
    }

    page1=()=>{
        this.setState({page:[0,10,1]})
    }
    
    page2=()=>{
        this.setState({page:[10,20,2]})
    }
    
    page3=()=>{
        this.setState({page:[20,30,3]})
    }

    delete=(id)=>{
        const {data}=this.state
        let filData=data.filter(each=>(
            each.id!==id
        ))

        this.setState({data:filData})

    }

    

  render() {
    const {data,page}=this.state
   console.log(page)
   const bg=["#ff410f","#cd2626","#003153","#b7410e","#9fb6cd","#6a329f"]
  
    
    return (
      <div className="tabel-div">

        <div className="responsive-div">
        <div className="responsive-card">
            <MdSettingsApplications className="responsive-icon" />
            <h1 className="responsive-h">Responsive Tabel</h1>
        </div>
        <button className="dismiss-btn" type="button">Dismiss</button>
        </div>
       

       <div>

        <div className="tabel-clint-div">
        <div className="tabrl-clint-card">
            <BsPeopleFill className="pep-icon"/>
            <h1 className="tabel-clint-h">Clients</h1>
        </div>
        <MdRefresh/>
        </div>

       


     <ul>
     <li className="tadel-headings-div">
           <h1 className="name-h">Name</h1>
           <h1 className="company-h">company</h1>
           <h1 className="city-h">City</h1>
           <h1 className="progress-h">progress</h1>
           <h1 className="created-h">Created</h1>
        </li>
        {data.slice(page[0],page[1]).map(each=>(
            <li  className="tadel-headings-div">
                <h1 className="name-data"><h1 className="spam-name-icon" style={{backgroundColor:bg[Math.ceil(Math.random()*bg.length)]}}>{each.name.slice(0,1)}</h1>{each.name}</h1>
                <h1 className="compant-data">{each.company}</h1>
                <h1 className="city-data">{each.city}</h1>
                <h1 className="progress-data"><ProgressBar completed={each.progress} customLabel=" " height="10px" width="90%" bgColor="rgba(29, 33, 253, 0.734)" /></h1>
                <h1 className="date-data">{each.date.slice(4,15)}
                <div className="created-icons-div"  >
                    <div className="cr-icon" style={{backgroundColor:"blue"}}>
                        <AiFillEye />
                    </div>
                    <div  className="cr-icon" style={{backgroundColor:"red"}}>
                        <MdDelete onClick={()=>this.delete(each.id)}/>
                    </div>
                </div>
                </h1>
            </li>
        ))}
        <li className="limit-div">
            <div className="lim-card">
                <h1 onClick={this.page1} className="lim-h">1</h1>
                <h1 onClick={this.page2}  className="lim-h">2</h1>
                <h1 onClick={this.page3}  className="lim-h">3</h1>
            </div>
            <h1  className="lim-page">page {page[2]} of 3</h1>
        </li>
     </ul>
       
       </div>
      </div>
    )
  }
}