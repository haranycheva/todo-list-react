import { GlobalStyled } from "./GlobalStyle.style";
import { Route, Routes } from "react-router-dom";
import CreateTodo from "./pages/CreateTodo";
import Todo from "./pages/Todo";
import TodoDetails from "./pages/TodoDetails";
import { Toaster } from "react-hot-toast";
import { Layout } from "./Layout/Layout";
// import { Suspense, lazy } from "react";
import Home from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { PrivatRoute } from "./PrivatRoute";
import { BoundingRoute } from "./BoundingRoute";
import { RegistrationPage } from "./pages/RegistrationPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/oparations";
import { ErrorPage } from "./pages/ErrorPage";

// const Home = lazy(() =>import('./pages/Home'))
// <Suspense fallback={Home}> нада юзать тока експорт дефолт, бо всьо полетить нахуй, бо лезі шукає саме дефол 
export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(refreshUser())
  }, [dispatch]);
  return (
    <>
      <GlobalStyled />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login"  element={<BoundingRoute redirect="/todo" component={LoginPage}/>}  />
          <Route path="registration"  element={<BoundingRoute redirect="/todo" component={RegistrationPage}/>} />
          <Route path="todo"  element={<PrivatRoute redirect="/login" component={Todo}/>} />
          <Route path="createTodo" element={<PrivatRoute redirect="/login" component={CreateTodo}/>} />
          {/* <Route path="todo" element={<Todo />} /> */}
          <Route path="todo/:todoId" element={<TodoDetails />} />
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </>
  );
}
