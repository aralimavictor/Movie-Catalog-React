import React from 'react';
import Home from './pages/Home';
import './App.css';

function App() {

  /* 
    Para implementar a segunda página ("Ver Favoritos / Voltar ao Catálogo") utilizei useState dentro do componente principal. 
    O estado 'abaAtiva' gerencia se a tela exibe o catálogo completo ou filtra apenas os itens marcados como favoritos pra não
    precisar quebrar o fundo gradiente e nem recarregar a página.
    Obs: Repare no O Poderoso Chefão
*/
  return (
//
    <Home />
  );
}

export default App;
