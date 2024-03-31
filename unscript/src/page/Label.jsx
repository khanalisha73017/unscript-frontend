import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { RxDragHandleDots2 } from "react-icons/rx";
import styled from "styled-components";

export const Label = ({ Title, id, index }) => {
  console.log(id, index, "id index");
  return (
    <SECTION>
      <div className="inner-map-container">
        <RxDragHandleDots2 />
        <div>{Title}</div>
      </div>
    </SECTION>
  );
};

const SECTION = styled.div`
  .inner-map-container {
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: white;
    border-radius: 4px;
    margin-bottom: 5px;
    gap: 5px;
    padding: 5px;
  }
`;
