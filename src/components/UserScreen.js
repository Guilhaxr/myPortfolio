import { useState } from "react"
import { useDrag } from "react-use-gesture"
import About from "./About"
import Contact from "./Contact"

const UserScreen = ({HandlerAbout, HandlerWindow, openAbout, openWindow }) => {

    // const [openAbout, setOpenAbout] = useState(false)
    // const [openWindow, setOpenWindow] = useState(false)
    const [ counterAbout, setCounterAbout] = useState(0)
    const [ counter2, setCounter2] = useState(0)


  const [imagePos, setImagePos] = useState({x: 0, y: 0});
  const [aboutPos, setAboutPos] = useState({x: 0, y: 0});
 
  const bindImagePos = useDrag(({ down, offset: [ox, oy]}) => setImagePos({ x: ox, y: oy, immediate: down }), {
    bounds: {top: 16 ,  left:-Infinity, right:Infinity
    } })

    const bindAboutPos = useDrag(({ down, offset: [ox, oy] }) => setAboutPos({ x: ox, y: oy, immediate: down }), {
      bounds: {top: 16 ,  left:-Infinity, right:Infinity
      } })

 
      let incrementAbout = () => {
        setCounterAbout((counterAbout + counter2)  + 2 )
      }

      let incrementWindow = () => {
        setCounter2((counterAbout + counter2)  + 2 )
      }


    return(
        <div className="BoxLimit">

        
            <div>
                <div  onClick={incrementAbout}  {...bindAboutPos()}  style={{
            width: "fit-content",
            position:"absolute",
            top: aboutPos.y,
            left: aboutPos.x,
            zIndex: counterAbout 
            
            }}>
            { openAbout && <About HandlerButton={HandlerAbout}  />  }
            
                </div>




            <div onClick={incrementWindow}  {...bindImagePos()} style={{
            width: "fit-content",
            position:"absolute",
            top: imagePos.y,
            left: imagePos.x,
            zIndex: counter2

            }}
            >
            {openWindow && <Contact HandlerButton={HandlerWindow}  />}
            
            </div>
            </div>
        </div>
    )
}

export default UserScreen;