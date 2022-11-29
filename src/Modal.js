// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import TicTac from "./TicTac";
import styles from "../styles/Home.module.css";
import styles1 from "../styles/Modal.module.css";
//well
const Modal = ({ show, onClose }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className={styles1.StyledModalOverlay}>
      <div className={styles1.StyledModal}>
        <div className={styles1.StyledModalHeader}>
          <button className={styles.buttonstyle} onClick={handleCloseClick}>
            Close
          </button>
        </div>
        <div className={styles1.StyledModalBody}>
          <TicTac />
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
