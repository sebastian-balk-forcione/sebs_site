import sebby from "../assets/sebby.png";
import { styled } from "styled-components";
import { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const LandingPage = ({ hasClickedHead, setHasClickedHead }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!hasClickedHead) {
      setHasClickedHead(true);
      navigate("/mainpage");
    }
  };
  return (
    <Container>
      <Title>SEBASTIAN BALK-FORCIONE - DEVELOPER, MUSICIAN</Title>
      <ClickHead>Click my head --&#62;</ClickHead>
      <div>
        <SebbyPic
          hasClickedHead={hasClickedHead}
          src={sebby}
          alt="pic of seb"
          onClick={handleClick}
        />
      </div>
    </Container>
  );
};

export default LandingPage;

const moveInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-5rem);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5rem) rotate(-90deg);
  }

  100% {
    opacity: 1;
    transform: translate(0), rotate(0deg);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  color: blue;
`;

const Title = styled.h1`
  grid-column: 1 / 3;
  font-size: 4.8rem;
  justify-self: center;
  align-self: center;
  margin-top: 2.5rem;
  animation: ${moveInTop} 1s ease-in-out;
`;

const ClickHead = styled.div`
  grid-area: 2/ 1 / 3 / 2;
  justify-self: flex-end;
  font-size: 2.5rem;
  margin-top: 10rem;
  margin-right: 5rem;
  animation: ${moveInLeft} 1s ease-in-out;
`;

const SebbyPic = styled.img`
  width: 30rem;
  height: 30rem;
  grid-area: 2 / 2 / 3 / 3;
  border-radius: 2rem;
  animation: ${moveInRight} 1s ease-in-out;
  cursor: ${(props) => (props.hasClickedHead ? "none" : "pointer")};
  &:hover ${ClickHead} {
    color: red;
  }
`;
