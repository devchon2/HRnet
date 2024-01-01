import Select from "react-select"
import { useEffect, useState } from "react"
export default function CustomSelect({ id, options, element, setElement }) {
  const [selected, setSelected] = useState(element)
  useEffect(() => {

    setSelected(element)

  }, [element])

      let customWidth;
      let customPadding;

    id === 'selectState' ? customWidth = '200px' : customWidth = '100%';
    id === 'selectState' ? customPadding = '10px' : customPadding = '6px 0px 6px 5px';

  return (
    <Select
        menuPlacement="auto"
      styles={{
        container: (provided) => ({
          ...provided,
          border: "none",
          outline: "none",
          color: "#000",
          backgroundColor: "#fff",
          borderRadius: "5px",
          minHeight: "1.2vw",
          fontSize: "1vw",
          padding: customPadding,
          width: customWidth,

          "&:focus": {
            outline: "none",
          },
        }),
        
        control: (provided) => ({
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
          padding:'0',
          display:"flex",
          border:'none',

        }),
        indicatorSeparator: (provided, state) => ({
          ...provided,
          display: "none",
        }),
        dropdownIndicator: (provided, state) => ({
          ...provided,
          color: "#000",
          padding:'0',
          display:"flex",
          border:'none',
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
        menu: (provided) => ({
          ...provided,
          position: "absolute",
          left:'0',
          top:'0',
          borderRadius: "5px",
          marginTop: "0",
          fontSize: "1vw",
          zIndex: 100,
          
        }),
      }}
      type="text"
      value={selected}
      onChange={setElement}
      placeholder={options[0].value}
      name="selectState"
      inputId={id}
      options={options}

    />
  )
}