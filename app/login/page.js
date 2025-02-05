'use client'
import { useState } from "react";

function Login() {

        const [admin, alteraAdmin] = useState(false);

        function manipulaAdmin(){
            if (admin == true){
                alteraAdmin(false)
            }else{
                alteraAdmin(true)
            }
            
        }


    return ( 
        <div>
            <h1 className="text-lg text-blue-500 mb-2" > Pagina de Login </h1>
            <p> Você está logado como <strong> { admin == true ? <span> administrador </span> : <span> Usuário </span> }</strong>.</p>
        <button onClick={()=>manipulaAdmin()} className={`mt-3 ${admin == true ? `bg-sky-500` : `bg-red-500`} text-white p-2`}> { admin == true ? <span> Voltar para Usuário </span> : <span> Entrar como administrador </span> } </button>
        {/* <button onClick={()=>manipulaAdmin()} className={"mt-3" + {admin == true ? "bg-sky-500" : "bg-red-500"} + "text-white p-2"} */}


            {
                admin == true ?
                   <div>
                        <h2 className="text-lg text-lime-800 mt-10" > Ola administrador </h2>
                        <p> Seja bem-vindo </p>

                        <button className="bg-black text-white p-3 mt-5" > Cadastrar usuário </button>
                        <p> Digite o nome: </p>
                        <input className="border-2" /> 
                   </div>
                :
                <div></div>   
            }
            



        </div>



        

     );
}

export default Login;