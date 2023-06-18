import { useEffect, useState } from "react";
import { useParams } from "react-router";

export function Cliente(){
  const { id } = useParams();
  const [cliente, setCliente] = useState({})
  const [rgs, setRgs] = useState([])
  const [cpf, setCpf] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const fetchData = async () => {
    try {
      const cliente = await fetch(`http://localhost:3000/cliente/${id}`);
      const cpf = await fetch(`http://localhost:3000/cpf/${id}`)
      let rg = await fetch(`http://localhost:3000/rg/${id}`)
      rg = await rg.json()
      rg.map((rg)=>{
        rg.dataEmissao = rg.dataEmissao.substring(0, 10)
      })
      setCliente(await cliente.json());
      setCpf(await cpf.json());
      setRgs(rg);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cliente);
  };

  useEffect(()=> {
    fetchData();
  }, [])

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h3>Dados pessoais</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="nome" value={cliente.nome} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="socialName">Social Name:</label>
      <input type="text" id="socialName" name="nomeSocial" value={cliente.nomeSocial} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" name="genero" value={cliente.genero} onChange={handleChange}>
        <option value="h">Homem</option>
        <option value="m">Mulher</option>
        <option value="o">Outros</option>
      </select>
    </div>
    <div>
      <h3>RG</h3>
      {rgs.map((rg, index)=> {
        return(
            <div key={rg.id}>
              <div>
                <h4>Rg: {index+1}</h4>
                <label htmlFor="numero">Numero Rg:</label>
                <input type="text" name="numero" value={rg.valorRg} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="orgao">Orgão emissor:</label>
                <input type="text" name="orgao" value={rg.orgaoEmissor} onChange={handleChange} />
              </div>
              <div>
                <label htmlFor="data">Data da emissão:</label>
                <input type="date" name="data" value={rg.dataEmissao} onChange={handleChange} />
              </div>
            </div> 
        )
      })}
      
    </div>
    <button type="submit">Submit</button>
  </form>
  )
}