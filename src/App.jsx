import { useState, useEffect } from "react";
import User from "./components/User";
import "./App.css";

// const useData = ({ url, defaultData, mapData }) => {
//   const [data, setData] = useState(defaultData);

//   useEffect(() => {
//     fetch(url)
//       .then((r) => r.json())
//       // .then(console.log("before: ", data.name))
//       .then((data) => setData(data));
//   }, [url]);

//   return data;
// };

// const handleSelectItem = (item) => {
//   console.log(item);
// };

// const UserListLoader = () => {
//   const data = useData({
//     url: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
//     defaultData: [],
//     // mapData: data,
//   });
//   return <List data={data} />;
// };

function App() {
  return (
    <>
      {/* <UserListLoader /> */}
      <User />
    </>
  );
}

export default App;
