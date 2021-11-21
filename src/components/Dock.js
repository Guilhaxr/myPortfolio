import "./css/Docks.css"
const Dock = () =>{

    return(
        <div className="dock-container">
            <div className="dock">
                <ul>
                    <li>
                        <span>Finder</span>
                        <img src="../images/finderMe.png" alt="calendar" />
                    </li>
                    <li>    
                        <span>Finder</span>
                        <img src="../images/finderMe.png" alt="finderMe" />
                    </li>
                    <li>
                        <span>Finder</span>
                        <img src="../images/finderMe.png" alt="maps" /> 
                    </li>
                    <li>
                        <span>Finder</span>
                        <img src="../images/finderMe.png" alt="calculator" />
                    </li>
                </ul>
            </div>    
        </div>
    )

}

export default Dock;