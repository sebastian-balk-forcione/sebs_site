import { styled } from "styled-components";
import { Link } from "react-router-dom";
import comp from "../assets/comp.gif";
import drummer from "../assets/drummer.gif";
import phone from "../assets/giphy.gif";
import smile from "../assets/smile.gif";
import blurred from "../assets/blurred.png";
import SebbyPic from "./SebbyPic";
import { PiLinkedinLogoBold, PiGithubLogoFill } from "react-icons/pi";

const MainPage = () => {
  const info = {
    pics: [comp, drummer, phone],
    names: ["PROJECTS", "MUSIC", "CONTACT"],
    links: ["/projects", "/music", "/contact"],
  };

  return (
    <Container>
      <TopWrapper>
        <Pics className={"picOne"}>
          <SebbyPic pic={blurred} gif={smile} />
        </Pics>
        <TitleWrap>
          <Title className={"seb"}>SEBASTIAN BALK-FORCIONE</Title>
          <Title className={"role"}>DEVELOPER, MUSICIAN</Title>
          <div> - - - - - </div>
          <SocialWrap>
            <Socials
              href={"https://github.com/sebastian-balk-forcione"}
              target="_blank"
              rel="noreferrer"
            >
              <PiGithubLogoFill />
            </Socials>
            <Socials
              href={"https://www.linkedin.com/in/sebastian-balk-forcione/"}
              target="_blank"
              rel="noreferrer"
            >
              <PiLinkedinLogoBold />
            </Socials>
          </SocialWrap>
        </TitleWrap>
        <Pics className={"picTwo"}>
          <SebbyPic pic={blurred} gif={smile} />
        </Pics>
      </TopWrapper>
      <GifWrapper>
        {info.pics.map((pic, index) => {
          return (
            <GifContainers to={info.links[index]} className={`gif-${index}`}>
              <GifTitles className={`gif-${index}`}>
                {info.names[index]}
              </GifTitles>
              <Gifs src={pic} />
            </GifContainers>
          );
        })}
      </GifWrapper>
    </Container>
  );
};
export default MainPage;

const media = {
  mobile: "@media(max-height: 666px)",
  tablet: "@media(min-width:520px)",
  tablet2: "@media(min-width: 600px)",
  picintro: "@media(min-width: 800px)",
  laptop: "@media(min-width: 1220px)",
};

const Container = styled.div`
  /* border: 3px solid blue; */
  height: 100vh;
  width: 100vw;
  color: blue;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  ${media.laptop} {
    justify-content: space-between;
  }
`;

const TopWrapper = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-around;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 13%;
  max-width: 50rem;
  max-height: 10vh;
  ${media.tablet} {
    max-width: 90rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: max(4vw, 2.3rem);
  ${media.mobile} {
    font-size: 10vw;
  }
  ${media.tablet} {
    font-size: max(2vw, 3.8rem);
    white-space: nowrap;
  }
  ${media.laptop} {
    margin-top: 2.5rem;
  }
`;

const Pics = styled.div`
  display: none;
  ${media.picintro} {
    display: block;
  }
  ${media.laptop} {
    margin-top: 6rem;
  }
`;

const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 85%;
  max-height: 80rem;
  ${media.mobile} {
    justify-content: space-between;
    height: fit-content;
  }
  ${media.tablet} {
    max-height: 120rem;
    height: 70%;
    max-width: 83rem;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ${media.laptop} {
    height: fit-content;
    max-width: 1000rem;
    width: 70vw;
  }
`;

const GifContainers = styled(Link)`
  ${media.tablet2} {
    margin: 4rem;
  }
  ${media.laptop} {
    margin: 0;
    &.gif-0 {
      margin-top: 10rem;
    }
    &.gif-1 {
      margin-bottom: 20rem;
    }
    &.gif-2 {
      margin-top: 10rem;
    }
  }
`;

const GifTitles = styled.div`
  color: blue;
  font-size: max(2vw, 2rem);
  text-decoration: underline;
  &.gif-0 {
    text-align: right;
    ${media.laptop} {
      text-align: left;
    }
  }
  &.gif-1 {
    ${media.laptop} {
      text-align: center;
    }
  }
  &.gif-2 {
    text-align: right;
  }
`;

const Gifs = styled.img`
  min-width: 12rem;
  width: 35vw;
  max-width: 20rem;
`;

const SocialWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  ${media.laptop} {
    justify-content: center;
  }
`;

const Socials = styled.a`
  color: blue;
  font-size: 3rem;

  ${media.mobile} {
    font-size: 10vw;
  }
  ${media.tablet} {
    font-size: max(2vw, 3.8rem);
    white-space: nowrap;
  }
  ${media.laptop} {
    justify-content: center;
    margin: 0 1rem;
  }
`;
