import React, { useEffect, useState } from 'react';
import Loading from "../Loading/Loading";

function Recibir (){
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/about')
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      setTimeout(() => {
        console.log(data);
        setDatos(data);
      }, 5000);
       
      });
  }, []);

  return (
    <>
      
        <div>{!datos? <Loading/>: <p>{datos.message}</p>} </div>
      
    </>
  );
};

export default Recibir;
