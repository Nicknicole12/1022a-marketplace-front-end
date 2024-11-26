import { FormEvent } from "react"

function CadastroProduto (){
 function handleForm(event:FormEvent){
    event.preventDefault();
    console.log("Cliquei em cadastrar")

    //Pegar os valores dos campos
    //mandar pelo fetch para o back-end

 }
Function handleId(event:ChangeEvent<input
    return(
        <>
        <h1>Meu compnente de cadastro de produtos</h1>
        <form onSubmit={handleForm}>
     <div>
        <input placeholder="id" type="text" name="id" id="id" onClick={handleId}/>
        </div>
     <div> 
        <input placeholder="nome" type="text" name="id" id="id"/>
        </div>
     <div>
          <input placeholder="descricao" type="text" name="id" id="id"/>
          </div>
     <div> 
         <input placeholder="preco" type="text" name="id" id="id"/>
         </div>
    <div>
         <input placeholder="URL imagem" type="text" name="id" id="id"/>
         </div>
        <input type="submit" value="Cadastrar"/>
        </form>
        </>
    )
}
export default CadastroProduto