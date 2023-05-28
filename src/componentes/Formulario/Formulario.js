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

    const [ nomePosicao, setNomePosicao] = useState('')    
    const [ corPosicao, setCorPosicao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrar({
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

            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarNovaPosicao({ nome: nomePosicao, cor: corPosicao })
            }}>
                <h2>Preencha os dados para criar uma nova posição do Jogador</h2>
                <CampoTexto 
                    obrigatorio 
                    label="Digite o nome da posição" 
                    placeholder="Ex: Goleiro"
                    valor={nomePosicao}
                    aoAlterado={valor => setNomePosicao(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    label="Digite a cor da posição" 
                    placeholder="Ex: #FFFFFF (Branco)"
                    valor={corPosicao}
                    aoAlterado={valor => setCorPosicao(valor)}
                />
                <Botao>Criar Posição do Jogador</Botao>
            </form>
        </section>
    )
}

export default Formulario