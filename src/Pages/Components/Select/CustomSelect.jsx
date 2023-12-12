import Select from "react-select"
import { useEffect, useState } from "react"
export default function CustomSelect({ id, options, element, setElement }) {
  const [selected, setSelected] = useState(element)
  
  useEffect(() => {

    setSelected(element)


  }, [element])


  return (
    <Select
      
      styles={{
        container: (provided, state) => ({
          ...provided,
          border: "none",
          outline: "none",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "5px",
          minHeight: "1.2vw",
          fontSize: "1vw",
          padding: "0.6vw 0",

          "&:focus": {
            outline: "none",
          },
        }),
        control: (provided, state) => ({
          ...provided,
          border: "none",
          outline: "none",
          boxShadow: "none",
          borderRadius: "0",
          fontWeight: "500",
          fontSize: "1vw",
          minHeight: "1.2vw",
          "&:hover": {
            border: "none",
          },
        }),
        indicatorsContainer: (provided) => ({
          ...provided,
          height: "1vw",
          color: "#000",
          padding: "0.5vw 0 0.5vw 1vw"

        }),
        indicatorSeparator: (provided, state) => ({
          ...provided,
          display: "none",
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          padding: " 0",
          fontSize: "1vw",


        }),
        singleValue: (provided, state) => ({
          ...provided,
          margin: "0",
          fontSize: "1vw",
          padding: "0px 0px 0px 5px",

        }),
        input: (provided) => ({
          ...provided,
          
          height: "100%",
          margin: "0",
          fontSize: "1vw",
        }),
      }}
      type="text"
      value={selected}
      menuPlacement="auto"
      onChange={setElement}
      placeholder={options[0].value}
      name="selectState"
      inputId={id}
      options={options}

    />
  )
}