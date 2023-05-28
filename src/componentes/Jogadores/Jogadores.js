import CardJogador from '../CardJogador/CardJogador.js'
import './Jogadores.css'
import hexToRgba from 'hex-to-rgba';

// Componente sem comportamento
//Normalmente chamado de Dumb Components - Componente estático
const Jogadores = (props) => {
    const borderColor = { borderColor: props.cor}
    
    return(
        (props.jogadores.length > 0) && <section className='jogadores' style={{backgroundImage: 'url(./imagens/campo-de-futebol-background.png)', backgroundColor: hexToRgba(props.cor, 0.6)}}>
            <input 
                onChange={evento => { props.mudarCor(evento.target.value, props.nome); }} 
                value={props.cor} 
                type='color' 
                className='input-cor' 
            />
            
            <h3 style={borderColor}>{props.nome}</h3>
            <div className='cardJogador'>
                {props.jogadores.map(jogador => {
                    return <CardJogador 
                        corDeFundo={props.cor} 
                        key={jogador.id} 
                        nome={jogador.nome} 
                        pontuacao={jogador.pontuacao} 
                        imagem={jogador.imagem} 
                        aoDeletar={props.aoDeletar}
                    />
                })}
            </div>
        </section>
    )
}

export default Jogadores