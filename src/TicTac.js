// @ts-nocheck
import styles from "../styles/TicTac.module.css";
import { useState, useEffect } from "react";

import React from "react";

function TicTac() {
  const players = [
    { name: "liam", symbol: "X" },
    { name: "gab", symbol: "O" },
  ];

  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(players[0]);
  const [moves, setMoves] = useState([]);
  useEffect(() => {
    // this functino will check moves everytime rerender happens
    if (moves.length < 3) return;
    //we need to filter the moves by player.
    const currentPlayer = moves[moves.length - 1].player;
    //filter through the moves returning if name = name
    const pMoves = moves.filter((move) => {
      return move.player.name === currentPlayer.name;
    });
    if (playerWon(pMoves)) {
      setWinner(currentPlayer);
    }
  }, [moves]);

  function playerWon(pMoves) {
    const xValues = {};
    const yValues = {};
    let d = 0;
    let rd = 0;

    pMoves.forEach((move) => {
      if ([1, 1].join() === move.coord.join()) d++;
      if ([3, 3].join() === move.coord.join()) d++;
      if ([2, 2].join() === move.coord.join()) {
        d++;
        rd++;
      }
      if ([1, 3].join() === move.coord.join()) rd++;
      if ([3, 1].join() === move.coord.join()) rd++;
      xValues[move.coord[0]] = xValues[move.coord[0]]
        ? xValues[move.coord[0]] + 1
        : 1;
      yValues[move.coord[1]] = yValues[move.coord[1]]
        ? yValues[move.coord[1]] + 1
        : 1;
    });
    if (Object.values(xValues).find((val) => val === 3)) return true;
    if (Object.values(yValues).find((val) => val === 3)) return true;
    if (rd === 3 || d === 3) return true;

    return false;
  }

  function addMoves(coord) {
    console.log(coord);
    const newMoves = [...moves];
    newMoves.push({ coord, player });
    setMoves(newMoves);
    console.log(moves);
    const newPlayer = players[0].name === player.name ? players[1] : players[0];
    setPlayer(newPlayer);
  }

  function Tile({ coord }) {
    // run through all the moves if move is there
    // add player symbol

    const fMoves = moves.find((move) => {
      return move.coord.join() === coord.join();
    });

    const text = fMoves ? fMoves.player.symbol : "";
    return (
      <div className={styles.tiles} onClick={() => addMoves(coord)}>
        {text}
      </div>
    );
  }
  if (winner) {
    return <h1>Winner: {winner.name}</h1>;
  }
  return (
    <div className={styles.Game}>
      <div className={styles.tileRow}>
        {[
          [1, 1],
          [1, 2],
          [1, 3],
        ].map((coord) => {
          return <Tile coord={coord}></Tile>;
        })}
      </div>
      <div className={styles.tileRow}>
        {[
          [2, 1],
          [2, 2],
          [2, 3],
        ].map((coord) => {
          return <Tile coord={coord}></Tile>;
        })}
      </div>
      <div className={styles.tileRow}>
        {[
          [3, 1],
          [3, 2],
          [3, 3],
        ].map((coord) => {
          return <Tile coord={coord}></Tile>;
        })}
      </div>
      <h1>Player: {player.name}</h1>
    </div>
  );
}

export default TicTac;
