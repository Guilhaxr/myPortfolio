import "./App.css"
import { useState } from "react"
// import { useDrag } from "react-use-gesture"
import Header from "./components/Header"
import Dock from "./components/Dock"
// import About from "./components/About"
// import Contact from "./components/Contact"
import UserScreen from "./components/UserScreen"



function App() {
  const [openAbout, setOpenAbout] = useState(false)
  const [openWindow, setOpenWindow] = useState(false)



    const HandlerAbout = () => {
      setOpenAbout(!openAbout)
      
  }

  const HandlerWindow = () => {
    setOpenWindow(!openWindow)
  }





  return (
    <div className="backGround">
      <Header />
      <UserScreen 
        HandlerWindow={HandlerWindow}
        HandlerAbout={HandlerAbout}
        openAbout={openAbout}
        openWindow={openWindow}
      />

      <Dock HandlerWindow={HandlerWindow} HandlerAbout={HandlerAbout}/>
      
    </div>
  );
}

export default App;
