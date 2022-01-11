import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import './index.css';


ReactDOM.render(
  <div>
    <Card titulo = "Cartao #1" conteudo = "Aulas desse cartão"></Card>
    <Card titulo = "Cartao #2" conteudo = "Aulas desse cartão"></Card>
    <Card titulo = "Cartao #3" conteudo = "Aulas desse cartão"></Card>
  </div>,
  document.getElementById('root')
);
