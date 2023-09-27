import React from "react";
import { useClient } from "react-server-dom-webpack/client";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../config/firebase'
import uaitrampo from "../../public/uaiTrampo.png"

function ItemCadastro() {
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [segmento, setSegmento] = useState("");

  const handleNomeChange = (e) => { setNome(e.target.value); };
  const handleCidadeChange = (e) => { setCidade(e.target.value); };
  const handleTelefoneChange = (e) => { setTelefone(e.target.value); };
  const handleEmailChange = (e) => { setEmail(e.target.value); };
  const handleSegmentoChange = (e) => { setSegmento(e.target.value); };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "profissionais"), {
        nome: nome,
        cidade: cidade,
        telefone: telefone,
        email: email,
        segmento: segmento
      });

      setNome("");
      setCidade("");
      setTelefone("");
      setEmail("");
      setSegmento("");

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center pt-20">
        <img src={uaitrampo} alt="UaiTrampo" className=" px-5  md:w-1/2 drop-shadow-dark" />
      </div>
      <div className="py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-8xl font-bold">
          Pré Cadastro
        </h1>
        <h2 className="text-xl text-zinc-700 text-center">
          Nossa plataforma está em fase final de desenvolvimento. Faça o pré cadastro e aproveite os benefícios
        </h2>
      </div>
      <div className="flex justify-center">
        <form className="flex flex-col justify-center bg-gradient-to-b from-laranjaclaro to-laranja w-96 p-5 rounded-xl" onSubmit={handleSubmit}>

          <label htmlFor="nome" className="text-branco font-bold">Nome:</label>
          <input type="text" className="px-2 rounded" value={nome} onChange={handleNomeChange} />
          
          <label htmlFor="Cidade" className="text-branco font-bold">Cidade:</label>
          <input type="text" className="px-2 rounded" value={cidade} onChange={handleCidadeChange} />
          
          <label htmlFor="Telefone" className="text-branco font-bold">Telefone:</label>
          <input type="text" className="px-2 rounded" value={telefone} onChange={handleTelefoneChange} />
          
          <label htmlFor="email" className="text-branco font-bold">Email:</label>
          <input type="text" className="px-2 rounded" value={email} onChange={handleEmailChange} />
          
          <label htmlFor="seguimento" className="text-branco font-bold">Segmento:</label>
          <input type="text" className="px-2 rounded" value={segmento} onChange={handleSegmentoChange} />
          
          <button className="bg-laranjaclaro w-44 mt-5 p-2 text-xl font-bold text-branco hover:bg-branco hover:text-laranja transition-all duration-500 rounded-xl" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}

export default function ServerComponentWrapper() {
  useClient();
  return <ItemCadastro />;
}
