import "./css/Docks.css"


const Dock = ({HandlerWindow, HandlerAbout}) =>{

    return (
        <footer className="dock-container">
            <div className="dock">
                <ul>
                    <li>
                        <span>Finder</span>
                        <button  onClick= {HandlerAbout}><img src="../images/finderMe.png" alt="maps" /></button>
                    </li>
                    <li>    
                        <span>Finder</span>
                        <button onClick= {HandlerWindow}><img src="../images/finderMe.png" alt="maps" /></button>
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
        </footer>
    )

}

export default Dock;