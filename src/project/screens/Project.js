import React from "react";
import styled from "styled-components";

import Currency from "../../ui/format/Currency";
import Button from "../../ui/controls/Button";
import Donations from "../components/Donations";
import { useProject } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectScreen = ({
  match: {
    params: { id },
  },
}) => {
  const [{ title, description, funded, goal, donations }, addDonation] = useProject(id);

  return (
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>
        <Currency>{funded}</Currency> / <Currency>{goal}</Currency>
      </h3>
      <Button onClick={addDonation}>Donar $100</Button>
      <hr />
      <Donations data={donations} />
    </Container>
  );
};

export default ProjectScreen;
