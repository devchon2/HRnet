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
    const inputs = document.querySelectorAll('input')
  inputs.forEach(input => input.value = '')
  }
  const closeBtn = document.getElementById('closeBtn')



  const bgClassname = show ? style.bgContainer : style.Hidden
  const modaleContainerClassname = show ? style.modaleContainer : style.Hidden
  const contentContainerClassname = show ? style.contentContainer : style.Hidden 

  
  

  return (
    <>
      <div className={bgClassname} >
      </div>
      <div className={modaleContainerClassname}>
        <div className={contentContainerClassname}>

          <button id='closeBtn' onClick={handleClose}>
            &#10006;
          </button>
          <p>
            {message}
          </p>

        </div>

      </div></>

  )
}
