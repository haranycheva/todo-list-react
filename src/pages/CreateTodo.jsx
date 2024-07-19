import { FormToDo } from "../FormToDo/FormToDo"
import { Loader } from "../Loader/Loader";
import { postToDo } from "../fetch";
import { useState } from "react";
import toast from "react-hot-toast";

function CreateTodo(){
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleAddItem = async (item) => {
        setLoading(true);
        setError(null);
        try {
          await postToDo(item);
          toast.success("Success 👻");
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
    return <>        {error && <p>Ooooooooooops.... Something went wrong.....</p>}
    {isLoading && <Loader />}
<FormToDo onAdd={handleAddItem}></FormToDo></>
}
export default CreateTodo