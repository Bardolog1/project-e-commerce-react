import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

const Recibir = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/about')
      .then((response) => response.json())
      .then((data) => {
      setTimeout(() => {
        setDatos(data);
      }, 5000);
       
      }).catch((err) => console.log(err));
  }, []);

  return (
    <>
      
        <div>{!datos? <Loading/>: <p>{datos.message}</p>} </div>
      
    </>
  );
};

export default Recibir;
