import React, { createElement, Children } from "react";
import styled from "styled-components";

const defaultDirection = "column";
// TODO: replace empty divs with margin
const FlexBox = styled.div`
  display: flex;
  flex-direction: ${props => props.direction && defaultDirection};
  align-items: ${props => props.align};
`;

function addGapBetweenChildren(children) {
  const divv = createElement("div");
  return children.reduce((accumulator, currentValue, currentIndex, arr) => {
    if (currentIndex === arr.length - 1) {
      accumulator.push(currentValue);
      return accumulator;
    }
    accumulator.push(currentValue);
    accumulator.push(divv);
    return accumulator;
  }, []);
}

const Box = ({ children, direction, gap, ...rest }) => {
  const addGap = (child, index) => {
    //console.log(child, index);
  };
  //{Children.map(children, addGap)}
  const childrenArray = Children.toArray(children);
  const newChildrenArray = addGapBetweenChildren(childrenArray);
  return (
    <FlexBox direction={direction} {...rest}>
      {newChildrenArray}
    </FlexBox>
  );
};

export default Box;
