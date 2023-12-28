import { useEffect, useState } from "react";
import style from "./CreateUserPage.module.css";
import Form from "../Components/Form/Form.jsx";
import TinyModale from "../Components/Modale/TinyModale.jsx";



export default function CreateUserPage() {
  const [validateForm, setValidateForm] = useState(false);
  const [activeModale, setActiveModale] = useState(false);
  const [needClose, setNeedClose] = useState('');
  

  
 
  useEffect(() => {
    if (validateForm) {
      setActiveModale(true);
    }
    
    
    
  }, [validateForm ]);
   

  return (
    <>
      <main>
        
        <h1 className={style.page_Title}>Create Employees</h1>
        <Form isModaleActive={activeModale} setValidateForm={setValidateForm} setNeedClose={setNeedClose} needClose={needClose}  />
      
      </main>
      
      <TinyModale  onClose={setNeedClose} isValidateForm={validateForm} setActiveModale={setActiveModale} modaleboxcolor="green" radius='20px' 
        buttonMargin="25px" btnOnClick={setActiveModale} showButton={true}  buttonTextContent="yeeeahhh" buttonRadius="50px" bgAnimation="fade" />
    </>
  );
}
