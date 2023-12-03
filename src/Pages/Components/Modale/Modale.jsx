import { useEffect } from "react";
import style from "./Modale.module.css";
import { useState } from "react";





export default function Modale(
  {
    Text = 'test',
    Show = false,
  }

) {

  const [message, setMessage] = useState('')
  const [show, setShow] = useState(false)


  useEffect(() => {
    setMessage(Text);
    setShow(Show);
  }, [Text, Show]);


  function handleClose(e) {
    e.preventDefault()
    setShow(false)
  }
 const closeBtn = document.getElementById('closeBtn')

 

const bgClassname = show ? style.bgContainer : style.bgContainerHidden




  return (
    <div className={bgClassname} >
      <div className={style.contentContainer}>

       
        <button id='closeBtn' onClick={handleClose}>               
        </button>
          <p>
            {message}
          </p>
        

      </div>
    </div>
  )
}
