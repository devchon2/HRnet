import { useEffect,useState } from "react";
import styled, { keyframes, css } from "styled-components";

const bumpAnimation = keyframes`
0% {
  transform: scale(0.5);
}
80% {
  transform: scale(1.3);
}
100% {
  transform: scale(1);
}`;

const OpacityAnimation = (opacity) => keyframes`
from {
  opacity: 0;
}
to {
  opacity: ${opacity};
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
  animation: ${(props) => props.$animation === 'opacity' ? css`${OpacityAnimation(props.$opacity)} 0.8s ease-in-out` : 'none' };
  


  border-radius: ${(props) => props.$radius};
`;

const StyledModaleContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$modalecolor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

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
    transform: scale(1.1);
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
const StyledModaleBtn = styled.button`
  display: ${(props) => props.$btn ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$btnwidth};
  height: ${(props) => props.$btnheight};
  color: ${(props) => props.$btncontentcolor};
  font-size: ${(props) => props.$btntextsize};
  border-radius: ${(props) => props.$radius};
  border: ${(props) => props.$btnborder};
  margin: ${(props) => props.$btnmargin};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$btnbgcolor};
  cursor: ${(props) => props.$cursor};

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
  animation: ${(props) => props.$animation === 'opacity' ? css`${OpacityAnimation(props.$opacity)} 0.8s ease-in-out` : css`${bumpAnimation} 0.8s ease-in-out` }
  border-radius: ${(props) => props.$radius};
`;

export default function Modale({
  showButton = false,
  buttonContent = 'ok',
  buttonColor = 'black',
  buttonWidth = '100px',
  buttonHeight = '50px',
  buttonContentColor = 'white',
  buttonTextSize = '20px',
  buttonBorder = 'none',
  buttonRadius = '0px',
  buttonMargin = '0px',
  buttonPadding = '0px',
  buttonBgColor = 'transparent',
  buttonCursor = 'pointer',
  onClose,
  btOnClick,
  isValidateForm,
  setActiveModale,
  Bg_Color = "black",
  Opacity = "0.5",
  radius = "0",
  modaleSize = "medium",
  modaleboxcolor = "white",
  animation = "bump",
  itemButtonColor = "white",
  itemButtonSize = "20px",
  textColor = "black",
  textFamily = "arial",
  textSize = "20px",
  message = "Employee Created !",

}) {
  const [view, setView] = useState(isValidateForm);
  const [active, setActive] = useState(view);
  const [mdlSize, setMdlSize] = useState(modaleSize);
  const [mdlBoxColor, setMdlBoxColor] = useState(modaleboxcolor);
  const [anim, setAnim] = useState(animation);
  const [itmBtnColor, setItmBtnColor] = useState(itemButtonColor);
  const [itmBtnSize, setItmBtnSize] = useState(itemButtonSize);
  const [txtColor, setTxtColor] = useState(textColor);
  const [txtSize, setTxtSize] = useState(textSize);
  const [txtFamily, setTxtFamily] = useState(textFamily);
  const [msg, setMsg] = useState(message);
  const [bgColor, setBgColor] = useState(Bg_Color);
  const [opa, setOpa] = useState(Opacity);
  const [rad, setRad] = useState(radius);
  const [btn, setBtn] = useState(showButton);
  const [btnColor, setBtnColor] = useState(buttonColor);
  const [btnWidth, setBtnWidth] = useState(buttonWidth);
  const [btnHeight, setBtnHeight] = useState(buttonHeight);
  const [btnContentColor, setBtnContentColor] = useState(buttonContentColor);
  const [btnTextSize, setBtnTextSize] = useState(buttonTextSize);
  const [btnBorder, setBtnBorder] = useState(buttonBorder);
  const [btnRadius, setBtnRadius] = useState(buttonRadius);
  const [btnMargin, setBtnMargin] = useState(buttonMargin);
  const [btnPadding, setBtnPadding] = useState(buttonPadding);
  const [btnBgColor, setBtnBgColor] = useState(buttonBgColor);
  const [btnCursor, setBtnCursor] = useState(buttonCursor);
  const [btnContent, setBtnContent] = useState(buttonContent);
  const [btnClick, setBtnClick] = useState(btOnClick);





  useEffect(() => {
if (showButton) {
      setBtn(true)
    };
    setView(isValidateForm);
    setActive(isValidateForm);
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
    setActiveModale(isValidateForm)
    setBtnContent(buttonContent)
    setBtnColor(buttonColor)
    setBtnWidth(buttonWidth)
    setBtnHeight(buttonHeight)
    setBtnContentColor(buttonContentColor)
    setBtnTextSize(buttonTextSize)
    setBtnBorder(buttonBorder)
    setBtnRadius(buttonRadius)
    setBtnMargin(buttonMargin)
    setBtnPadding(buttonPadding)
    setBtnBgColor(buttonBgColor)
    setBtnCursor(buttonCursor)
    setBtnClick(btOnClick)




    


    

  }, [
    isValidateForm,
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
    setActiveModale,
    buttonContent,
    buttonWidth,
    buttonHeight,
    buttonContentColor,
    buttonTextSize,
    buttonBorder,
    buttonRadius,
    buttonMargin,
    buttonPadding,
    buttonBgColor,
    buttonCursor,
    showButton,
    btOnClick,    
  ]);

  function handleClose(e) {
    e.preventDefault();
    setActive(false);
    setView(false);
    setActiveModale(false);
    onClose(true)
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
          $animation='opacity'
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
            <StyledModaleBtn  onClick={btnClick ? btnClick : handleClose } $btn={btn} $btnwidth={btnWidth} $btnheight={btnHeight} $btncontentcolor={btnContentColor} $btntextsize={btnTextSize} $btnborder={btnBorder} $radius={btnRadius} $btnmargin={btnMargin} $padding={btnPadding} $btnbgcolor={btnBgColor} $cursor={btnCursor}
             >{btnContent}</StyledModaleBtn>
          </StyledModaleContent>
        </StyledModaleContainer>
      </>
    );
  }
