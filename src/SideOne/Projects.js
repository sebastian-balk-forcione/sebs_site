import glasses from "../assets/glasses.gif";
import { styled } from "styled-components";
import eCom from "../assets/projects/e-com_screentShot.png";
import wordle from "../assets/projects/wordle_screenShot.png";
import metro from "../assets/projects/metrnome_screenShot.png";

const Projects = () => {
  return (
    <LargeWrapper>
      <Container>
        <Glasses src={glasses} />
        <Title>Projects</Title>
        <Glasses src={glasses} />
      </Container>
      <BigPicWrap>
        <SmallPicWrap className={"metroWrap"}>
          <Text>--&#62; Metronome&#60;--</Text>
          <Pic src={metro} className={"metro"} />
        </SmallPicWrap>
        <SmallPicWrap className={"ecomWrap"}>
          <Text>--&#62;E-Com Website &#60;--</Text>
          <Pic src={eCom} className={"eCom"} />
        </SmallPicWrap>
        <SmallPicWrap className={"wordleWrap"}>
          <Text>--&#62; Wordle Clone&#60;--</Text>
          <Pic src={wordle} className={"wordle"} />
        </SmallPicWrap>
      </BigPicWrap>
    </LargeWrapper>
  );
};

export default Projects;

const media = {
  mobile: "@media(max-height: 666px)",
  tablet: "@media(min-width:520px)",
  tablet2: "@media(min-width: 600px)",
  randoBreakPP: "@media(min-width: 1000px)",
  laptop: "@media(min-width: 1220px)",
};

const LargeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: blue;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30vw;
`;

const Title = styled.h2`
  color: blue;
  font-size: max(3.7vw, 2.3rem);
  text-decoration: underline;
`;

const Glasses = styled.img`
  width: 5vw;
  height: fit-content;
`;

const BigPicWrap = styled.div`
  margin-top: 2rem;
  width: 80vw;
  height: 95vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  ${media.randoBreakPP} {
    width: 90vw;
  }
  ${media.laptop} {
    width: 100vw;
    margin-top: 6rem;
  }
`;

const SmallPicWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${media.laptop} {
    &.wordleWrap {
      order: 1;
    }
    &.ecomWrap {
      order: 2;
    }
  }
`;

const Text = styled.h3`
  font-size: max(2.3rem, 5vw);
  ${media.tablet2} {
    font-size: max(3rem, 2.5vw);
  }
`;

const Pic = styled.img`
  width: 61vw;
  max-width: 30rem;
  &.metro {
  }
  &.wordle {
    width: auto;
    max-height: 25vh;
  }
  &.eCom {
  }
  ${media.randoBreakPP} {
    width: 35vw;
    max-width: 45rem;
    &.wordle {
      width: auto;
      max-height: 35vh;
    }
  }
  ${media.laptop} {
    width: 45vw;
    max-width: 50rem;
    &.wordle {
      width: auto;
      max-height: 35vh;
    }
  }
`;
