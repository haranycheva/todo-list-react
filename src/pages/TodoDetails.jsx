import { Loader } from "../Loader/Loader";
import { getSingleToDo } from "../fetch";
import {
  getColor,
  getComp,
} from "../functions/getPropValuesToStyled";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export const TodoBox = styled.div`
  position: relative;
  width: 50%;
  padding: 10px;
  margin: 0 auto;
  margin-top: 40px;
  border: 4px solid ${getColor};
  margin-bottom: 10px;
  background-color: ${getComp};
`;

export const Level = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 65px;
  height: 25px;
  border: 1px solid black;
`;

function TodoDetails() {
  const [todoData, setTodoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { todoId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const data = await getSingleToDo(todoId);
        setTodoData(data);
      } catch (error) {
        console.log("err:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [todoId]);
  return (
    <>
      {error && <p>Ooooooooooops.... Something went wrong.....</p>}
      {isLoading && <Loader />}
      <Link to={location.state?.from || "/todo"}>return back</Link>
      {todoData && (
        <TodoBox status={todoData.status} level={todoData.level}>
          <h3>{todoData.title}</h3>
          <p>{todoData.description}</p>
          <Level>{todoData.level}</Level>
        </TodoBox>
      )}
    </>
  );
}
export default TodoDetails;
