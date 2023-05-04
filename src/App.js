import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import CampoTexto from './componentes/CampoTexto/CampoTexto.js';
import Jogadores from './componentes/Jogadores/Jogadores.js';
import { useState } from 'react';
import CardJogador from './componentes/CardJogador/CardJogador.js';

//Componente React
function App() {

  // lista
  const jogadores = [
    {
      nome:'Defensor',
      corPrimaria:'#57c278',
      corSecundaria:'#02EAA0',
    },
  
    {
      nome:'Meio-campista',
      corPrimaria:'#82CFFA',
      corSecundaria:'#0294FF',
    },

    {
      nome:'Atacante',
      corPrimaria:'#cc0052',
      corSecundaria:'#FD1A5A',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario jogadores={jogadores.map(jogador => jogador.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {jogadores.map(infoJogador => <Jogadores
        key={infoJogador.nome} 
        nome={infoJogador.nome} 
        corPrimaria={infoJogador.corPrimaria} 
        corSecundaria={infoJogador.corSecundaria} 
        jogadores={colaboradores.filter(colaborador => colaborador.jogador === infoJogador.nome)}
        />)}
    </div>
  );
}

// Lógica do filter, tenho uma Array (colaboradores), através do filter determinamos uma condição
// para cada jogador/colaborador, fazemos uma comparação do jogador/tipo de jogador com as InfoJogador.nome
// Se for igual, é verdadeiro e o card é colocado no campo selecionado sem redundancias

export default App;
