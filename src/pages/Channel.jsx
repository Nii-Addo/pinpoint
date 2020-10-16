import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ModalContext } from "../contexts/ModalContext";
import MakePostModal from "../components/layouts/MakePostModal";

const Channel = (props) => {
  const modalContext = useContext(ModalContext);
  return (
    <div>
      {modalContext.isShowing ? (
        <MakePostModal
          className="modal"
          show={modalContext.isShowing}
          close={modalContext.closeModalHandler}
        ></MakePostModal>
      ) : null}

      <div style={{ width: "200px", height: "200px", marginTop: "10rem" }}>
        Page Under Construction...
      </div>
    </div>
  );
};

export default Channel;
