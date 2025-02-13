'use client'
import { Cairo } from "next/font/google";
import { useState } from "react";

function Home() {

    // aqui entra o js
    const [carrinho, alteraCarrinho ] = useState(0);
    const [ preco, adicionarCupom ] = useState(25);
    const [ valorTotal, alteraValorTotal ] = useState(0);

    const [ tamanhos, alteraTamanhos ] = useState(["P", "M", "G", "GG"]);
    const [ cores, alteraCores ] = useState(["Preto", "Amarelo", "Azul"]);
    const [ entregas, alteraEntregas ] = useState(["PAC", "Sedex", "Retirada"]);

    function manipulaCarrinho(adicionar){

      let novoCarrinho = carrinho;

      if (adicionar == true){
        alteraCarrinho(carrinho + 1)
        novoCarrinho++
      }else{
        alteraCarrinho (carrinho - 1 )
        novoCarrinho--
      }

      alteraValorTotal( novoCarrinho * preco)

    }

    function limpaCarrinho(){
      alteraCarrinho ( 0 )
      alteraValorTotal ( 0 )
    }
  
    function aplicaCupom(){
      adicionarCupom ( 19 )
          
     }

  return ( 
      <div className="p-5" >

        <h1 className="bg-sky-500 text-white p-3" > Lojinha do Luiz </h1>
        <p className="p-3 text-lg" > Carrinho: <strong> {carrinho} </strong> itens </p>
        
        {
                carrinho > 0 ?
                   <div>
                        <button onClick={()=>limpaCarrinho()} className="bg-yellow-400 text-black mt-5 p-3 mb-5" > Limpar </button>
                   </div>
                :
                <div></div>   
            }
        <button onClick={()=>aplicaCupom()} className="bg-black text-white ml-5 mt-5 p-3 mb-5" > Adicionar cupom </button>

        <hr/>

        <p className="p-3 text-lg" > Valor total: R$ <strong> {valorTotal} </strong> </p>

        <hr/>

        <h2> Produtos </h2>

        <div className="border bg-sky-700 w-fit text-center text-white p-2" >
          <img className="" src="https://placehold.co/200/" />
          
          
          <p> Tamanhos: {tamanhos.map( (i)=> <span> {i}, </span> )} </p>

          <p> Cores: </p>

          <ul>
            {cores.map ((i)=> <li className="border" > {i} </li> )}
            
          </ul>

          <p> Entrega: <br/> {entregas.map( (i)=> <span> <button className="bg-cyan-400 text-black mb-5 mt-3 p-3 ml-3 mr-3" >  {i}  </button> </span> )} </p>
          
            <h3 className="text-lg text-lime-200 font-bold" > Produto modelo </h3>
          <p> R${preco},00 </p>



          {
                carrinho > 0 ?
                   <div>
                       <button  onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-black mt-5 p-3"> Remover do carrinho </button> 
                   </div>
                :
                <div></div>   
            }





          
          <button  onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3"> Adicionar ao carrinho  </button>
          <br/>
          


        </div>

        


      </div>
  );
}

export default Home;