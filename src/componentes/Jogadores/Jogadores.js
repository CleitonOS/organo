import CardJogador from '../CardJogador/CardJogador.js'
import './Jogadores.css'

// Componente sem comportamento
//Normalmente chamado de Dumb Components - Componente estático
const Jogadores = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    const borderColor = { borderColor: props.corPrimaria}
    
    return(
        (props.jogadores.length > 0) && <section className='jogadores' style={css}>
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='cardJogador'>
                {props.jogadores.map(jogador => <CardJogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} pontuacao={jogador.pontuacao} imagem={jogador.imagem}/>)}
            </div>
        </section>
    )
}

export default Jogadores