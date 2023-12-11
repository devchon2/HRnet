import Select from "react-select"
import { useEffect, useState } from "react"
import { departments } from "../../../utils/utils.js"
export default function SelectStates({department, setDepartment}) {
  const [selected, setSelected] = useState(department)

  useEffect(() => {    
    

    setSelected(department)
    
  }, [department,selected])


  return (
    <Select
              type="text"
              value={selected}

              onChange={setDepartment}
              placeholder={departments[0].value}
              name="selectDepartment"
              inputId="selectDepartment"
              options={departments}
              
    />
  )
}