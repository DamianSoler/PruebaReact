import React from "react";

const MiApi = () => {
  const getData = async () => {
    const response = await fetch("api.json");
    const data = await response.json();
    setResults(data.results);
  };

  useEffect(() => {
    getData();
  }, []);
};

export default MiApi;
