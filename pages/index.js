// @ts-nocheck
import React, { useState } from "react";
import Modal from "../src/Modal";
import styles from "../styles/Home.module.css";
// Next task is too implement E2E and Unit testing
/* There are two different types of testing:
  - End to end: test from the end users perspective
  - Unit testing: Final stage, usually performed by testers.
  Almost identical at lower levels when not dealing with a large project.
  - Component testing: tests each component of a app
  You can use jest, cypress and/or puppeteer to perform these tests
  I am not sure what i will be using.

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
