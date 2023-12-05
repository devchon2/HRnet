import { useEffect, useState } from "react";
import style from "./CreateUserPage.module.css";

import Modale from "../Components/Modale/Modale.jsx";
import Form from "../Components/Form/Form.jsx";

export default function CreateUserPage() {

  const [view, setView] = useState(false);

  return (
    <>
      <main>
        <h1 className={style.page_Title}>Create Employees</h1>

        <Form isModaleActive={view} action={setView} />

      </main>
      <Modale
        isActive={view}
        action={setView}

      />
    </>
  );
}
