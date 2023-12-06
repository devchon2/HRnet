import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const bumpAnimation = keyframes`
0% {
  scale: 0;
}
80% {
  scale: 1.1;
}
100% {
  scale: 1;
}
`

const OpacityAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: ${(props) => props.opacity}
}
`



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
  animation: ${(props) => props.animation === "opacity" ? OpacityAnimation : props.animation === "bump" ? bumpAnimation : null} 0.5s ease-in-out;

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
  font-family: ${(props) => props.textFamily};
`;

const StyledModaleMessage = styled.p`
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
  background-color: ${(props) => props.Bg_Color};
  opacity: ${(props) => props.opacity};
  position: absolute;
  
  border-radius : ${(props) => props.radius};
`;

export default function Modale({
  isActive,
  action,
  Bg_Color = "black",
  Opacity = "0.5",
  radius = "0",
  modaleSize = "medium",
  modaleBoxColor = "white",
  animation = "opacity",
  buttonColor = "black",
  itemButtonColor = "white",
  itemButtonSize = "20px",
  textColor = "black",
  textFamily = "arial",
  textSize = "20px",
  message = "Employee Created !",
}) {
  const [view, setView] = useState(isActive);
  const [active, setActive] = useState('');
  const [mdlSize, setMdlSize] = useState('');
  const [mdlBoxColor, setMdlBoxColor] = useState('');
  const [anim, setAnim] = useState('');
  const [btnColor, setBtnColor] = useState('');
  const [itmBtnColor, setItmBtnColor] = useState('');
  const [itmBtnSize, setItmBtnSize] = useState('');
  const [txtColor, setTxtColor] = useState('');
  const [txtSize, setTxtSize] = useState('');
  const [txtFamily, setTxtFamily] = useState('');
  const [msg, setMsg] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [opa, setOpa] = useState('');
  const [rad, setRad] = useState('');




  useEffect(() => {
    setView(isActive);
    setActive(isActive);
    setMdlSize(modaleSize);
    setMdlBoxColor(modaleBoxColor);
    setAnim(animation);
    setBtnColor(buttonColor);
    setItmBtnColor(itemButtonColor);
    setItmBtnSize(itemButtonSize);
    setTxtColor(textColor);
    setTxtSize(textSize);
    setTxtFamily(textFamily);
    setMsg(message);
    setBgColor(Bg_Color);
    setOpa(Opacity);
    setRad(radius);




  }, [ isActive, modaleSize, modaleBoxColor, animation, buttonColor, itemButtonColor, itemButtonSize, textColor, textSize, textFamily, message, Bg_Color, Opacity, radius, action]);


  function handleClose(e) {


    e.preventDefault();
    console.log("close");


    setView(false);
    setActive(false);
    console.log();

  }

  if (view) {

    return (
      <>
        <StyledBGContainer
        id="bgContainer"
        className={active ? "active" : "inactive"}
          Bg_Color={bgColor}
          Opacity={opa}
          animation={anim}
          onClick={handleClose}

        />

        <StyledModaleContainer
          radius={rad}
          modaleSize={mdlSize}
          modaleBoxColor={mdlBoxColor}

        >
          <StyledModaleContent


          >
            <StyledModaleCloseButton
              onClick={handleClose}
              ButtonColor={btnColor}



            >

              <StyledModaleCloseButtonContent
                itemButtonColor={itmBtnColor}
                itemButtonSize={itmBtnSize}


              >{/* un code ascii qui represente une croix*/}
                &#10006;

              </StyledModaleCloseButtonContent>



            </StyledModaleCloseButton>
            <StyledModaleMessage
              textColor={txtColor}
              textSize={txtSize}
              textFamily={txtFamily}


            >
              {msg}
            </StyledModaleMessage>
          </StyledModaleContent>
        </StyledModaleContainer>
      </>
    );
  }

  return null;
}
