import { useEffect, useState } from 'react';
import './App.css';

type ProdutoType = {
    id: number;
    nome: string;
    preco: string;
    descricao: string;
    imagem: string;
};

type UsuarioType = {
    id: number;
    nome: string;
    email: string; // Adicione outros campos conforme necessário
};

function App() {
    const [nome, setNome] = useState("");
    const [produtos, setProdutos] = useState<ProdutoType[]>([]);
    const [usuarios, setUsuarios] = useState<UsuarioType[]>([]);

    useEffect(() => {
        setNome("Nicole Góis");

        // Buscar os dados do Backend para produtos
        fetch("https://one022a-marketplace-8goe.onrender.com/produtos")
            .then(resposta => resposta.json())
            .then(dados => setProdutos(dados));

        // Buscar os dados do Backend para usuários
        fetch("https://one022a-marketplace-8goe.onrender.com/usuarios")
            .then(resposta => resposta.json())
            .then(dados => setUsuarios(dados));
    }, []);

    return (
        <>
            <h1>{nome}</h1>
            <div className="produtos-container">
                {
                    produtos.map(produto => {
                        return (
                     <div key={produto.id} className="produto-item">
                     <h1>{produto.nome}</h1>
                    <div className='container-imagem'>
                   <img src={produto.imagem} alt="Imagem do celular" />
                    </div>
                    <p>{produto.preco}</p>
                    <p>{produto.descricao}</p>
                     </div>
                    );
                    })
                }
            </div>

            <div className="usuarios-container">
                <h2>Lista de Usuários</h2>
                <ul>
                    {
                        usuarios.map(usuario => (
                            <li key={usuario.id}>
                                {usuario.nome} - {usuario.email}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}

export default App;
