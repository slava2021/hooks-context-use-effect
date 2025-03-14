import { useState } from "react";
import { List } from "./List";
import { Details } from "./Details";

export default function User() {
  const [info, setInfo] = useState();

  const selectUser = (user) => {
    setInfo(user);
  };

  return (
    <div className="user">
      <List selectUser={selectUser} />
      <Details info={info} />
    </div>
  );
}
