import React, { useEffect, useState } from "react";
import Board from "../components/Board";

export default function BoardContainer() {
  const [boardSize, setBoardSize] = useState(1);
  const handleChange = ({ target }) => {
    const newBoardSize = target.value;
    setBoardSize(newBoardSize);
    setTiles([]);
  };

  const [tiles, setTiles] = useState([]);
  const numOfTiles = boardSize * boardSize;
  useEffect(() => {
    const tileSize = window.innerHeight / 2 / boardSize;
    const colorNames = [
      "Aquamarine",
      "BlueViolet",
      "Chartreuse",
      "CornflowerBlue",
      "Thistle",
      "SpringGreen",
      "SaddleBrown",
      "PapayaWhip",
      "MistyRose"
    ];
    for (let i = 0; i < numOfTiles; i++) {
      if (numOfTiles > 10000) {
        setBoardSize(1);
        return;
      }
      const randomIndex = Math.floor(Math.random() * colorNames.length);
      const newTile = {
        backgroundColor: colorNames[randomIndex],
        tileSize: tileSize
      };
      setTiles((prev) => [...prev, newTile]);
    }
  }, [numOfTiles, boardSize]);

  return (
    <Board
      name="Jardine"
      size={boardSize}
      onChange={handleChange}
      numOfTiles={numOfTiles}
      tiles={tiles}
    />
  );
}
