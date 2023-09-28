import Image from "next/image";
import uaitrampo from "../../public/uaiTrampo.png"
import FormCadastro from "@/components/FormCadastro";


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
      <FormCadastro/>
    </div>
  )
}
