import { useLocalStorage } from "hooks/useLocalStorage";

export const FormTest = () => {
  const [userName, setUserName] = useLocalStorage(
    "userName",
    () => JSON.parse(localStorage.getItem("userName")) ?? ""
  );
  const [userLastName, setUserLastName] = useLocalStorage(
    "userLastName",
    () => JSON.parse(localStorage.getItem("userLastName")) ?? ""
  );

  const handleChangeName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setUserLastName(e.target.value);
  };

  return (
    <form>
      <label>
        Name
        <input
          type="text"
          name="useName"
          value={userName}
          onChange={handleChangeName}
        />
      </label>
      <label>
        LastName
        <input
          type="text"
          name="useLastName"
          value={userLastName}
          onChange={handleChangeLastName}
        />
      </label>
    </form>
  );
};
