import { createPortal } from "react-dom";
import React, { useState } from "react";
import styled from "styled-components";
import ModalForm from "../../components/layouts/ModalForm";
import ExtendedModalForm from "../../components/layouts/ExtendedModalForm";

const ModalWrapper = styled.div`
  background: white;
  border: 1px solid #d0cccc;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);
  margin: 100px auto 0;
  transition: all 0.5s;
  width: 80%;
  height: 28rem;
  border-radius: 10px;
  z-index: 1;
  position: absolute;
  left: 17%;
  top: 100%;

  .modal-header {
    height: 3rem;
    line-height: 2.5rem;
    padding: 5px 20px;
    text-align: center;
    margin-left: 8rem;
  }

  .modal-header h2 {
    justify-items: center;
    position: relative;
    left: 33%;
    margin-top: 12px;
    padding: 0;
    font-size: 1.3rem;
  }

  .modal-body {
    padding: 10px 2px;
    text-align: center;
    height: 20rem;
    width: 100%;
  }

  .close-modal-btn {
    color: black;
    cursor: pointer;
    float: right;
    font-size: 30px;
    margin: 0;
    border-radius: 50%;
  }

  .close-modal-btn:hover {
    background-color: rgb(0, 0, 0, 0.4);
    color: black;
  }

  .btn-cancel {
    background-color: #b71c1c;
    float: left;
  }

  .back-shed {
    background-color: rgba(48, 49, 48, 0.42);
    height: 100%;
    position: fixed;
    transition: all 1.3s;
    width: 100%;
  }
`;

const modalRoot = document.getElementById("modal-root");

const MakePostModal = (props) => {
  const [media, setMedia] = useState();
  return createPortal(
    <div>
      <ModalWrapper
        style={{
          transform: props.show ? "translateY(-100vh)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <h2>Create Post</h2>
          <span className="close-modal-btn" onClick={props.close}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          {!media ? (
            <ModalForm setMedia={setMedia} />
          ) : (
            <ExtendedModalForm media={media} />
          )}
        </div>
      </ModalWrapper>
    </div>,
    modalRoot
  );
};

export default MakePostModal;
/*-webkit-filter: blur(1px);
-moz-filter: blur(1px);
-o-filter: blur(1px);
-ms-filter: blur(1px);
filter: blur(1px);*/
