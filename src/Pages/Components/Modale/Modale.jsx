import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledBGContainer = styled.div`
  display: ${(props) => props.BgContainerDisplay};
  z-index: ${(props) => props.BgContainerZIndex};
  width: ${(props) => props.BgContainerWidth};
  height: ${(props) => props.BgContainerHeight};
  background-color: ${(props) => props.BgContainerColor};
  opacity: ${(props) => props.BgContainerOpacity};
  position: ${(props) => props.BgContainerPos};
`;

const StyledModaleContainer = styled.div`
  display: ${(props) => props.ModaleContainerDisplay};
  width: ${(props) => props.ModaleContainerWidth};
  height: ${(props) => props.ModaleContainerHeight};
  background-color: ${(props) => props.ModaleContainerColor};
  opacity: ${(props) => props.ModaleContainerOpacity};
  position: ${(props) => props.ModaleContainerPos};
`;

const StyledModaleContent = styled.div`
  display: ${(props) => props.ModaleContentDisplay};
  width: ${(props) => props.ModaleContentWidth};
  height: ${(props) => props.ModaleContentHeight};
  background-color: ${(props) => props.ModaleContentColor};
  opacity: ${(props) => props.ModaleContentOpacity};
  position: ${(props) => props.ModaleContentPos};
`;

const StyledModaleCloseButton = styled.button`
  display: ${(props) => props.ModaleCloseButtonDisplay};
  width: ${(props) => props.ModaleCloseButtonWidth};
  height: ${(props) => props.ModaleCloseButtonHeight};
  background-color: ${(props) => props.ModaleCloseButtonColor};
  opacity: ${(props) => props.ModaleCloseButtonOpacity};
  position: ${(props) => props.ModaleCloseButtonPos};
`;

const StyledModaleCloseButtonContent = styled.div`
  display: ${(props) => props.ModaleCloseButtonContentDisplay};
  z-index: ${(props) => props.ModaleCloseButtonContentZIndex};
  width: ${(props) => props.ModaleCloseButtonContentWidth};
  height: ${(props) => props.ModaleCloseButtonContentHeight};
  background-color: ${(props) => props.ModaleCloseButtonContentColor};
  opacity: ${(props) => props.ModaleCloseButtonContentOpacity};
  position: ${(props) => props.ModaleCloseButtonContentPos};
`;

const StyledModaleMessage = styled.p`
  display: ${(props) => props.ModaleMessageDisplay};
  z-index: ${(props) => props.ModaleMessageZIndex};
  width: ${(props) => props.ModaleMessageWidth};
  height: ${(props) => props.ModaleMessageHeight};
  background-color: ${(props) => props.ModaleMessageColor};
  opacity: ${(props) => props.ModaleMessageOpacity};
  position: ${(props) => props.ModaleMessagePos};
`;




export default function Modale(
    {
        BgContainer,
        ModaleContainer,
        ModaleMessage,
        
        ContentWidth,
        ContentHeight,
        ContentPos,
        ContentZIndex,
        ContentColor,
        ContentOpacity,
        
        CloseButtonWidth,
        CloseButtonHeight,
        CloseButtonPos,
        CloseButtonZIndex,
        CloseButtonColor,
        CloseButtonOpacity,
        
        CloseButtonContentWidth,
        CloseButtonContentHeight,
        CloseButtonContentPos,
        CloseButtonContentZIndex,
        CloseButtonContentColor,
        CloseButtonContentOpacity,
        MessageText,
        
        ModaleMessageWidth,
        ModaleMessageHeight,
        ModaleMessagePos,
        ModaleMessageZIndex,
        ModaleMessageColor,
        ModaleMessageOpacity
    }

) {

    const [ModaleDisplay, setModaleDisplay] = useState("none");
    const [ModaleContainerDisplay, setModaleContainerDisplay] = useState("none");
    const [ModaleMessageDisplay, setModaleMessageDisplay] = useState("none");
    const [ContentDisplay, setContentDisplay] = useState("none");
    const [CloseButtonDisplay, setCloseButtonDisplay] = useState("none");
    const [CloseButtonContentDisplay, setCloseButtonContentDisplay] = useState("none");

    useEffect(() => {
        setModaleDisplay("block");
        setModaleContainerDisplay("flex");
        setModaleMessageDisplay("flex");
        setContentDisplay("flex");
        setCloseButtonDisplay("flex");
        setCloseButtonContentDisplay("flex");
    }, []);






    
  return (
   <StyledBGContainer BgContainerDisplay={BgContainer.BgContainerDisplay} BgContainerWidth={BgContainer.BgContainerWidth} BgContainerHeight={BgContainer.BgContainerHeight} BgContainerPos={BgContainer.BgContainerPos} BgContainerZIndex={BgContainer.BgContainerZIndex} BgContainerColor={BgContainer.BgContainerColor} BgContainerOpacity={BgContainer.BgContainerOpacity}>
        <StyledModaleContainer ModaleContainerDisplay={ModaleContainer.ModaleContainerDisplay} ModaleContainerWidth={ModaleContainer.ModaleContainerWidth} ModaleContainerHeight={ModaleContainer.ModaleContainerHeight} ModaleContainerPos={ModaleContainer.ModaleContainerPos} ModaleContainerZIndex={ModaleContainer.ModaleContainerZIndex} ModaleContainerColor={ModaleContainer.ModaleContainerColor} ModaleContainerOpacity={ModaleContainer.ModaleContainerOpacity}>
            <StyledModaleContent ModaleContentDisplay={ContentDisplay} ModaleContentWidth={ContentWidth} ModaleContentHeight={ContentHeight} ModaleContentPos={ContentPos} ModaleContentZIndex={ContentZIndex} ModaleContentColor={ContentColor} ModaleContentOpacity={ContentOpacity}>
                <StyledModaleCloseButton ModaleCloseButtonDisplay={CloseButtonDisplay} ModaleCloseButtonWidth={CloseButtonWidth} ModaleCloseButtonHeight={CloseButtonHeight} ModaleCloseButtonPos={CloseButtonPos} ModaleCloseButtonZIndex={CloseButtonZIndex} ModaleCloseButtonColor={CloseButtonColor} ModaleCloseButtonOpacity={CloseButtonOpacity}>
                    <StyledModaleCloseButtonContent ModaleCloseButtonContentDisplay={CloseButtonContentDisplay} ModaleCloseButtonContentWidth={CloseButtonContentWidth} ModaleCloseButtonContentHeight={CloseButtonContentHeight} ModaleCloseButtonContentPos={CloseButtonContentPos} ModaleCloseButtonContentZIndex={CloseButtonContentZIndex} ModaleCloseButtonContentColor={CloseButtonContentColor} ModaleCloseButtonContentOpacity={CloseButtonContentOpacity}>
                        <StyledModaleMessage ModaleMessageDisplay={ModaleMessage.ModaleMessageDisplay} ModaleMessageWidth={ModaleMessage.ModaleMessageWidth} ModaleMessageHeight={ModaleMessage.ModaleMessageHeight} ModaleMessagePos={ModaleMessage.ModaleMessagePos} ModaleMessageZIndex={ModaleMessage.ModaleMessageZIndex} ModaleMessageColor={ModaleMessage.ModaleMessageColor} ModaleMessageOpacity={ModaleMessage.ModaleMessageOpacity}>
                            {MessageText}
                        </StyledModaleMessage>
                    </StyledModaleCloseButtonContent>
                </StyledModaleCloseButton>
            </StyledModaleContent>
        </StyledModaleContainer>
    </StyledBGContainer>
)
}
