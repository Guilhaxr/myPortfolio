import "./App.css"
import { useState } from "react"
import { useDrag } from "react-use-gesture"
import Header from "./components/Header"
import Dock from "./components/Dock"
import About from "./components/About"


function App() {
  const [openFolder, setOpenFolder] = useState(false)
  const [imagePos, setImagePos] = useState({x: 0, y: 0});

  const bindImagePos = useDrag ((params) => {
    setImagePos({
      x: params.offset[0],
      y: params.offset[1]
    })
  })  

  const HandlerButton = () => {
    setOpenFolder(!openFolder)
}

  return (
    <div className="backGround">
      
      <Header />
      <div {...bindImagePos()} style={{
        position:"relative",
        top: imagePos.y,
        left: imagePos.x,
      }}>
        {openFolder && <About />}
      </div>
      
      <Dock HandlerButton={HandlerButton}/>
    </div>
  );
}

export default App;
