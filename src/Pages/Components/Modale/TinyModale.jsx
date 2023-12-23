import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

//Bump Animation
const BumpAnimation = () => keyframes`
${console.log("bump")}
0% {
  transform: scale(0);
}

57% {
  transform: scale(0.95);
}
64% {
  transform: scale(1.02);
}
71% {
  transform: scale(0.98);
}
78% {
  transform: scale(1);
}
85% {
  transform: scale(1);
}
92% {
  transform: scale(1);
}
95% {
  transform: scale(1);
}
97% {
  transform: scale(1);
}

100% {
  transform: scale(1);
}`;

//Fade Animation
const FadeAnimation = (opacity) => keyframes`
0 {
  opacity: 0;
}
80% {
  opacity: 0;
}
100% {
  opacity : ${opacity};
}
`;

//Full Container Styles
const StyledFullContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
z-index: 1;
width: 100%;
height: 100%;
background-color: ${(props) => props.$bgcontainercolor};
opacity: ${(props) => props.$bgcontaineropacity};
position: absolute;
scale: 1;
animation: ${(props) =>   
  props.$bganimation === "fade"
    ? css`
         ${FadeAnimation(props.$bgcontaineropacity)} 0.4s ease-in-out 
      `
    : props.$bganimation === "bump"
    ? css`
         ${BumpAnimation(props.$bgscale)} 0.4s ease-in-out 
      `
    : null};

`;  

//Modale Container Styles
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
  opacity: ${(props) => props.$modaleOpacity};
  z-index: 2;
  animation: ${(props) =>
    props.$modaleanimation === "fade"
      ? css`
          ${FadeAnimation(props.$modaleOpacity)} 0.4s ease-out
        `
      : props.$modaleanimation === "bump"
      ? css`
          ${BumpAnimation()} 0.4s ease-out
        `
      : null};
  border-radius: ${(props) => props.$modaleRadius};
`;

//Modale Content Styles
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

//CloseItem Styles
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
  padding: 15px;
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

//CloseItem Content Styles
const StyledModaleClosebuttonTextContent = styled.p`
  display: flex;
  color: ${(props) => props.$closeitembgColor};
  font-size: ${(props) => props.$closeitembuttonsize};
  font-family: ${(props) => props.$textfamily};
`;

//Message Styles
const StyledModaleMessage = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) => props.$closeItemTextcolor};
  font-size: ${(props) => props.$textsize};
`;

//Supplemental Button Styles
const StyledModaleBtn = styled.button`
  display: ${(props) => (props.$btn ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$btnwidth};
  height: ${(props) => props.$btnheight};
  color: ${(props) => props.$btncontentcolor};
  font-size: ${(props) => props.$btntextsize};
  border-radius: ${(props) => props.$btnradius};
  border: ${(props) => props.$btnborder};
  margin: ${(props) => props.$btnmargin};
  padding: ${(props) => props.$btnpadding};
  background-color: ${(props) => props.$btnbgcolor};
  cursor: ${(props) => props.$cursor};  
  box-sizing: content-box;

  &:hover {
    transition: 0.5s;
    transform: scale(1.1);
  }
`;

//Background Styles
const StyledBGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$bgcontainercolor};
  opacity: ${(props) => props.$bgcontaineropacity};
  position: absolute;
  scale: 1;
  animation: ${(props) =>   
    props.$bganimation === "fade"
      ? css`
           ${FadeAnimation(props.$bgcontaineropacity)} 0.4s ease-in-out 
        `
      : props.$bganimation === "bump"
      ? css`
           ${BumpAnimation(props.$bgscale)} 0.4s ease-in-out 
        `
      : null};
  border-radius: ${(props) => props.$modaleRadius};
`;

/**
 * TinyModale component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.showButton=false] - Determines whether to show the button.
 * @param {string} [props.message="Employee Created !"] - The message to be displayed in the modal.
 * @param {Function} [props.onClose=() => console.log("onClose ok")] - Function to be called when the modal is closed.
 * @param {Function} [props.btnOnClick=() => console.log("onClick ok")] - Function to be called when the button is clicked.
 * @param {Function} [props.setActiveModale=() => true] - Function to set the active state of the modal.
 * @param {string} [props.bgcontainercolor="black"] - The background color of the modal container.
 * @param {number} [props.bgcontaineropacity=0.5] - The opacity of the modal container.
 * @param {string} [props.bgAnimation="fade"] - The animation type for the modal background.
 * @param {string} [props.textFamily="arial"] - The font family for the modal text.
 * @param {string} [props.textSize="20px"] - The font size for the modal text.
 * @param {string} [props.modaleSize="medium"] - The size of the modal.
 * @param {string} [props.modaleBoxColor="white"] - The background color of the modal box.
 * @param {string} [props.modaleRadius="15px"] - The border radius of the modal box.
 * @param {string} [props.modaleAnimation="bump"] - The animation type for the modal box.
 * @param {string} [props.modaleOpacity="1"] - The opacity of the modal box.
 * @param {string} [props.closeitembgColor="white"] - The background color of the close item.
 * @param {string} [props.closeItemFontColor="black"] - The font color of the close item.
 * @param {string} [props.closeitemButtonsize="20px"] - The size of the close item button.
 * @param {string} [props.closeItemTextColor="black"] - The text color of the close item.
 * @param {string} [props.closeItemButtonRadius="25px"] - The border radius of the close item button.
 * @param {string} [props.buttonTextContent="ok"] - The content of the button.
 * @param {string} [props.buttonColor="black"] - The background color of the button.
 * @param {string} [props.buttonWidth="100px"] - The width of the button.
 * @param {string} [props.buttonHeight="50px"] - The height of the button.
 * @param {string} [props.buttonTextContentColor="black"] - The text color of the button content.
 * @param {string} [props.buttonTextSize="20px"] - The font size of the button text.
 * @param {string} [props.buttonBorder="1px solid black"] - The border of the button.
 * @param {string} [props.buttonmodaleRadius="25px"] - The border radius of the button.
 * @param {string} [props.buttonMargin="20px"] - The margin of the button.
 * @param {string} [props.buttonPadding="10px"] - The padding of the button.
 * @param {string} [props.buttonBgColor="transparent"] - The background color of the button.
 * @param {string} [props.buttonCursor="pointer"] - The cursor style of the button.
 * @returns {JSX.Element} The TinyModale component.
 */
export default function TinyModale({
  //state props
  showButton = false,
  isValidateForm,
  message = "Employee Created !",

  //Actions Props
  onClose = () => { 
    console.log("onClose ok"); 
    return false},
  btnOnClick = () => {
    console.log("onClick ok");
    return false
  },
  setActiveModale = () => true,

  //BgModale Styles
  bgcontainercolor = "black",
  bgcontaineropacity = 0.5,
  bgAnimation = "fade",
  textFamily = "arial",
  textSize = "20px",

  //Modale Styles
  modaleSize = "medium",
  modaleBoxColor = "white",
  modaleRadius = "15px",
  modaleAnimation = "bump",
  modaleOpacity = "1",

  //CloseItem Styles
  closeitembgColor = "white",
  closeItemFontColor = "black",
  closeitemButtonsize = "20px",
  closeItemTextColor = "black",
  closeItemButtonRadius = "25px",

  //button Styles
  buttonTextContent = "ok",
  buttonColor = "black",
  buttonWidth = "100px",
  buttonHeight = "50px",
  buttonTextContentColor = "black",
  buttonTextSize = "20px",
  buttonBorder = "1px solid black",
  buttonRadius = "25px",
  buttonMargin = "20px",
  buttonPadding = "10px",
  buttonBgColor = "transparent",
  buttonCursor = "pointer",
}) {

  //supplemental button
  const [btn, setBtn] = useState(showButton);

  //Message Styles
  const [txtSize, setTxtSize] = useState(textSize);
  const [txtFamily, setTxtFamily] = useState(textFamily);
  const [msg, setMsg] = useState(message);

  //BgModale Styles
  const [bgColor, setBgColor] = useState(bgcontainercolor);
  const [opa, setOpa] = useState(bgcontaineropacity);
  const [bgAnim, setBgAnim] = useState(bgAnimation);

  //Modale Styles
  const [mdlSize, setMdlSize] = useState(modaleSize);
  const [mdlBoxColor, setMdlBoxColor] = useState(modaleBoxColor);
  const [mdlAnim, setMdlAnim] = useState(modaleAnimation);
  const [mdlOpacity, setMdlOpacity] = useState(modaleOpacity);
  const [rad, setRad] = useState(modaleRadius);

  //CloseItem Styles
  const [itmBtnColor, setItmBtnColor] = useState(closeitembgColor);
  const [itmBtnSize, setItmBtnSize] = useState(closeitemButtonsize);
  const [txtColor, setTxtColor] = useState(closeItemTextColor);
  const [itmColor, setItmColor] = useState(closeItemFontColor);
  const [CloseItemRadius, setCloseItemRadius] = useState(closeItemButtonRadius);

  //button Styles
  const [btnColor, setBtnColor] = useState(buttonColor);
  const [btnWidth, setBtnWidth] = useState(buttonWidth);
  const [btnHeight, setBtnHeight] = useState(buttonHeight);
  const [btnContentColor, setBtnContentColor] = useState(
    buttonTextContentColor
  );
  const [btnTextSize, setBtnTextSize] = useState(buttonTextSize);
  const [btnBorder, setBtnBorder] = useState(buttonBorder);
  const [btnmodaleRadius, setBtnmodaleRadius] = useState(buttonRadius);
  const [btnMargin, setBtnMargin] = useState(buttonMargin);
  const [btnPadding, setBtnPadding] = useState(buttonPadding);
  const [btnBgColor, setBtnBgColor] = useState(buttonBgColor);
  const [btnCursor, setBtnCursor] = useState(buttonCursor);
  const [btnContent, setBtnContent] = useState(buttonTextContent);

  useEffect(() => {
    
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
    setBgColor(bgcontainercolor);
    setOpa(bgcontaineropacity);
    setRad(modaleRadius);
    setBtnContent(buttonTextContent);
    setBtnColor(buttonColor);
    setBtnWidth(buttonWidth);
    setBtnHeight(buttonHeight);
    setBtnContentColor(buttonTextContentColor);
    setBtnTextSize(buttonTextSize);
    setBtnBorder(buttonBorder);
    setBtnmodaleRadius(buttonRadius);
    setBtnMargin(buttonMargin);
    setBtnPadding(buttonPadding);
    setBtnBgColor(buttonBgColor);
    setBtnCursor(buttonCursor);
    setBgAnim(bgAnimation);
    setMdlAnim(modaleAnimation);
    setItmColor(closeItemFontColor);
    setBtn(showButton);
    setMdlOpacity(modaleOpacity);
    setCloseItemRadius(closeItemButtonRadius);
  }, [
    showButton,
    buttonTextContent,
    buttonColor,
    buttonWidth,
    buttonHeight,
    buttonTextContentColor,
    buttonTextSize,
    buttonBorder,
    buttonRadius,
    buttonMargin,
    buttonPadding,
    buttonBgColor,
    buttonCursor,
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
    bgcontainercolor,
    bgcontaineropacity,
    modaleRadius,
    setActiveModale,
    closeItemFontColor,
    modaleOpacity,
    closeItemButtonRadius,
  ]);

  //close the modale
  function handleClose(e) {
    e.preventDefault();
    setActiveModale(false); //set the activeModale state to false
    onClose(true); //call the onClose function
  }

  if (!isValidateForm) {  //not show the modale if view is inactive
    return null;
  }

  return (
    <>
          {/*the background of the modale*/}
      <StyledFullContainer
        id="FullContainer"
        
      >

      <StyledBGContainer id="bgContainer" $bgcontainercolor={bgColor} $bgcontaineropacity={opa} $bganimation={bgAnim} onClick={handleClose}/>

      {/*the modale container*/}
      <StyledModaleContainer
        id="modaleContainer"
        $modalecontainerwidth={mdlSize}
        $modalecontainerheight={mdlSize}
        $modaleRadius={rad}
        $modalesize={mdlSize}
        $modaleboxcolor={mdlBoxColor}
        $modaleanimation={mdlAnim}
        $modaleOpacity={mdlOpacity}
      >

        {/*the content of the modale*/}
        <StyledModaleContent
          id = "modaleContent"
        >
          {/*the closeItem button*/}
          <StyledModaleCloseButton
            id="closeItem"
            onClick={handleClose}
            $closeitembgColor={itmBtnColor}
            $closeItembtncolor={itmColor}
            $closeitembuttonsize={itmBtnSize}
            $closeItembuttonradius={CloseItemRadius}
          >

            {/*the content of closeItem button*/}
            <StyledModaleClosebuttonTextContent
              id="closeItemTextContent"
              $closeitembgColor={btnColor}
              $closeitembuttonsize={itmBtnSize}
              $closeItemFontColor={itmColor}
            >
              {/* un code ascii qui represente une croix*/}
              &#10006;
            </StyledModaleClosebuttonTextContent>
          </StyledModaleCloseButton>

          {/*the message*/}
          <StyledModaleMessage
            id="message"
            $closeItemTextcolor={txtColor}
            $textsize={txtSize}
            $textfamily={txtFamily}
          >
            {msg}
          </StyledModaleMessage>
          
          {/*the button if showButton is true*/}
          <StyledModaleBtn
            id="button"
            onClick={btnOnClick ? btnOnClick && handleClose : handleClose} //if btnOnClick is true then call btnOnClick and handleClose functions
            $btn={btn}
            $btnwidth={btnWidth}
            $btnheight={btnHeight}
            $btncontentcolor={btnContentColor}
            $btntextsize={btnTextSize}
            $btnborder={btnBorder}
            $btnradius={btnmodaleRadius}
            $btnmargin={btnMargin}
            $padding={btnPadding}
            $btnbgcolor={btnBgColor}
            $cursor={btnCursor}
          >
            {btnContent} {/*the content of the button*/}
          </StyledModaleBtn>
        </StyledModaleContent>
      </StyledModaleContainer>
      
      </StyledFullContainer>
    </>
  );
}
