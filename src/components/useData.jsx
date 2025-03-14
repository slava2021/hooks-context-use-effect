import { useState, useEffect } from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const useData = ({ url, pollingInterval, delay, ms, id }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [polling, setPolling] = useState(true);
  const [data, setData] = useState();

  // console.log("before ", isNaN(id));

  const fetchData = async () => {
    try {
      setLoading(true);
      await delay(ms);
      const r = await fetch(url);
      const data = await r.json();
      setData(data);
    } catch (err) {
      console.log("error: ", err);
      setError(err);
    } finally {
      setLoading(false);
      if (error) {
        setError(false);
      }
    }
  };

  const step = () => {
    fetchData();
    if (pollingInterval && polling) {
      setTimeout(step, pollingInterval);
    }
  };

  useEffect(() => {
    step();
    return () => {
      setPolling(false);
    };
  }, [url]);

  return { data, loading, error };
};
