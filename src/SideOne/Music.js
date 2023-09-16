import { styled } from "styled-components";
import notes from "../assets/notes.gif";
import { data } from "../assets/data";

const Music = () => {
  const charCounter = (text) => {
    return text.length > 13 ? true : false;
  };

  return (
    <LargerContainer>
      <TitleWrapper>
        <Notes src={notes} />
        <Title>MUSIC</Title>
        <Notes src={notes} />
      </TitleWrapper>
      <Container>
        {data.map((album, index) => {
          return (
            <Flipbox>
              <InnerDiv>
                <Albums src={album.image} key={index} />
                <Backside>
                  <AlbumName charCounter={charCounter} album={album.name}>
                    {album.name}
                  </AlbumName>
                  <div className={"thingy"}>~</div>
                  <div className={"band"}>{album.band}</div>
                  <a
                    href={album.link}
                    target="_blank"
                    rel="noreferrer"
                    className={"link"}
                  >
                    Listen
                  </a>
                </Backside>
              </InnerDiv>
            </Flipbox>
          );
        })}
      </Container>
    </LargerContainer>
  );
};

export default Music;

const media = {
  mobile: "@media(max-width: 480px)",
  smallHeight: "@media(max-height: 690px)",
  breakpoint1: "@media(max-width: 1440px)",
  tablet: "@media(max-width:775px)",
};

const LargerContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem 2rem 1rem;
`;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Title = styled.h1`
  font-size: max(4vw, 4.6rem);
  color: blue;
  font-weight: bolder;
  margin: 0 3rem;
`;

const Notes = styled.img`
  width: 7rem;
  ${media.mobile} {
    width: 5rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 5%;
  margin-top: 5rem;
  width: 100%;
  height: 100%;
  justify-items: center; /* Center horizontally */
  align-items: center;
  ${media.tablet} {
    align-content: space-between;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 2%;
  }
  ${media.mobile} {
    margin-top: 1.5rem;
  }
`;

const Flipbox = styled.div`
  perspective: 100rem;
`;

const InnerDiv = styled.div`
  position: relative;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  &:hover {
    transform: rotateY(180deg);
  }
`;

const Albums = styled.img`
  width: 15vw;
  min-width: 15rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  ${media.breakpoint1} {
    width: 20vw;
  }
  ${media.tablet} {
    width: 25vw;
  }
  ${media.mobile} {
    min-width: 11rem;
    width: 35vw;
  }
`;

const Backside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  padding: 0.4rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(
    to right,
    rgba(255, 182, 193, 0.7),
    rgba(0, 0, 255, 0.4)
  );
  color: white;
  transform: rotateY(180deg);
  font-size: max(1.7vw, 2rem);
  text-shadow: 2px 0px 4px rgba(0, 0, 0, 0.8);
  ${media.tablet} {
    padding: 0;
  }
  .band {
    font-size: max(2vw, 2.1rem);
  }

  .link {
    color: white;
    height: fit-content;
    padding: 0.8rem;
    border: 0.2rem solid palegoldenrod;
    border-radius: 0.5rem;
    transition: background-color 0.5s ease-in-out;
    &:hover {
      background-image: linear-gradient(
        to left,
        rgba(255, 182, 193, 0.9),
        rgba(0, 0, 255, 0.5)
      );
    }
    ${media.tablet} {
      padding: 0.3rem;
    }
  }

  .thingy {
    min-height: fit-content;
    max-height: 2vh;
  }
`;

const AlbumName = styled.div`
  border: 4px dotted rgba(255, 237, 0, 0.9);
  border-radius: 2rem;
  padding: 1rem;
  margin-top: 1rem;
  width: ${(props) =>
    props.charCounter(props.album) ? "fit-content" : "100%"};
  font-size: ${(props) =>
    props.charCounter(props.album)
      ? "max(1.4vw, 1.7rem)"
      : "max(1.6vw, 2.6rem)"};
  text-shadow: 0px 1px 3px rgba(255, 237, 0, 0.6);
  word-wrap: break-word;
  ${media.tablet} {
    padding: 0.2rem;
  }
  ${media.mobile} {
    font-size: ${(props) => (props.charCounter(props.album) ? "4vw" : "5vw")};
    padding: 0;
  }
`;
