import './CardJogador.css'

const CardJogador = (props) => {
    return(
        <div className='jogador'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.pontuacao}</h5>
            </div>
        </div>
    )
}

export default CardJogador