import React from "react";
import styled from "styled-components";

import Currency from "../../ui/format/Currency";
import Button from "../../ui/controls/Button";
import { useProject } from "../hooks";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Actions = styled.div`
  display: flex;
`;

const Donations = styled.div`
  display: flex;
  flex-direction: column;
`;

const Donation = styled.div`
  display: flex;

  .ammount {
    color: green;
  }

  .message {
    margin-left: 12px;
  }
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
      <Actions>
        <Button onClick={() => addDonation(5)}>Donar $5</Button>
        <Button onClick={() => addDonation(10)}>Donar $10</Button>
        <Button onClick={() => addDonation(50)}>Donar $50</Button>
        <Button onClick={() => addDonation(100)}>Donar $100</Button>
      </Actions>
      <hr />
      <Donations>
        {donations.map(({ ammount, message }, index) => (
          <Donation key={index}>
            <span className="ammount">
              <Currency>{ammount}</Currency>
            </span>
            <div className="message">{message}</div>
          </Donation>
        ))}
      </Donations>
    </Container>
  );
};

export default ProjectScreen;
