import './Formulario.css'
import CampoTexto from '../CampoTexto/CampoTexto.js'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa.js'
import Botao from '../Botao/Botao.js'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')    
    const [pontuacao, setPontuacao] = useState('')    
    const [imagem, setImagem] = useState('')    
    const [jogador, setJogador] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            pontuacao,
            imagem,
            jogador,
        })
        setNome('')
        setPontuacao('')
        setImagem('')
        setJogador('')
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar um Card de Jogador</h2>
                <CampoTexto 
                    obrigatorio="true" 
                    label="Nome" 
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio="true" 
                    label="Pontuação individual (0 a 100)" 
                    placeholder="Digite a pontuação do jogador"
                    valor={pontuacao}
                    aoAlterado={valor => setPontuacao(valor)}
                />
                <CampoTexto 
                    obrigatorio="true" 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem (URL)"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio="true" 
                    label="Escolha seu tipo de jogador:" 
                    itens={props.jogadores}
                    valor={jogador}
                    aoAlterado={valor => setJogador(valor)}
                />
                <Botao>Criar Jogador</Botao>
            </form>
        </section>
    )
}

export default Formulario