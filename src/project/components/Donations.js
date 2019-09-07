import React from "react";
import styled from "styled-components";

import Currency from "../../ui/format/Currency";

const Donation = styled.tr`
  .avatar {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    background-color: gainsboro;
  }

  .ammount {
    color: green;
  }

  td:not(:last-child) {
    width: 1%;
    padding-right: 10px;
  }
`;

const Donations = ({ data }) => (
  <table>
    {data.map(({ ammount, avatar, message }, index) => (
      <Donation key={index}>
        <td className="ammount">
          <Currency>{ammount}</Currency>
        </td>
        <td>
          <img alt="avatar" className="avatar" src={avatar} />
        </td>
        <td>{message}</td>
      </Donation>
    ))}
  </table>
);

export default Donations;
