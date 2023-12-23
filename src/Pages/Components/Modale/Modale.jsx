import { useEffect,useState } from "react";
import styled, { keyframes, css } from "styled-components";

const bumpAnimation = (bgScale) => keyframes`
0% {
  transform: scale(0);
}
80% {
  transform: scale(1.3);
}
100% {
  transform: scale(${bgScale});
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
  opacity: ${(props) => props.$modaleOpacity};
  z-index: 2;
  animation: ${(props) => props.$modaleanimation === 'opacity' ? css`${OpacityAnimation(props.$modaleOpacity)} 0.8s ease-in-out` : 'none' };
  border-radius: ${(props) => props.$modaleRadius};
`;

const StyledModaleContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$modalecolor};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.$textfamily};
  font-size: ${(props) => props.$textsize};
`;

const StyledModaleCloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: ${(props) => props.$closeitembuttonsize};
  height: ${(props) => props.$closeitembuttonsize};
  background-color: ${(props) => props.$closeitembgColor};
  position: absolute;
  border-radius: 50%;
  border: 2px solid ${(props) => props.$closeItembtncolor};
  border-radius: ${(props) => props.$closeItembuttonradius};
  padding:15px;

  outline: none;
  cursor: pointer;
  top: -10px;
  right: -10px;
  color: ${(props) => props.$itembtncolor};

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

const StyledModaleClosebuttonTextContent = styled.p`
  display: flex;
  color: ${(props) => props.$closeitembgColor};
  font-size: ${(props) => props.$closeitembuttonsize};
  font-family: ${(props) => props.$textfamily};
`;

const StyledModaleMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.$closeItemTextcolor};
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
  border-radius: ${(props) => props.$modaleRadius};
  border: ${(props) => props.$btnborder};
  margin: ${(props) => props.$btnmargin};
  padding: ${(props) => props.$padding};
  background-color: ${(props) => props.$btnbgcolor};
  cursor: ${(props) => props.$cursor};
  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }


`;

const StyledBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.$bgContainerColor};
  opacity: ${(props) => props.$bgContainerOpacity};
  position: absolute;
  scale: ${(props) => props.$bgscale};
  animation: ${(props) => props.$bganimation === 'bgContainerOpacity' ? css`${OpacityAnimation(props.$bgContainerOpacity)} 0.8s ease-in-out` : props.$bganimation === 'bump' ? css`${bumpAnimation(props.$bgscale)} 5s ease-in-out` : 'none' }
  border-radius: ${(props) => props.$modaleRadius};
`;

export default function Modale({
  //state props
  showButton = false,
  isValidateForm,
  message = "Employee Created !",

  //Actions Props
  onClose,
  btOnClick,
  setActiveModale,

  //BgModale Styles
  bgScale = 1,
  bgContainerColor = "black",
  bgContainerOpacity = 0.5,
  bgAnimation = "bump",
  textFamily = "arial",
  textSize = "20px",
  
  //Modale Styles
  modaleSize = "medium",
  modaleBoxColor = "white",
  modaleRadius = "0",
  modaleAnimation = 'opacity',
  modaleOpacity = '1',

  //CloseItem Styles
  closeitembgColor = "white",
  closeItemFontColor = "black",
  closeitemButtonsize = "20px",
  closeItemTextColor = "black",
  closeItemButtonRadius = "25px",

  //facultative button styles
  buttonTextContent = 'ok',
  buttonColor = 'black',
  buttonWidth = '100px',
  buttonHeight = '50px',
  buttonTextContentColor = 'white',
  buttonTextSize = '20px',
  buttonBorder = 'none',
  buttonmodaleRadius = '0px',
  buttonMargin = '0px',
  buttonPadding = '0px',
  buttonBgColor = 'transparent',
  buttonCursor = 'pointer',
  
  
  
  
  

}) {
  const [view, setView] = useState(isValidateForm);
  const [active, setActive] = useState(view);
  const [mdlSize, setMdlSize] = useState(modaleSize);
  const [mdlBoxColor, setMdlBoxColor] = useState(modaleBoxColor);
  const [bgAnim, setBgAnim] = useState(bgAnimation);
  const [mdlAnim, setMdlAnim] = useState(modaleAnimation);
  const [itmBtnColor, setItmBtnColor] = useState(closeitembgColor);
  const [itmBtnSize, setItmBtnSize] = useState(closeitemButtonsize);
  const [txtColor, setTxtColor] = useState(closeItemTextColor);
  const [txtSize, setTxtSize] = useState(textSize);
  const [txtFamily, setTxtFamily] = useState(textFamily);
  const [msg, setMsg] = useState(message);
  const [bgColor, setBgColor] = useState(bgContainerColor);
  const [opa, setOpa] = useState(bgContainerOpacity);
  const [rad, setRad] = useState(modaleRadius);
  const [btn, setBtn] = useState(showButton);
  const [btnColor, setBtnColor] = useState(buttonColor);
  const [btnWidth, setBtnWidth] = useState(buttonWidth);
  const [btnHeight, setBtnHeight] = useState(buttonHeight);
  const [btnContentColor, setBtnContentColor] = useState(buttonTextContentColor);
  const [btnTextSize, setBtnTextSize] = useState(buttonTextSize);
  const [btnBorder, setBtnBorder] = useState(buttonBorder);
  const [btnmodaleRadius, setBtnmodaleRadius] = useState(buttonmodaleRadius);
  const [btnMargin, setBtnMargin] = useState(buttonMargin);
  const [btnPadding, setBtnPadding] = useState(buttonPadding);
  const [btnBgColor, setBtnBgColor] = useState(buttonBgColor);
  const [btnCursor, setBtnCursor] = useState(buttonCursor);
  const [btnContent, setBtnContent] = useState(buttonTextContent);
  const [btnClick, setBtnClick] = useState(btOnClick);
  const [itmColor, setItmColor] = useState(closeItemFontColor);
  const [bg_scale, setBg_Scale] = useState(bgScale);
  const [mdlOpacity, setMdlOpacity] = useState(modaleOpacity);
  const [CloseItemRadius, setCloseItemRadius] = useState(closeItemButtonRadius);





  useEffect(() => {

    setView(isValidateForm);
    setActive(isValidateForm);
    setMdlSize(modaleSize);
    setMdlBoxColor(modaleBoxColor);
    setBgAnim(bgAnimation);
    setBtnColor(buttonColor);
    setItmBtnColor(closeitembgColor);
    setItmBtnSize(closeitemButtonsize);
    setTxtColor(closeItemTextColor);
    setTxtSize(textSize);
    setTxtFamily(textFamily);
    setMsg(message);
    setBgColor(bgContainerColor);
    setOpa(bgContainerOpacity);
    setRad(modaleRadius);
    setActiveModale(isValidateForm)
    setBtnContent(buttonTextContent)
    setBtnColor(buttonColor)
    setBtnWidth(buttonWidth)
    setBtnHeight(buttonHeight)
    setBtnContentColor(buttonTextContentColor)
    setBtnTextSize(buttonTextSize)
    setBtnBorder(buttonBorder)
    setBtnmodaleRadius(buttonmodaleRadius)
    setBtnMargin(buttonMargin)
    setBtnPadding(buttonPadding)
    setBtnBgColor(buttonBgColor)
    setBtnCursor(buttonCursor)
    setBtnClick(btOnClick)
    setBgAnim(bgAnimation)
    setMdlAnim(modaleAnimation)
    setItmColor(closeItemFontColor)
    setBtn(showButton)
    setBg_Scale(bgScale)
    setMdlOpacity(modaleOpacity)
    setCloseItemRadius(closeItemButtonRadius)

  }, [
    showButton,
    buttonTextContent,
    buttonColor,
    buttonWidth,
    buttonHeight,
    buttonTextContentColor,
    buttonTextSize,
    buttonBorder,
    buttonmodaleRadius,
    buttonMargin,
    buttonPadding,
    buttonBgColor,
    buttonCursor,
    btOnClick,
    isValidateForm,
    modaleSize,
    modaleBoxColor,
    bgAnimation,
    modaleAnimation,
    closeitembgColor,
    closeitemButtonsize,
    closeItemTextColor,
    textSize,
    textFamily,
    message,
    bgContainerColor,
    bgContainerOpacity,
    modaleRadius,
    setActiveModale,
    closeItemFontColor,
    bgScale,
    modaleOpacity,
    closeItemButtonRadius,
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
          $bgContainerColor={bgColor}
          $bgContainerOpacity={opa}
          $bganimation={bgAnim}
          onClick={handleClose}
          $bgscale={bg_scale}
        />

        <StyledModaleContainer
          $modalecontainerwidth={mdlSize}
          $modalecontainerheight={mdlSize}
          $modaleRadius={rad}
          $modalesize={mdlSize}
          $modaleboxcolor={mdlBoxColor}
          $modaleanimation={mdlAnim}
          $modaleOpacity={mdlOpacity}
        >
          <StyledModaleContent>
            <StyledModaleCloseButton
              onClick={handleClose}
              $closeitembgColor={itmBtnColor}
              $closeItembtncolor={itmColor}
              $closeitembuttonsize={itmBtnSize}
              $closeItembuttonradius={CloseItemRadius}

            >
              <StyledModaleClosebuttonTextContent
                $closeitembgColor={btnColor}
                $closeitembuttonsize={itmBtnSize}
                $closeItemFontColor={itmColor}
                
              >
                {/* un code ascii qui represente une croix*/}
                &#10006;
              </StyledModaleClosebuttonTextContent>
            </StyledModaleCloseButton>
            <StyledModaleMessage
              $closeItemTextcolor={txtColor}
              $textsize={txtSize}
              $textfamily={txtFamily}
            >
              {msg}
            </StyledModaleMessage>
            <StyledModaleBtn  onClick={btnClick ? btnClick : handleClose } $btn={btn} $btnwidth={btnWidth} $btnheight={btnHeight} $btncontentcolor={btnContentColor} $btntextsize={btnTextSize} $btnborder={btnBorder} $modaleRadius={btnmodaleRadius} $btnmargin={btnMargin} $padding={btnPadding} $btnbgcolor={btnBgColor} $cursor={btnCursor}
             >{btnContent}</StyledModaleBtn>
          </StyledModaleContent>
        </StyledModaleContainer>
      </>
    );
  }
