import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};

//위의 sizes 객체에따라서 자동으로 media쿼리 함수를 만들어준다.
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 4px;
  display: flex;

  width: 1024px;
  margin: 0 auto;
  /* 기본적으로는 가로크기 1024px에 가운데정렬인데 768px미만이되면 꽉 채움. */
  ${media.desktop`width:1024px;`}
  ${media.tablet`width:100%;`}
`;

const Button = styled.button`
  background: lightyellow;
  color: brown;
  border-radius: 4px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* inverted값이 true일떄 스타일을 부여함 */
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid yellow;
      color: white;
      &:hover {
        color: black;
        background: lightgray;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
const StyledComponent = () => {
  return (
    <Box color="gray">
      {" "}
      STILL SO MABY THINGS TO DO..
      <Button>BTN 1</Button>
      <Button inverted={true}>BTN 2</Button>
    </Box>
  );
};

export default StyledComponent;
