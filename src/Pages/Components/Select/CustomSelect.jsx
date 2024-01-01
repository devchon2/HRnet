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
  let customWidth, customPadding;
  if (id === 'selectState') {
    customWidth = '200px';
    customPadding = '10px';
  } else {
    customWidth = '100%';
    customPadding = '6px 0px 6px 5px';
  }

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
          backgroundColor: "#fff",
          borderRadius: "5px",
          minHeight: "1.2vw",
          fontSize: "1vw",
          padding: customPadding,
          width: customWidth,
          "&:focus": { outline: "none" },
        }),
        control: (provided) => ({ // Custom styles the container for the selected value.
          ...provided,
          border: "none",
          outline: "none",
          boxShadow: "none",
          borderRadius: "0",
          fontWeight: "500",
          fontSize: "1vw",
          minHeight: "1.2vw",
          "&:hover": { border: "none" },
        }),
        indicatorsContainer: (provided) => ({ // Custom styles for the container of the dropdown indicator.
          ...provided,
          height: "1vw",
          color: "#000",
          padding:'0',
          display:"flex",
          border:'none',

        }),
        indicatorSeparator: (provided, state) => ({ // Custom styles for the separator between the dropdown indicator and the selected value.
          ...provided,
          display: "none",
        }),
        dropdownIndicator: (provided, state) => ({ // Custom styles for the dropdown indicator.
          ...provided,
          color: "#000",
          padding:'0',
          display:"flex",
          border:'none',
        }),
        valueContainer: (provided, state) => ({ // Custom styles for the container of the selected value.
          ...provided,
          padding: " 0",
          fontSize: "1vw",
        }),
        singleValue: (provided, state) => ({ // Custom styles for the selected value.
          ...provided,
          margin: "0",
          fontSize: "1vw",
          padding: "0px 0px 0px 5px",

        }),
        input: (provided) => ({ // Custom styles for the input.
          ...provided,
          height: "16px",
          margin: "0",
          fontSize: "1vw",
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