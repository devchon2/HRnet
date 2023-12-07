import { useEffect,useState } from "react";
import styled, { keyframes } from "styled-components";

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
`;

const opacityAnimation = keyframes`
from {
  opacity: 0;
}
to {
  opacity: ${(props) => props.$opacity}
}
`;

const StyledModaleContainer = styled.div`
  display: flex;
  width: ${(props) =>
    props.$modalesize === "small"
      ? "30vw"
      : props.$modalesize === "medium"
      ? "50vw"
      : props.$modalesize === "large"
      ? "70vw"
      : props.$modalesize === "full"
      ? "100vw"
      : props.$modalecontainerwidth};
  height: ${(props) =>
    props.$modalesize === "small"
      ? "30vh"
      : props.$modalesize === "medium"
      ? "50vh"
      : props.$modalesize === "large"
      ? "70vh"
      : props.$modalesize === "full"
      ? "100vh"
      : props.$modalecontainerheight};
  background-color: ${(props) => props.$modaleboxcolor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  z-index: 2;
  animation: ${(props) =>
      props.$animation === "opacity"
        ? opacityAnimation
        : props.$animation === "bump"
        ? bumpAnimation
        : null}
    2s ease-in-out;

  border-radius: ${(props) => props.$radius};
`;

const StyledModaleContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$modalecolor};
`;

const StyledModaleCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.$buttoncolor};
  position: absolute;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  top: -10px;
  right: -10px;

  &:hover {
    scale: 1.1;
  }
`;

const StyledModaleCloseButtonContent = styled.p`
  display: flex;
  color: ${(props) => props.$itembuttoncolor};
  font-size: ${(props) => props.$itembuttonsize};
  font-family: ${(props) => props.$textfamily};
`;

const StyledModaleMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.$textcolor};
  font-size: ${(props) => props.$textsize};
`;

const StyledBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.$bg_color};
  opacity: ${(props) => props.$opacity};
  position: absolute;

  border-radius: ${(props) => props.$radius};
`;

export default function Modale({
  isActive,
  setActiveModale,
  Bg_Color = "black",
  Opacity = "0.5",
  radius = "0",
  modaleSize = "medium",
  modaleboxcolor = "white",
  animation = "bump",
  buttonColor = "black",
  itemButtonColor = "white",
  itemButtonSize = "20px",
  textColor = "black",
  textFamily = "arial",
  textSize = "20px",
  message = "Employee Created !",
}) {
  const [view, setView] = useState(isActive);
  const [active, setActive] = useState(view);
  const [mdlSize, setMdlSize] = useState("");
  const [mdlBoxColor, setMdlBoxColor] = useState("");
  const [anim, setAnim] = useState("");
  const [btnColor, setBtnColor] = useState("");
  const [itmBtnColor, setItmBtnColor] = useState("");
  const [itmBtnSize, setItmBtnSize] = useState("");
  const [txtColor, setTxtColor] = useState("");
  const [txtSize, setTxtSize] = useState("");
  const [txtFamily, setTxtFamily] = useState("");
  const [msg, setMsg] = useState("");
  const [bgColor, setBgColor] = useState("");
  const [opa, setOpa] = useState("");
  const [rad, setRad] = useState("");

  useEffect(() => {

    setView(isActive);
    setActive(isActive);
    setMdlSize(modaleSize);
    setMdlBoxColor(modaleboxcolor);
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
  }, [
    isActive,
    modaleSize,
    modaleboxcolor,
    animation,
    buttonColor,
    itemButtonColor,
    itemButtonSize,
    textColor,
    textSize,
    textFamily,
    message,
    Bg_Color,
    Opacity,
    radius,
    
  ]);

  function handleClose(e) {
    e.preventDefault();
    console.log("close");
    setActive(false);
    setView(false);
    setActiveModale(false)
    console.log('active', active,'view', view, 'isActive', isActive);
  }

  if (!active) {

    return null;
  }
  
  return (
    <>
        <StyledBGContainer
          id="bgContainer"
          $bg_color={bgColor}
          $opacity={opa}
          $animation={anim}
          onClick={handleClose}
        />

        <StyledModaleContainer
          $radius={rad}
          $modalesize={mdlSize}
          $modaleboxcolor={mdlBoxColor}
        >
          <StyledModaleContent>
            <StyledModaleCloseButton
              onClick={handleClose}
              $buttoncolor={btnColor}
            >
              <StyledModaleCloseButtonContent
                $itembuttoncolor={itmBtnColor}
                $itembuttonsize={itmBtnSize}
              >
                {/* un code ascii qui represente une croix*/}
                &#10006;
              </StyledModaleCloseButtonContent>
            </StyledModaleCloseButton>
            <StyledModaleMessage
              $textcolor={txtColor}
              $textsize={txtSize}
              $textfamily={txtFamily}
            >
              {msg}
            </StyledModaleMessage>
          </StyledModaleContent>
        </StyledModaleContainer>
      </>
    );
  }
