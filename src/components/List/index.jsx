import { useSelector } from "react-redux";

export default function List() {
  const list = useSelector((state) => state.list.filter((note) => note.favorite));
  return (
    <div>
      {list
        .map((note) => (
          <p key={note.text}>{note.text}</p>
        ))}
    </div>
  );
}
