import React from "react";
import styled from "styled-components";

import Currency from "../../ui/format/Currency";

const Container = styled.div`
  padding: 24px;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-top: 0;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 18px;
`;

const Founding = styled.div`
  display: flex;
`;

const ProjectCard = ({ title, description, funded, goal }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Founding>
        <Currency>{funded}</Currency>
        <span style={{ margin: `0 12px` }}>/</span>
        <Currency>{goal}</Currency>
      </Founding>
    </Container>
  );
};

export default ProjectCard;
