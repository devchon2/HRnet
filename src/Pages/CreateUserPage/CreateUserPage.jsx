import { useEffect, useState } from "react";
import style from "./CreateUserPage.module.css";
import Modale from "../Components/Modale/Modale.jsx";
import Form from "../Components/Form/Form.jsx";



export default function CreateUserPage() {
  const [validateForm, setValidateForm] = useState(false);
  const [activeModale, setActiveModale] = useState(false);

  
 
  useEffect(() => {
    if (validateForm) {
      setActiveModale(true);
      
    } else {
      setActiveModale(false);
    }    
  }, [validateForm]);

   

  return (
    <>
      <main>
        <h1 className={style.page_Title}>Create Employees</h1>

        <Form isActive={activeModale} setValidateForm={setValidateForm} />

      </main>
      <Modale
        isActive={validateForm}
        setActiveModale={setActiveModale}

      />
    </>
  );
}
