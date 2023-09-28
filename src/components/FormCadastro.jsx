"use client"

import { collection, addDoc, } from "firebase/firestore";
import { db } from '../../config/firebase'
import { useState } from "react";

export default function FormCadastro() {
    const [nome, setNome] = useState("");
    const [cidade, setCidade] = useState("");
    const [telefone, setTelefone] = useState("");
    const [seguimento, setSeguimento] = useState("");
    const [email, setEmail] = useState("");



    const handleNomeChange = (e) => { setNome(e.target.value); };
    const handleCidadeChange = (e) => { setCidade(e.target.value); };
    const handleTelefoneChange = (e) => { setTelefone(e.target.value); };
    const handleEmailChange = (e) => { setEmail(e.target.value); };
    const handleSeguimentoChange = (e) => { setSeguimento(e.target.value); };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "cadastro"), {
                nome: nome,
                cidade: cidade,
                telefone: telefone,
                email: email,
                seguimento: seguimento,
            });

            setNome("");
            setCidade("");
            setTelefone("");
            setEmail("");
            setSeguimento("");

            alert("Cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar produto:", error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit} className="flex flex-col justify-center bg-gradient-to-b from-laranjaclaro to-laranja md:w-96 p-5 rounded-xl">

                <div className="flex flex-col">
                    <label className="text-branco font-bold">Nome:</label>
                    <input type="text" value={nome} className="px-2 rounded" onChange={handleNomeChange} required />
                </div>

                <div className="flex flex-col">
                    <label className="text-branco font-bold">Cidade:</label>
                    <input type="text" value={cidade} className="px-2 rounded" onChange={handleCidadeChange} required />
                </div>

                <div className="flex flex-col">
                    <label className="text-branco font-bold">Telefone:</label>
                    <input type="text" value={telefone} className="px-2 rounded" onChange={handleTelefoneChange} required />
                </div>
                <div className="flex flex-col">
                    <label className="text-branco font-bold">Email:</label>
                    <input type="text" value={email} className="px-2 rounded" onChange={handleEmailChange} required />
                </div>
                <div className="flex flex-col">
                    <label className="text-branco font-bold">Segmento:</label>
                    <input type="text" value={seguimento} className="px-2 rounded" onChange={handleSeguimentoChange} />
                </div>
                <button type="submit" className="bg-laranjaclaro w-44 mt-5 p-2 text-xl font-bold text-branco hover:bg-branco hover:text-laranja transition-all duration-500 rounded-xl">Cadastrar</button>
            </form>
        </div>
    );
}