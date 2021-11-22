import "./css/Page.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";


const About = () => {


    return(
        
    <div className="window-container">
        <div className="titleBar">
            <div className="buttons">
                <div className="close">
                    <button className="closeButton"><strong>x</strong></button>
                </div>
                <div className="minimize">
                    <button className="minimizeButton"><strong>&ndash;</strong></button>
                </div>
                <div className="zoom">
                    <button className="zoomButton"><strong>+</strong></button>
                </div>
            </div>
        </div>
        <div className="windowInformation">
            <p>hellooo My name is G </p>
            <p>My projects</p>
        </div>
    </div>
    )
}

export default About;