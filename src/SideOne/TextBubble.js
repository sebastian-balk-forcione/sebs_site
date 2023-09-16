import { styled } from "styled-components";
import { phrases } from "../assets/phrases";
import { useEffect, useState } from "react";
import { keyframes } from "styled-components";

const TextBubble = ({ count, sent }) => {
  const [randNum, setRandNum] = useState(0);

  const circleData = [
    { top: "100px", left: "130px" },
    { top: "130px", left: "118px" },
    { top: "160px", left: "107px" },
  ];

  useEffect(() => {
    setRandNum(Math.floor(Math.random() * phrases.length));
  }, [count]);

  return (
    <Wrapper>
      <MainBubble>{!sent ? phrases[randNum] : "SENT!!!"}</MainBubble>
      {circleData.map((circle, index) => {
        return (
          <Circle
            key={index}
            style={circleData[index]}
            className={`dot-${index}`}
          />
        );
      })}
    </Wrapper>
  );
};

export default TextBubble;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  
  }
  100% {
    opacity: 1;

  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 30rem;
  height: 20rem;
`;

const MainBubble = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  background-color: #fff;
  width: 18rem;
  height: 10rem;
  border-radius: 10rem;
  font-size: 1.7rem;
  text-align: center;
  padding: 2rem 3rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  opacity: 0;
  animation: ${FadeIn} 1s ease-out 0.8s forwards;
`;

const Circle = styled.div`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  position: absolute;
  background-color: #fff;
  width: 2rem;
  height: 2rem;
  border-radius: 10rem;
  opacity: ${(props) => (!props.sent ? "0" : "1")};

  &.dot-0 {
    animation: ${FadeIn} 1s ease-out 0.6s forwards;
  }
  &.dot-1 {
    animation: ${FadeIn} 1s ease-out 0.3s forwards;
  }
  &.dot-2 {
    animation: ${FadeIn} 1s ease-out forwards;
  }
`;
