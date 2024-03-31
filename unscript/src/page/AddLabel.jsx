import React, { useState } from "react";

export const AddLabel = ({
  labelData,
  setLabelData,
  storeLabel,
  setStoreLabel,
  closeModal,
  setIsOpenModel,
}) => {
  console.log(labelData, "dataObj");

  const handleChage = (e) => {
    const { type, value, name } = e.target;
    console.log(type, value, name);

    setLabelData({
      ...labelData,
      [name]: type === "number" ? parseInt(value) : value,
    });
    console.log(labelData, "addObj");
  };
  function handleSubmit(e) {
    e.preventDefault();

    const { Title, xCordinate, yCordinate, fontSize, fontweight } = labelData;
    console.log(Title, xCordinate, yCordinate, fontSize, fontweight, "data");

    if (
      !Title === "" ||
      !xCordinate == "" ||
      yCordinate == "" ||
      fontSize === "" ||
      fontweight === ""
    ) {
      let newTodo = {
        id: Date.now(),
        Title: Title,
        xCordinate: xCordinate,
        yCordinate: yCordinate,
        fontSize: fontSize,
        fontweight: fontweight,
      };
      setStoreLabel([...storeLabel, newTodo]);

      setIsOpenModel(false);

      setLabelData({
        Title: "",
        xCordinate: "",
        yCordinate: "",
        fontSize: "",
        fontweight: "",
      });
    } else {
      setIsOpenModel(false);
    }
    console.log(storeLabel, "dataFinal");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Title</label>
        <input
          type="text"
          placeholder="Label Title"
          name="Title"
          value={labelData.Title}
          onChange={handleChage}
        />
      </div>
      <div className="inp">
        <label>X</label>
        <input
          id="x-cordination"
          type="number"
          name="xCordinate"
          value={labelData.xCordinate}
          placeholder="x-cordination"
          onChange={handleChage}
        />
      </div>
      <div className="inp">
        <label>Y</label>
        <input
          id="y-cordination"
          type="number"
          name="yCordinate"
          value={labelData.yCordinate}
          placeholder="Y-cordination"
          onChange={handleChage}
        />
      </div>
      <div className="inp">
        <label>Font Size</label>
        <input
          id="font-size"
          type="number"
          value={labelData.fontSize}
          name="fontSize"
          placeholder="Font Size"
          onChange={handleChage}
        />
      </div>
      <div className="inp">
        <label>Font Weeight</label>
        <input
          id="Font-weight"
          type="text"
          value={labelData.fontweight}
          placeholder="Font Weeight"
          name="fontweight"
          onChange={handleChage}
        />
      </div>

      <button className="btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
