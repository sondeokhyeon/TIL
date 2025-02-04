"use client";

import { useEffect, useState } from "react";

const Title = () => {
  const [greeting, setGreeting] = useState<{ message: string }>({
    message: "",
  });

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("http://localhost:9090/api");
      const json = await data.json();
      setGreeting(json);
    };
    getData();
  }, []);

  return <div>{greeting.message}</div>;
};

export default Title;
