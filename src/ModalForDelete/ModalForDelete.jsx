import { useContext, useEffect } from "react";
import { Btn, ModalBack, ModalWindow, Title } from "./ModalForDelete.styled";

export function ModalForDelete({ onClose, onDelete }) {
  const handleEscape = useContext((e) => {
    if (e.code === "Escape") {
      onClose();
    }
  });
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);
  const handleClickBg = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <ModalBack onClick={handleClickBg}>
      <ModalWindow>
        <Title>ARE YOU SURE???</Title>
        <Btn bgColor="red" onClick={onDelete}>
          delete
        </Btn>
        <Btn bgColor="green" onClick={onClose}>
          cancel
        </Btn>
      </ModalWindow>
    </ModalBack>
  );
}
