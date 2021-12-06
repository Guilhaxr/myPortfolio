import "./App.css"
import { useState } from "react"
import { useDrag } from "react-use-gesture"
import Header from "./components/Header"
import Dock from "./components/Dock"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {
  const [openAbout, setOpenAbout] = useState(false)
  const [openWindow, setOpenWindow] = useState(false)
  const [imagePos, setImagePos] = useState({x: 0, y: 0});
  const [aboutPos, setAboutPos] = useState({x: 0, y: 0});


  const bindImagePos = useDrag(({ down, offset: [ox, oy] }) => setImagePos({ x: ox, y: oy, immediate: down }), {
    bounds: {top: 0 , left:-Infinity, right:Infinity
    } })

    const bindAboutPos = useDrag(({ down, offset: [ox, oy] }) => setAboutPos({ x: ox, y: oy, immediate: down }), {
      bounds: {top: 0 , left:-Infinity, right:Infinity
      } })



  const HandlerAbout = () => {
    setOpenAbout(!openAbout)
    
}

const HandlerWindow = () => {
  setOpenWindow(!openWindow)
}



  return (
    <div className="backGround">
      <Header />
     
        <div {...bindAboutPos()} style={{
          width: "fit-content",
          position:"absolute",
          top: aboutPos.y,
          left: aboutPos.x,
        }}>
          { openAbout && <About HandlerButton={HandlerAbout}/>  }
          
        </div>

        <div {...bindImagePos()} style={{
          width: "fit-content",
          position:"absolute",
          top: imagePos.y,
          left: imagePos.x,
        }}>
          {openWindow && <Contact HandlerButton={HandlerWindow} />}
          
        </div>

        
        
        
      <Dock HandlerWindow={HandlerWindow} HandlerAbout={HandlerAbout}/>
      
    </div>
  );
}

export default App;
