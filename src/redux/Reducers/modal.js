import { OPEN_MODAL, CLOSE_MODAL } from "../Actions/modal";

const initialstate = {
  modalType: "",
  modal: false,
};

export const modalReducer = (state = initialstate, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        modalType: action.payload.type,
        modal: action.payload.state,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        modal: false,
      };
    }
    default:
      return state;
  }
};
