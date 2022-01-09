import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Write from "../Components/Write/Write";
import UserModal from "../Components/UserModal/UserModal";

const ModalManager = () => {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const open = useSelector((state) => state.modal.modal);

  let Modal = null;

  switch (modalType) {
    case "WRITE":
      Modal = <Write open={open} />;
      break;
    case "USERMODAL":
      Modal = <UserModal open={open} />;
      break;
    default:
      Modal = null;
  }
  return <>{Modal}</>;
};

export default ModalManager;
