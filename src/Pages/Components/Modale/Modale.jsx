import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.BgColor};
  opacity: ${(props) => props.Opacity};
  position: absolute;
  border-radius : ${(props) => props.BorderRadius};
`;

const StyledModaleContainer = styled.div`
  display: flex;
  width: ${(props) =>
    props.ModaleSize === "small"
      ? "30vw"
      : props.ModaleSize === "medium"
        ? "50vw"
        : props.ModaleSize === "large"
          ? "70vw"
          : props.ModaleSize === "full"
            ? "100vw"
            : props.ModaleContainerWidth};
  height: ${(props) =>
    props.ModaleSize === "small"
      ? "30vh"
      : props.ModaleSize === "medium"
        ? "50vh"
        : props.ModaleSize === "large"
          ? "70vh"
          : props.ModaleSize === "full"
            ? "100vh"
            : props.ModaleContainerHeight};
  background-color: ${(props) => props.ModaleBoxColor};
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 2;
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
  color: ${(props) => props.ModaleMessageColor};
  font-size: ${(props) => props.ModaleMessageSize};

`;

export default function Modale({
  Show = false,
  BgColor = "black",
  Opacity = "0.5",

  ModaleSize = "medium",
  ModaleColor = "white",


  ButtonColor = "black",
  ItemButtonColor = "white",
  ItemButtonSize = "20px",
  TextColor = "black",
  TextSize = "20px",
  Message = "Employee Created",
}) {
  const [show, setShow] = useState(Show);
  const [modaleSize, setModaleSize] = useState(ModaleSize);
  const [modaleColor, setModaleColor] = useState(ModaleColor);
  const [bgColor, setBgColor] = useState(BgColor);
  const [opacity, setOpacity] = useState(Opacity);
  const [buttonColor, setButtonColor] = useState(ButtonColor);
  const [itemButtonColor, setItemButtonColor] = useState(ItemButtonColor);
  const [itemButtonSize, setItemButtonSize] = useState(ItemButtonSize);
  const [textColor, setTextColor] = useState(TextColor);
  const [textSize, setTextSize] = useState(TextSize);
  const [message, setMessage] = useState(Message);



  useEffect(() => {
    setShow(Show);
    setModaleSize(ModaleSize);
    setModaleColor(ModaleColor);
    setBgColor(BgColor);
    setOpacity(Opacity);
    setButtonColor(ButtonColor);
    setItemButtonColor(ItemButtonColor);
    setItemButtonSize(ItemButtonSize);
    setTextColor(TextColor);
    setTextSize(TextSize);
    setMessage(Message);

  }, [Show, ModaleSize, ModaleColor, BgColor, Opacity, ButtonColor, ItemButtonColor, ItemButtonSize, TextColor, TextSize, Message]);

  function handleClose(e) {


    e.preventDefault();
    console.log("close");
    setShow(false);
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");


  }

  if (show) {

    return (
      <>
        <StyledBGContainer
          BgColor={bgColor}
          Opacity={opacity}




        />

        <StyledModaleContainer
          ModaleSize={modaleSize}


        >
          <StyledModaleContent
            ModaleColor={modaleColor}

          >
            <StyledModaleCloseButton
              ButtonColor={buttonColor}
              onClick={handleClose}

            >

              <StyledModaleCloseButtonContent

                ItemButtonColor={itemButtonColor} ItemButtonSize={itemButtonSize}


              >{/* un code ascii qui represente une croix*/}
                &#10006;

              </StyledModaleCloseButtonContent>



            </StyledModaleCloseButton>
            <StyledModaleMessage
              ModaleMessageColor={textColor}
              ModaleMessageSize={textSize}


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
