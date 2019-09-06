import React from "react";
import styled from "styled-components";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import ProjectsScreen from "./project/screens/Projects";
import ProjectScreen from "./project/screens/Project";

const Container = styled.div`
  background: whitesmoke;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;

const Nav = styled.div`
  height: 65px;
  background-color: #333;
  color: whitesmoke;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  padding: 24px;
  overflow: auto;
`;

function App() {
  return (
    <Container>
      <Nav>
        <Link to="/">Proyectos</Link>
      </Nav>
      <Content>
        <Switch>
          <Route exact component={ProjectsScreen} path="/projects" />
          <Route exact component={ProjectScreen} path="/projects/:id" />
          <Redirect to="/projects" />
        </Switch>
      </Content>
    </Container>
  );
}

export default App;
