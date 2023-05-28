import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario/Formulario.js';
import Jogadores from './componentes/Jogadores/Jogadores.js';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

//Componente React
function App() {

  // lista
  const [jogadores, setJogadores] = useState ([
    {
      id: uuidv4(),
      nome:'Defensor',
      cor:'#02EAA0',
    },
  
    {
      id: uuidv4(),
      nome:'Meio-campista',
      cor:'#0294FF',
    },

    {
      id: uuidv4(),
      nome:'Atacante',
      cor:'#FD1A5A',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  // -------FUNÇÃO DELETAR CARD-------
  function deletarCard(nome) {
    setColaboradores(colaboradores.filter(jogador => jogador.nome !== nome));
  }

  // -------FUNÇÃO DE MUDAR COR-------
  function mudaCorDoJogador(cor, nome){
    setJogadores(jogadores.map(jogador => {
      if(jogador.nome === nome){
        jogador.cor = cor;
      }
      return jogador;
    }))
  }

  function cadastrarNovaPosicao (novaPosicao) {
    setJogadores([...jogadores, { ...novaPosicao, id: uuidv4() } ])
  }

  
  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarNovaPosicao={cadastrarNovaPosicao}
        jogadores={jogadores.map(jogador => jogador.nome)} 
        aoCadastrar={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      
      {jogadores.map(infoJogador => <Jogadores
        mudarCor={mudaCorDoJogador}
        key={infoJogador.nome} 
        nome={infoJogador.nome} 
        cor={infoJogador.cor} 
        jogadores={colaboradores.filter(colaborador => colaborador.jogador === infoJogador.nome)}
        aoDeletar={deletarCard}
      />)}
    </div>
  );
}


// Lógica do filter, tenho uma Array (colaboradores), através do filter determinamos uma condição
// para cada jogador/colaborador, fazemos uma comparação do jogador/tipo de jogador com as InfoJogador.nome
// Se for igual, é verdadeiro e o card é colocado no campo selecionado sem redundancias

export default App;
