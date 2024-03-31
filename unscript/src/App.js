import styled from "styled-components";
import { Dashboard } from "./component/Dashboard";
import { Sidebar } from "./component/Sidebar";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

function App() {
  const initialState = {
    id: 0,
    Title: "",
    xCordinate: 0,
    yCordinate: 0,
    fontSize: 0,
    fontweight: "normal",
  };
  const [labelData, setLabelData] = useState(initialState);

  const [storeLabel, setStoreLabel] = useState([]);

  // useEffect to update local storage whenever storeLabel changes
  useEffect(() => {
    localStorage.setItem("storeLabel", JSON.stringify(storeLabel));
  }, [storeLabel]);

  const handleDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;
    console.log(destination, source, draggableId);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <SECTION>
        <Dashboard
          clasName="dash"
          storeLabel={storeLabel}
         
        />

        <Sidebar
          labelData={labelData}
          setLabelData={setLabelData}
          storeLabel={storeLabel}
          setStoreLabel={setStoreLabel}
        />
      </SECTION>
    </DragDropContext>
  );
}

export default App;

const SECTION = styled.div`
  display: flex;
  flex-direction: row;
`;
