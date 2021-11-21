import "./css/Docks.css"


const Dock = ({HandlerButton}) =>{

    return (
        <div className="dock-container">
            <div className="dock">
                <ul>
                    <li>
                        <span>Finder</span>
                        <button  onClick= {HandlerButton}><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                    <li>    
                        <span>Finder</span>
                        <button onClick=" hello"><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                    <li>
                        
                        <span>Finder</span>
                        <button onClick=" hello"><img src="../images/finderMe.png" alt="maps" /></button>
                        {/* <img src="../images/finderMe.png" alt="maps" />  */}
                    </li>
                    <li>
                        <span>Finder</span>
                        <button onClick=" hello"><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                </ul>
            </div>    
        </div>
    )

}

export default Dock;