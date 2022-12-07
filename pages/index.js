// @ts-nocheck
import React, { useState } from "react";
import Modal from "../src/Modal";
import styles from "../styles/Home.module.css";
// Next task is too implement E2E and Unit testing
/* There are two different types of testing: unit integration e2e
  - Unit testing: Fully isolated. Test one function one by one.
    Write thousands of these
    No dependencies
  - Integration: testing function that calls a function. Dependencies. 
    Write a good couple of these
    few dependencies
  - End to end: Testing full flow. Manipulate the DOM. 
    Write few
    Lots of dependencies
  The more dependencies the harder it is to test.

*/
export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>A better way to enjoy every day.</h1>
        <div className="well"></div>
        <button
          className={styles.buttonstyle}
          onClick={() => setShowModal(true)}
        >
          Play a game of Tic Tac Toe
        </button>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          Hello from the modal!
        </Modal>
      </main>
    </div>
  );
}
