import Select from "react-select";
import { useEffect, useState } from "react";

/**
 * CustomSelect - A React component for a customizable select input.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the select input, used for conditional styling.
 * @param {Array} props.options - Array of options for the select input.
 * @param {Object} props.element - The current selected value.
 * @param {Function} props.setElement - Function to update the selected value.
 * @returns {JSX.Element} - The rendered Select component.
 */
export default function CustomSelect({ id, options, element, setElement }) {
  // State to track the currently selected option.
  const [selected, setSelected] = useState(element);

  // Effect hook to synchronize state with prop changes.
  useEffect(() => {
    setSelected(element);
  }, [element]);

  // Custom style settings based on the component's ID.
  const customWidth = id === 'selectState' ? '200px' : '100%';
  

  // Return statement for the Select component with customized styles.
  return (
    <Select
      menuPlacement="auto"
      styles={{
        // Custom styles for the container.
        container: (provided) => ({
          ...provided,
          border: "none",
          outline: "none",
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#fff",
          borderRadius: "5px",
          fontSize: "1vw",
          padding: '0 5px',
          width: customWidth,
          height: "2vw",
          marginTop: "0.5vw",
          "&:focus": { outline: "none" },
        }),
        control: (provided) => ({ // Custom styles the container for the selected value.
          ...provided,
          border: "none",
          display:'flex',
          alignContent:'center', 
          justifyContent:'center',
          outline: "none",
          boxShadow: "none",
          borderRadius: "5px",
          overflow: "hidden",
          fontWeight: "500",
          fontSize: "1vw",
          minHeight:'2vw',
          position:"absolute",
          height:'2vw',
          width:'100%',
          top:'0',
          "&:hover": { border: "none" },
        }),
        indicatorsContainer: (provided) => ({ // Custom styles for the container of the dropdown indicator.
          ...provided,
          color: "#000",
          padding:'0',
          border:'none',

        }),
        indicatorSeparator: (provided) => ({ // Custom styles for the separator between the dropdown indicator and the selected value.
          ...provided,
          display: "none",
        }),
        dropdownIndicator: (provided) => ({ // Custom styles for the dropdown indicator.
          ...provided,
          color: "#fff",
          padding:'0',
          display:"flex",
          justifyContent:'center',
          alignItems:'center',
          border:'none',
          width:'2vw',
          height:'100%',
          backgroundSize:'cover',
          backgroundPosition:'end',
          backgroundRepeat:'no-repeat',
          svg : {
            width:'100%',
            height:'100%',
            fill:'#fff',
            strokeWidth:'1px',
            borderColor:'#001c30',
            stroke:'#001c30',
          },
        }),
        valueContainer: (provided) => ({ // Custom styles for the container of the selected value.
          ...provided,
          padding: " 0",
          fontSize: "1vw",
        justifyItems:'space-around',
      alignContent:'center',
    alignItems:'center',      }),
        singleValue: (provided) => ({ // Custom styles for the selected value.
          ...provided,
          
          

        }),
        input: (provided) => ({ // Custom styles for the input.
          ...provided,
          height: '100%',
          margin: "0",
          verticalAlign:'middle',

        }),
        inputContainer: (provided) => ({ // Custom styles for the container of the input.
          ...provided,
          margin: "0",
          
        }),
        menu: (provided) => ({ // Custom styles for the dropdown menu.
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
      onChange={setElement} // Update the selected value.
      placeholder={options[0].value} // Set the placeholder to the first option.
      name={id} 
      inputId={id} // Set the ID of the input.
      options={options} // Set the options for the list
    />
  )
}