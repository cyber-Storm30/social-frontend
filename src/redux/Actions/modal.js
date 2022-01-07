export const OPEN_MODAL = "openModal";
export const CLOSE_MODAL = "closeModal";

export const openModal = (data) => {
  return {
    type: OPEN_MODAL,
    payload: data,
  };
};

export const closeModal = (data) => {
  return {
    type: CLOSE_MODAL,
    payload: data,
  };
};
