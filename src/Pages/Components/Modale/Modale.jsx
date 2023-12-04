import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";



const StyledModaleContainer = styled.div`
  display: flex;
  width: ${(props) =>
    props.modaleSize === "small"
      ? "30vw"
      : props.modaleSize === "medium"
        ? "50vw"
        : props.modaleSize === "large"
          ? "70vw"
          : props.modaleSize === "full"
            ? "100vw"
            : props.modaleContainerWidth};
  height: ${(props) =>
    props.modaleSize === "small"
      ? "30vh"
      : props.modaleSize === "medium"
        ? "50vh"
        : props.modaleSize === "large"
          ? "70vh"
          : props.modaleSize === "full"
            ? "100vh"
            : props.modaleContainerHeight};
  background-color: ${(props) => props.modaleBoxColor};
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 2;
  border-radius: ${(props) => props.radius};
`;

const StyledModaleContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.ModaleColor};
`;

const StyledModaleCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding:5px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.ButtonColor};
  position: absolute;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  top:-10px;
  right:-10px;

  &:hover {
    scale: 1.1;
  }


`;

const StyledModaleCloseButtonContent = styled.p`
  display: flex;
  
  color: ${(props) => props.itemButtonColor};
  font-size: ${(props) => props.itemButtonSize};

`;

const StyledModaleMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.textSize};

`;

const StyledBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg_Color};
  opacity: ${(props) => props.opacity};
  position: absolute;
  border-radius : ${(props) => props.radius};
`;

export default function Modale({
  show = false,
  bg_Color = "black",
  opacity = "0.5",
  radius = "none",
  modaleSize = "medium",
  modaleBoxColor = "white",
  transition = "opacity",
  buttonColor = "black",
  itemButtonColor = "white",
  itemButtonSize = "20px",
  textColor = "black",
  textSize = "20px",
  message = "Employee Created",
}) {
  const [view, setView] = useState(show);
  


  useEffect(() => {
    setView(show);
    
  }, [ show]);


  function handleClose(e) {


    e.preventDefault();
    console.log("close");

    
    setView(false);
    

    


  }

  if (view) {
    
    return (
      <>
        <StyledBGContainer
          bg_Color={bg_Color}
          opacity={opacity}
          onClick={handleClose}

        />

        <StyledModaleContainer
                    radius={radius}
                    modaleSize={modaleSize}
                    modaleBoxColor={modaleBoxColor}
                    


        >
          <StyledModaleContent
            

          >
            <StyledModaleCloseButton
              onClick={handleClose}

            >

              <StyledModaleCloseButtonContent



              >{/* un code ascii qui represente une croix*/}
                &#10006;

              </StyledModaleCloseButtonContent>



            </StyledModaleCloseButton>
            <StyledModaleMessage
              


            >
              {message}
            </StyledModaleMessage>
          </StyledModaleContent>
        </StyledModaleContainer>
      </>
    );
  }

  return null;
}
