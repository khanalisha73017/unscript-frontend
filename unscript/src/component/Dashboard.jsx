import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

export const Dashboard = ({ storeLabel }) => {
  const { id } = storeLabel;
  console.log(id, "dashboard");
  return (
    <DASHBOARD>
      JUST DRAG AND DROP ANYWHERE
      <div className="inner-container"></div>
    </DASHBOARD>
  );
};

const DASHBOARD = styled.div`
  width: 85%;
  height: 99vh;
  padding: 2px;

  .inner-container {
    width: auto;
    padding: 4px;
  }
`;
