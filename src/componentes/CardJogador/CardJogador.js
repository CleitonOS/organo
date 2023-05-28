import { AiFillCloseCircle} from 'react-icons/ai';
import './CardJogador.css'

const CardJogador = (props) => {
    function favoritar() {
        props.aoFavoritar(props.id);
    }

    return(
        <div className='jogador'>
            <AiFillCloseCircle size={30} 
                className='deletar' 
                onClick={() => props.aoDeletar(props.nome)} 
            />
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