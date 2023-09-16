import { styled } from "styled-components";
import head from "../assets/head.png";

const CursorHead = ({ hasClickedHead, x, y }) => {
  return (
    <>
      <Head
        src={head}
        alt="head"
        hasClickedHead={hasClickedHead}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default CursorHead;

const Head = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  pointer-events: none;
  cursor: none;
  display: ${(props) => (props.hasClickedHead ? "inline" : "none")};
  transform: translate(-50%, -50%);
  transition: width 1s;
  width: ${(props) => (props.hasClickedHead ? `9%` : `22%`)};
  height: auto;
`;
