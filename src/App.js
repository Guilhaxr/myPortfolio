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
  const [ OverLapAbout, setOverLapAbout] = useState(false)
  const [ OverLapWindow, setOverLapWindow] = useState(false)

  const [imagePos, setImagePos] = useState({x: 0, y: 0});
  const [aboutPos, setAboutPos] = useState({x: 0, y: 0});
  // const [overlap, setOverlap] = useState({zIndex:0})

// const HandlerOverlap = () => {
//   setOverlap({zIndex:1})
// }
  const bindImagePos = useDrag(({ down, offset: [ox, oy]}) => setImagePos({ x: ox, y: oy, immediate: down }), {
    bounds: {top: 0 , left:-Infinity, right:Infinity
    } })

    const bindAboutPos = useDrag(({ down, offset: [ox, oy] }) => setAboutPos({ x: ox, y: oy, immediate: down }), {
      bounds: {top: 0 , left:-Infinity, right:Infinity
      } })

      const HandlerOverlapAbout = () => {
        setOverLapAbout(OverLapAbout ? 0 : 1 )
      }
      const HandlerOverlapWindow = () => {
        setOverLapWindow(OverLapWindow ? 0 : 1)
      }

  const HandlerAbout = () => {
    setOpenAbout(!openAbout)
    
}

const HandlerWindow = () => {
  setOpenWindow(!openWindow)
}





  return (
    <div className="backGround">
      <Header />


       <div onClick={HandlerOverlapAbout} {...bindAboutPos()}  style={{
          width: "fit-content",
          position:"absolute",
          top: aboutPos.y,
          left: aboutPos.x,
          zIndex: OverLapAbout 
          
        }}>
          { openAbout && <About HandlerButton={HandlerAbout}  />  }
          
        </div>




        <div onClick={HandlerOverlapWindow} {...bindImagePos()} style={{
          width: "fit-content",
          position:"absolute",
          top: imagePos.y,
          left: imagePos.x,
          zIndex: OverLapWindow

        }}
        >
          {openWindow && <Contact HandlerButton={HandlerWindow}  />}
          
        </div>


      <Dock HandlerWindow={HandlerWindow} HandlerAbout={HandlerAbout}/>
      
    </div>
  );
}

export default App;
