import React, { useState } from "react";
import styled from "styled-components";
import { Model } from "../page/Model";
import { AddLabel } from "../page/AddLabel";
import { IoAddOutline } from "react-icons/io5";
import { Label } from "../page/Label";
import { DragDropContext } from "react-beautiful-dnd";

export const Sidebar = ({
  labelData,
  setLabelData,
  storeLabel,
  setStoreLabel,
}) => {
  let storeLabelFromLocalStorage = JSON.parse(
    localStorage.getItem("storeLabel") || "[]"
  );
  console.log(storeLabelFromLocalStorage);
  console.log(storeLabel, "data");

  const [isOPenModel, setIsOpenModel] = useState(false);
  const openModel = () => {
    setIsOpenModel(true);
  };

  const closeModel = () => {
    setIsOpenModel(false);
  };
  const hnadleAddLabel = () => {
    openModel();
  };
  const handleDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
  };

  return (
    <SIDEBAR>
      <div className="container">
        <p className="sidebar-heading"> BLOCKS</p>
        <div>
          <IoAddOutline
            onClick={hnadleAddLabel}
            style={{ width: 30, height: 30, color: "white" }}
          />
        </div>
      </div>
      <div className="label-container">
        {storeLabel.length > 0 &&
          storeLabel.map((el, index) => (
            <Label key={el.id} index={index} {...el} storeLabel={storeLabel} />
          ))}
      </div>

      <Model isOpen={isOPenModel} onClose={closeModel}>
        <AddLabel
          labelData={labelData}
          setLabelData={setLabelData}
          storeLabel={storeLabel}
          setStoreLabel={setStoreLabel}
          setIsOpenModel={setIsOpenModel}
        />
      </Model>
    </SIDEBAR>
  );
};

const SIDEBAR = styled.div`
  width: 15%;
  height: 96.7vh;
  background-color: #625c5c;
  padding: 10px;
  .sidebar-heading {
    padding-bottom: 5px;
    color: white;
  }

  .container {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .side-bar {
    border: 2px solid;
    width: 15%;
    background-color: #625c5c;
    padding: 4px;
  }


`;
