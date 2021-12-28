import { useState } from "react"
import { useDrag } from "react-use-gesture"
import {useSpring, animated} from "react-spring"
import About from "./About"
import Contact from "./Contact"
import  "./css/UserScreen.css"

const UserScreen = ({HandlerAbout, HandlerWindow, openAbout, openWindow }) => {
   
  const [ counterAbout, setCounterAbout] = useState(0);
  const [ counter2, setCounter2] = useState(0);

  const [aboutPos, setAboutPos] = useState({x: 0, y: 0});
  const [ProjectPos, setProjectPos] = useState({x: 0, y: 0});
  

  const bindAboutPos = useDrag(({ offset: [ox, oy] }) => setAboutPos({ x: ox, y: oy}), {
      bounds: {top: 16 ,  left:-Infinity, right:Infinity
      } })

  const bindProjectPos = useDrag(({  offset: [ox, oy]}) => setProjectPos({ x: ox, y: oy }), {
      bounds: {top: 16 ,  left:-100, right:Infinity
      } })

      let incrementAbout = () => {
        setCounterAbout((counterAbout + counter2)  + 2 )
      }

      let incrementWindow = () => {
        setCounter2((counterAbout + counter2)  + 2 )
      }

    return(
        <section className="ScreenLimit">

            <div  onClick={incrementAbout}  {...bindAboutPos()}  style={{
              width: "fit-content",
              position:"absolute",
              top: aboutPos.y,
              left: aboutPos.x,
              zIndex: counterAbout 
            }}>
              { openAbout && <About HandlerButton={HandlerAbout}  />  }
            </div>


            <div onClick={incrementWindow}  {...bindProjectPos()} style={{
              width: "fit-content",
              position:"absolute",
              top: ProjectPos.y,
              left: ProjectPos.x,
              zIndex: counter2
            }}
            >
              {openWindow && <Contact HandlerButton={HandlerWindow}  />}
            </div>
        </section>
    )
}

export default UserScreen;

// const bindAboutPos = useDrag(({ down, offset: [x, y] }) => aboutPos({ x: x, y: y, immediate: down }), {
//   bounds: {top: 16 ,  left:-Infinity, right:Infinity
//   } })