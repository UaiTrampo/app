import Image from "next/image";
import uaitrampo from "../../public/uaiTrampo.png"

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center pt-20">
        <Image src={uaitrampo} alt="Foto logo uaiTrampo" className=" px-5  md:w-1/2 drop-shadow-dark" />
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
        <form className="flex flex-col justify-center bg-gradient-to-b from-laranjaclaro to-laranja w-96 p-5 rounded-xl">
          <label htmlFor="nome" className="text-branco font-bold">Nome:</label>
          <input type="text" className="px-2 rounded"/>
          <label htmlFor="Cidade" className="text-branco font-bold">Cidade:</label>
          <input type="text" className="px-2 rounded"/>
          <label htmlFor="Telefone" className="text-branco font-bold">Telefone:</label>
          <input type="text" className="px-2 rounded"/>
          <label htmlFor="email" className="text-branco font-bold">Email:</label>
          <input type="text" className="px-2 rounded"/>
          <label htmlFor="seguimento" className="text-branco font-bold">Segmento:</label>
          <input type="text" className="px-2 rounded"/>
          <button className="bg-laranjaclaro w-44 mt-5 p-2 text-xl font-bold text-branco hover:bg-branco hover:text-laranja transition-all duration-500 rounded-xl">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
