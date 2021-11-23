import "./App.css"
import { useState } from "react"
import { useDrag } from "react-use-gesture"
import Header from "./components/Header"
import Dock from "./components/Dock"
import About from "./components/About"



function App() {
  const [openFolder, setOpenFolder] = useState(false)
  const [imagePos, setImagePos] = useState({x: 0, y: 0});


  const bindImagePos = useDrag(({ down, offset: [ox, oy] }) => setImagePos({ x: ox, y: oy, immediate: down }), {
    bounds: {top: 0 , left:-Infinity, right:Infinity
    } })



  const HandlerButton = () => {
    setOpenFolder(!openFolder)
}

  return (
    <div className="backGround">
      <Header />
     
        <div {...bindImagePos()} style={{
          width: "fit-content",
          position:"relative",
          top: imagePos.y,
          left: imagePos.x,
        }}>
          {openFolder && <About HandlerButton={HandlerButton}/>}
        </div>
      
      <Dock HandlerButton={HandlerButton}/>
    </div>
  );
}

export default App;
