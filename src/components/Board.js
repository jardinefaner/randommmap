import React from "react";

export default function Board(props) {
  const { name, size, onChange, numOfTiles, tiles, onClick } = props;
  return (
    <>
      <h1>Hello, {name}!</h1>
      <input type="number" placeholder="Size of map" onChange={onChange} />
      <div id="map">
        {tiles.map((tile, index) => {
          return (
            <div
              style={{
                backgroundColor: tile.backgroundColor,
                height: tile.tileSize,
                width: tile.tileSize
              }}
              id={index}
            ></div>
          );
        })}
      </div>
      <p>
        Hello, this is a {size} x {size} map!
      </p>
      <p>{numOfTiles} total tiles</p>
    </>
  );
}
