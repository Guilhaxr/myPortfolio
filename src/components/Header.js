import "./css/Header.css"
import { useEffect, useState } from "react";


const Header = () =>{

    const [day, setDay] = useState();
    const [month, setMonth] = useState();
    const [date, setDate] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    
    const week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    useEffect(()=>{
        setInterval(()=>{
            let date = new Date();
            setDay(date.getDay())
            setMonth(date.getMonth())
            setDate(date.getDate())
            setHours(date.getHours())
            setMinutes(date.getMinutes())
        },1000)

    })
    console.log(date)
    

    return(
        <div className="header">
            
            
            <div className="headerStyle">
            <img className="topMenuIcon" src="../images/apple-white.png " alt="apple"/>
            
                <div className="headerStyle">
                    <p>Finder</p>
                </div>
                <div className="headerStyle">
                    <p>File</p>
                </div>
                <div className="headerStyle">
                    <p>Edit</p>
                </div>
                <div className="headerStyle">
                    <p>View</p>
                </div>
                <div className="headerStyle">
                    <p>Go</p>
                </div>
                <div className="headerStyle">
                    <p>Window</p>
                </div>
                <div className="headerStyle">
                    <p>Help</p>
                </div>
            </div>
                
            <dvi className="topMenuRight">  
                <p className="date">{week[day]}</p>
                <p className="date">{date}</p>
                <p className="date">{months[month]}</p>
                <p className="hours">{`${hours}:${minutes}`}</p>
                
            </dvi>
        </div>
    )
}

export default Header;