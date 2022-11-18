import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../src/Modal";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>A better way to enjoy every day.</h1>
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
