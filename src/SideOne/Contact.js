import { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import smile from "../assets/smile.gif";
import TextBubble from "./TextBubble";
import { phrases } from "../assets/phrases";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [info, setInfo] = useState({ name: "", email: "", message: "" });
  const [wordCount, setWordCount] = useState(false);
  const [keyCode, setKeyCode] = useState(0);
  const [count, setCount] = useState(0);
  const [sendState, setSendState] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => setKeyCode(e.keyCode));

    return () => {
      document.removeEventListener("keydown", setKeyCode);
    };
  }, [wordCount]);

  useEffect(() => {
    if (info.message.length === 30 && keyCode !== 8) {
      setWordCount(true);
      setCount((count) => (count === phrases.length ? 0 : ++count));
    } else if (info.message.length === 50 || info.message.length < 30) {
      setWordCount(false);
    }
  }, [info.message.length]);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    emailjs
      .sendForm(
        "service_03gunh9",
        "contact_form",
        form.current,
        "VEzHgMh8d_X_sDUAr"
      )
      .then(
        (result) => {
          setSendState(true);
          setInfo({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Wrapper>
      <Header>
        <h2>CONTACT</h2>
      </Header>
      <FormWrapper>
        <Form onSubmit={handleSubmit} ref={form}>
          <ElementWrapper>
            <label htmlFor="name">Name</label>
            <Input
              type="text"
              id="name"
              placeholder="Name"
              name="user_name"
              value={info.name}
              onChange={(ev) => {
                setInfo({ ...info, name: ev.target.value });
              }}
            ></Input>
          </ElementWrapper>
          <ElementWrapper>
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              name="user_email"
              value={info.email}
              onChange={(ev) => {
                setInfo({ ...info, email: ev.target.value });
              }}
            ></Input>
          </ElementWrapper>
          <ElementWrapper className={"message"}>
            <label htmlFor="message">Message</label>
            <InputMessage
              type="text"
              id="message"
              placeholder="Talk to me!"
              name="message"
              value={info.message}
              onChange={(ev) => {
                setInfo({ ...info, message: ev.target.value });
              }}
            ></InputMessage>
          </ElementWrapper>
          <Button type="submit" value="Send">
            SEND
          </Button>
        </Form>
      </FormWrapper>
      <SmileWrap>
        <Bubblewrap $show={wordCount || sendState ? 1 : 0}>
          <TextBubble count={count} sent={sendState} />
        </Bubblewrap>
        <Smile1 src={smile} alt={smile} />
      </SmileWrap>
      <Smile2 src={smile} alt={smile} />
    </Wrapper>
  );
};

export default Contact;

const media = {
  mobile: "@media(max-width: 480px)",
  smallHeight: "@media(max-height: 690px)",
  breakpoint1: "@media(max-width: 1440px)",
  tablet: "@media(max-width:950px)",
};

const Wrapper = styled.div`
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  color: blue;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 11rem;
  ${media.mobile} {
    padding-top: 5rem;
  }
`;

const Form = styled.form`
  display: flex;
  font-size: calc(2rem + 1.5vw);
  flex-direction: column;
  align-items: center;
  width: calc(60% + 5vw);
  justify-content: space-between;
  height: 75%;
  ${media.mobile} {
    font-size: 10vw;
    width: 90%;
    align-items: flex-start;
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  width: 100%;
  /* min-width: 30rem; */
  justify-content: center;
  .message {
    height: 30vh;
    ${media.tablet} {
      justify-content: space-around;
    }
    ${media.mobile} {
      width: 100vw;
      justify-content: space-around;
    }
  }
`;

const Input = styled.input`
  width: 25vw;
  min-width: 40rem;
  height: 100%;
  min-height: 7rem;
  margin-left: 5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 2.5rem;
  padding-left: 1rem;
  &::placeholder {
    font-size: 2.5rem;
    padding-left: 1rem;
  }
  ${media.mobile} {
    width: 60vw;
    min-width: 60vw;
  }
`;

const InputMessage = styled.textarea`
  width: 25vw;
  min-width: 40rem;
  margin-left: 1.2rem;
  height: 19vh;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  resize: none;
  font-size: 2.5rem;
  padding-left: 1rem;
  font-family: inherit;
  &::placeholder {
    font-size: 2.5rem;
    font-family: inherit;
    padding-left: 1rem;
  }
  ${media.mobile} {
    width: 60vw;
    min-width: 60vw;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  width: fit-content;
  font-size: 5rem;
  margin: 5% 30% 0 0;
`;

const SmileWrap = styled.div`
  position: absolute;
  bottom: 30rem;
  left: 20rem;
  ${media.breakpoint1} {
    left: 0;
    bottom: 20rem;
  }
  ${media.tablet} {
    left: 50%;
    bottom: 10rem;
  }
  ${media.mobile} {
    position: absolute;
    bottom: 10rem;
    left: 19rem;
  }
`;

const Smile1 = styled.img`
  ${media.tablet} {
    margin-left: 5rem;
    width: 30vw;
  }
  ${media.mobile} {
    margin-left: 0;
    width: 35vw;
  }
`;

const Smile2 = styled.img`
  position: absolute;
  right: 20rem;
  bottom: 30rem;
  transform: rotateY(180deg);
  ${media.breakpoint1} {
    right: 0;
    bottom: 20rem;
  }
  ${media.tablet} {
    display: none;
  }
`;

const Bubblewrap = styled.div`
  width: 100%;
  position: absolute;
  top: -60%;
  left: 10%;
  display: ${(props) => (props.$show === 1 ? "block" : "none")};
  ${media.tablet} {
    display: none;
  }
  ${media.mobile} {
    display: none;
  }
`;
