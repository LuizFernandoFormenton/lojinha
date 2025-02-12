'use client'

import { useState } from "react";

function Cadastro() {

    const [nome, alteraNome] = useState("");
    const [erroNome, alteraErroNome] = useState(false);

    const [senha, alteraSenha] = useState("");
    const [confirma, alteraConfirma] = useState("");
    const [erroSenha, alteraErroSenha] = useState(false);

    function salvar(){
        console.log("o nome cadastrado é:" + nome)
        alteraNome(nome.toUpperCase())

        if( nome.length < 5 ){
            alteraErroNome(true);
        }else{
            alteraErroNome(false)
        }

        if(senha != confirma){
            alteraErroSenha(true)
        }else{
            alteraErroSenha(false)
        }
    }





    return ( 
        <div className="p-10" >
            <h1> Cadastro </h1>

            <hr/>

            <p> Digite seu nome </p>
            <input className="outline" /> 

            <br/>

            {
                erroNome == true ?

                <div className="bg-red-500 texg-white" >
                  <p> O nome deve ter pelomenos 5 caracteres </p>
                </div>
                :
                    
                    <div></div>
            }

              <p> Digite sua senha: </p>
              <input onChange={(e)=> alteraSenha(e.target.value) } value={senha} className="outline" /> 

               <br/> 

               <p> Confirme sua senha: </p>
                    <input onChange={(e)=> alteraConfirma(e.target.value) } value={confirma} className="outline" /> 

               <br/>

               {
                erroSenha == true ?

                <div className="bg-red-500 texg-white" >
                  <p> As senhas digitadas nao são iguais </p>
                </div>
                :
                    
                    <div></div>
            }

            <button onClick={()=>salvar()} className="p-3 mt-5 bg-lime-500 text-white" > Salvar </button>
        </div>
     );
}

export default Cadastro;