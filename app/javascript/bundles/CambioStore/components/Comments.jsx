import React from 'react';

import Slider from '../templates/Slider'

export default class Comments extends React.Component {
  
  render() {
    
    return (
      <div className="flexcontainer--right__comments">
        <h2><strong>Compare e compre online nas <br />
          principais Casas de Câmbio do país.</strong></h2>
        <h5>Realize seu câmbio online em menos de 2 minutos de maneira rápida, fácil e 100% segura. Receba suas moedas onde quiser.</h5>
        <Slider />
        Mais de 100 mil clientes satisfeitos
        <h5>Câmbio 100% seguro parceiro autorizado pelo Banco Central</h5>
        <h5>Maior diversidade de moedas</h5>
        
      </div>
    );
  }
}
