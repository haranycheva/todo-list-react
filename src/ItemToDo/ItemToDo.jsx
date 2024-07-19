import { useLocation } from "react-router-dom";
import { Item, Level, Text, Title, Button } from "./ItemToDo.styled";

export function ItemToDo({
  status,
  level,
  id,
  title,
  description,
  onDelete,
  onClick,
  selected,
}) {
  const location = useLocation();
  return (
    <Item status={status} level={level} onClick={onClick} selected={selected}>
      <Title to={id} state={{from: location}}>{title}</Title>
      <Text>{description}</Text>
      <Level>{level}</Level>
      <Button
        onClick={(e) => {
          onDelete(id);
        }}
        color="#fd111f"
      >
        del
      </Button>
    </Item>
  );
}
