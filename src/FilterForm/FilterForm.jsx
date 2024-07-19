import { useSearchParams } from "react-router-dom";

export function FilterForm({ valueTitle, valueLevel, onFilterChange }) {
  const[params, setParams] = useSearchParams();
  const level = params.get(`level`) ?? "all";
  const topic = params.get(`topic`) ?? "";
  const HandleTopicChange = (e) => {
    setParams({level, topic:  e.target.value});
  };
  const HandleLevelChange = (e) => {
    setParams({topic, level:  e.target.value});
  };
  return (
    <>
      <input
        onChange={HandleTopicChange}
        name="title"
        type="text"
        value={valueTitle}
      />
      <select onChange={HandleLevelChange} name="level" value={valueLevel}>
        <option value="easy">Level 1</option>
        <option value="medium">Level 2</option>
        <option value="hard">Level 3</option>
        <option value="all">All</option>
      </select>
    </>
  );
}
