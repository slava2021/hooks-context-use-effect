import { useState, useEffect } from "react";
import { DetailsView } from "./DetailsView";
import { useData } from "./useData";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Details = ({ info }) => {
  if (!info) return <p>Выберите пользователя</p>; // Заглушка до выбора пользователя
  const id = info?.id;

  const { data, loading, error } = useData({
    url: `${"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/"}${id}.json`,
    pollingInterval: false,
    delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
    ms: 2000,
    id: Number(id),
  });

  return (
    <>
      {error ? <p>Error loading data</p> : ""}
      {loading ? <p>Loading...</p> : <DetailsView details={data} />}
    </>
  );
};
