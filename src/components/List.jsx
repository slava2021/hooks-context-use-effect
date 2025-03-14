import { useState, useEffect } from "react";
import { useData } from "./useData";

export const List = ({ selectUser }) => {
  const { data, loading } = useData({
    url: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
    pollingInterval: false,
    delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    ms: 1000,
    id: true,
  });

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // console.log("data ", data);

  return (
    <>
      {loading && <p>Loading...</p>}

      <ul className="list-group">
        {data &&
          data.map((item) => {
            return (
              <li
                className={
                  selectedIndex === item.id
                    ? "list-group-item active"
                    : "list-group-item"
                }
                key={item.id}
                onClick={() => {
                  setSelectedIndex(item.id);
                  selectUser(item);
                }}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </>
  );
};
