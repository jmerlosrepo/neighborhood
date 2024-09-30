import { useEffect, useState } from "react";
import { LatestNewsProps } from "../../types";

const LatestNews = ({ news }: LatestNewsProps) => {
  const [arrIndex, setArrIndex] = useState(0);

  useEffect(() => {
    console.log(arrIndex);
    const interval = setInterval(() => {
      setArrIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
    }, 30000);
    return () => clearInterval(interval);
  }, [news.length]);

  //TODO: poner la logica y los elementos para mostrar el contenido del objeto
  return <div>{arrIndex}</div>;
};

export default LatestNews;
