import { Routes, Route } from "react-router-dom";
import { styled } from "styled-components";
import LandingPage from "../src/SideOne/LandingPage";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import { useMousePosition } from "./CustomHooks/useMousePosition";
import CursorHead from "./SideOne/CursorHead";
import MainPage from "./SideOne/MainPage";
import Music from "./SideOne/Music";
import Projects from "./SideOne/Projects";
import Contact from "./SideOne/Contact";
import Footer from "./SideOne/Footer";

const App = () => {
  const [hasClickedHead, setHasClickedHead] = useState(false);
  const { x, y } = useMousePosition();
  const isMobile =
    /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    );

  return (
    <Container>
      <GlobalStyles />
      <CursorHead hasClickedHead={hasClickedHead} x={x} y={y} />
      <Routes>
        {!isMobile && !hasClickedHead ? (
          <Route
            path={"/"}
            element={
              <LandingPage
                setHasClickedHead={setHasClickedHead}
                hasClickedHead={hasClickedHead}
              />
            }
          />
        ) : (
          <Route path={"/"} element={<MainPage />} />
        )}

        <Route path={"/mainpage"} element={<MainPage />} />
        <Route path={"/music"} element={<Music />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </Container>
  );
};

export default App;

const Container = styled.div`
  cursor: ${(props) => props.hasClickedHead && "none"};
`;
