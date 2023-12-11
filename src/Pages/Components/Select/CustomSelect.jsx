import Select from "react-select"
import { useEffect, useState } from "react"
export default function CustomSelect({Id,options,element, setElement}) {
  const [selected, setSelected] = useState(element)
  useEffect(() => {
    
    setSelected(element)
    
  }, [element,selected])


  return (
    <Select

    styles={{
      container: (provided, state) => ({
        ...provided,
        border: "none",
        outline: "none",
        color: "#000",
        backgroundColor: "#fff",
        borderRadius: "0",
        minHeight:"18px",
        height:"18px",
        fontSize:"16px",

        "&:focus": {
          outline: "none",
        },
      }),
      control: (provided, state) => ({
        ...provided,
        border: "none",
        outline: "none",
        boxShadow: "none",
        minHeight:"18px",
        height:"100%",
        borderRadius: "0",
        fontWeight:"500",
        fontSize:"16px",

        "&:hover": {
          border: "none",
        },
      }),
      indicatorsContainer: (provided) => ({
        ...provided,
        height:"18px",
        color: "#000",
        padding: "8px 0px 8px 16px"
      }),
      indicatorSeparator: (provided, state) => ({
        ...provided,
        display: "none",
      }),
      valueContainer: (provided, state) => ({
        ...provided,
        padding: "2px 0",
        fontSize:"16px",

        
      }),
      singleValue: (provided, state) => ({
        ...provided,
        height:"100px",
        margin:"0",
        fontSize:"16px",

      }),
      input: (provided, state) => ({
        ...provided,
        height:"100%",
        margin:"0",
        fontSize:"16px",

        
      }),
      

      
      
    }}
              htmlFor={Id}
              type="text"
              value={selected}
              menuPlacement="auto"
              onChange={setElement}
              placeholder={options[0].value}
              name="selectState"
              inputId="selectState"
              options={options}
              
    />
  )
}