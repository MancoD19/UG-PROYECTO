import { useEffect, useState } from "react";

function useGetData(route) {
  const [data, setData] = useState([
    {
      num: 1,
      nombre: "Pedro",
      cedula: "0987654321",
      anexo: "anexo",
    },
    {
      num: 1,
      nombre: "Pedro",
      cedula: "0987654321",
      anexo: "anexo",
    },
    {
      num: 1,
      nombre: "Pedro",
      cedula: "0987654321",
      anexo: "anexo",
    },
    {
      num: 1,
      nombre: "Pedro",
      cedula: "0987654321",
      anexo: "anexo",
    },
    {
      num: 1,
      nombre: "Pedro",
      cedula: "0987654321",
      anexo: "anexo",
    },
  ]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDone(true);
      // getData(route, setData, setDone);
    }, 1000);
  }, []);

  return [data, setData, done, setDone];
}

export default useGetData;
