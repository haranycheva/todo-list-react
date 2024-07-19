import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const ErrorPage = () => {
  const [toChangePage, setToChangePage] = useState(false);
  useEffect(() => {
    setTimeout(() => setToChangePage(true), 10000)
  })
  return toChangePage ? <Navigate to="/"/> : <div>404 ERROR</div>;
};
