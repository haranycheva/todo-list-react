import { FilterForm } from "../FilterForm/FilterForm";
import { ListToDo } from "../ListToDo/ListToDo";
import { Loader } from "../Loader/Loader";
import { ModalForDelete } from "../ModalForDelete/ModalForDelete";
import { PresentationBox } from "../PresentationBox/PresentationBox";
import { deleteToDo, getTodo } from "../fetch";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import {
  selectTodoArr,
  selectorError,
  selectorLoading,
} from "../redux/selector";
import { ButtonOpenModal } from "./Todo.styled";
import { ChangeTodoModal } from "../ChangeTodoModal/ChangeTodoModal";

function Todo() {
  const todoList = useSelector(selectTodoArr);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorLoading);
  const error = useSelector(selectorError);
  const [selected, setSelected] = useState(null);
  //localStorage.getItem("selected") ? JSON.parse(localStorage.getItem("selected")): null
  const [deleteEl, setDeleteEl] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showChangeModal, setShowChangeModal] = useState(false);
  const [params] = useSearchParams();
  const level = params.get(`level`) ?? "all";
  const topic = params.get(`topic`) ?? "";

  useEffect(() => {
    const fetch = async () => {
      dispatch(getTodo());
    };
    fetch();
  }, [dispatch]);

  const toggleDeleteModal = (id) => {
    setDeleteEl(!showDeleteModal ? id : null);
    setShowDeleteModal((showDeleteModal) => !showDeleteModal);
  };

  const handleDelete = async () => {
    dispatch(
      deleteToDo({
        deleteEl,
        doAfter(id) {
          setSelected((selected) => (selected?.id === id ? "" : selected));
          toggleDeleteModal();
          toast.success("Success 👻");
        },
      })
    );
  };
  const handleClick = (e, id, title, description) => {
    if (e.target.nodeName === "BUTTON") {
      return;
    }
    setSelected({ id, title, description });
  };
  const toFilter = (list) => {
    if (level === "all") {
      return list.filter((item) =>
        item.title.toLowerCase().includes(topic.toLowerCase())
      );
    }
    return list.filter(
      (item) =>
        item.title.toLowerCase().includes(topic.toLowerCase()) &&
        item.level === level
    );
  };
  const toggleChangeTodoModal = () => {
    setShowChangeModal((showChangeModal) => !showChangeModal);
  };
  const filteredList = todoList?.length && toFilter(todoList);
  return (
    <>
      {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {isLoading && <Loader />}
      {todoList?.length ? <>
        <FilterForm />
        {filteredList?.length > 0 ? (
          <>
            <ButtonOpenModal onClick={toggleChangeTodoModal}>
              change todo
            </ButtonOpenModal>
            <ListToDo
              list={filteredList}
              onDelete={toggleDeleteModal}
              selected={selected}
              onClick={handleClick}
            />
            <PresentationBox
              selected={
                selected || {
                  title: "You selected nothing",
                  description: "...",
                }
              }
            />
          </>
        ) : (
          <p>nothing found</p>
        )}
      </> : <p> you haven`t created any todo yet</p>}
      {showChangeModal && <ChangeTodoModal onClose={toggleChangeTodoModal} />}
      {showDeleteModal && (
        <ModalForDelete onClose={toggleDeleteModal} onDelete={handleDelete} />
      )}
    </>
  );
}
export default Todo;
