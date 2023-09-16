import { styled } from "styled-components";

const SebbyPic = ({ pic, gif }) => {
  return (
    <Container>
      <Sebby src={pic} />
      {gif && <Smile src={gif} />}
    </Container>
  );
};

export default SebbyPic;

const Container = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 2rem;
`;

const Sebby = styled.img`
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  width: 17vw;
  max-width: 30rem;
`;

const Smile = styled.img`
  position: absolute;
  width: 30%;
  max-width: 8rem;
  top: 45%;
  left: 37%;
`;
