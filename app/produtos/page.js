'use client'
import { useState } from "react";
import Cadastro from "../cadastro/page";

function Produtos() {

        // const [produto, alteraProduto] = useState({});
        const [produtos, alteraProdutos] = useState([{
                nome: "Picanha",
                preco: "39.99",
                quantidade: 60,
            },{
                nome: "Mostarda",
                preco: "12.99",
                quantidade: 10,
                
        }]);


        const [mostraListagem, alteraMostraListagem ] = useState(false)
        const [mostraCadastro, alteraMostraCadastro ] = useState(true)
        
        const [quantidade, alteraQuantidade ] = useState("")
        const [nome, alteraNome ] = useState("")
        const [preco, alteraPreco ] = useState("")


        function alteraExibicao(tela){
            if(tela == "cadastro"){
                alteraMostraCadastro(true);
                alteraMostraListagem(true);
            
            }

            if (tela == "listagem"){
                alteraMostraCadastro(false)
                alteraMostraListagem(true)
            }
        }

        function salvar(e){
            e.preventDefault();
            
            const objeto = {
                nome: nome,
                preco: preco,
                quantidade: quantidade,
                data: Date()
            }

            alteraProdutos([...produtos, objeto])

        }
    

    return ( 
        <div className="p-10" >
            <h1 className="text-lg mb-10 " > Administração  de Produtos </h1>

            <div className="flex gap-10" >

                    {/* {Menu Lateral} */}
                  <div>
                     <button onClick={()=> alteraExibicao("cadastro") } className="bg-gray-200 p-5 mb-5" > Cadastro </button>
                     <br/>
                     <button onClick={()=> alteraExibicao("listagem") }className="bg-gray-200 p-5 mb-5" > Listagem </button>
                  </div>    
                  
                    {/* {Painel principal} */}
                  <div className="border p-5" >

                    {/* {Cadastro} */}
                    {
                        mostraCadastro == true &&
                        <div>
                        <h2 className="font-bold mb-2" >  Cadastro de Produtos </h2>
                        <form onSubmit={(e)=> salvar (e) } >

                            <label className="mb-4" >
                                 Digite o nome: 
                                 <br/>
                                 <input onChange={(e)=> alteraNome(e.target.value) } className="outline" />
                            </label>
                            <br/>


                            <label>
                                 Digite o preço: 
                                 <br/>
                                 <input onChange={(e)=> alteraPreco(e.target.value) } className="outline" />
                            </label>
                            <br/>

                            <label className="mb-4" >
                                 Digite a quantidade: 
                                 <br/>
                                 <input onChange={(e)=> alteraQuantidade(e.target.value) } className="outline" />
                            </label>
                            <br/>

                            <button className="bg-gray-300 mt-5 p-5" >   Salvar  </button>
                        </form>
                        
                    </div>
                    }
                    

                </div>     

                    {/* {Listagem} */}
                    {
                        mostraListagem == true &&
                        <div className="border p-5" >
                            <h2 className="font-bold mb-5" > Listagem de Produtos </h2>

                            <ul>
                                {produtos.map( (i)=> <li>{i.nome} - R$ {i.preco} - {i.quantidade} itens </li>  )}
                            </ul>


                    </div>
                    }
                    
                                        
            </div>










        </div>
     );
}

export default Produtos;