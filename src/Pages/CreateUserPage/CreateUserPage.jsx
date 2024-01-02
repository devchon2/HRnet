import { useEffect, useState } from "react";
import style from "./CreateUserPage.module.css";
import Form from "../Components/Form/Form.jsx";
import TinyModale from "tinymodalebyrchon";

export default function CreateUserPage() {
  // State for tracking form validation status
  const [validateForm, setValidateForm] = useState(false);

  // State to control the visibility of the modal
  const [activeModale, setActiveModale] = useState(false);

  // State to track the need for closing the modal
  const [needClose, setNeedClose] = useState("");

  // Effect hook that activates the modal when the form is validated
  useEffect(() => {
    if (validateForm) {
      setActiveModale(true);
    }
  }, [validateForm]);

  return (
    // JSX structure for the CreateUserPage component
    <>
      <main className={style.main}>
        {/* Page title */}
        <h1 className={style.page_Title}>Create Employees</h1>

        {/* Form component for creating new employees */}
        <Form
          isModaleActive={activeModale}
          setValidateForm={setValidateForm}
          setNeedClose={setNeedClose}
          needClose={needClose}
        />
      </main>

      {/* TinyModale component for displaying modal popups */}
      <TinyModale
        onClose={setNeedClose}
        isValidateForm={validateForm}
        setActiveModale={setActiveModale}
        modaleboxcolor="green"
        radius="20px"
        buttonMargin="25px"
        btnOnClick={setActiveModale}
        showButton={true}
        buttonTextContent="yeeeahhh"
        buttonRadius="50px"
        bgAnimation="fade"
      />
    </>
  );
}
