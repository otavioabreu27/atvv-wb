import { useEffect, useState } from "react";

export function Clientes(){
  const[clientes, setClientes] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/cliente'); // replace with your API endpoint
      const jsonData = await response.json();
      setClientes(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <>
    {clientes.map((cliente, index) => {
      const url = `http://localhost:5000/clientes/${cliente.id}`
      return(
        <a href={url} key={index}>
          <h1>{cliente.nome}</h1>
        </a>
        
      )
    })}
    </>
  );
}