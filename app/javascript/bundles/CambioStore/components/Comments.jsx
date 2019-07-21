import React from 'react';

import Slider from '../templates/Slider'
import MedalIcon from '../images/medalha.png'
import LockIcon from '../images/cadeado.png'
import GloboIcon from '../images/globo.png'

export default class Comments extends React.Component {
  
  render() {
    
    return (
      <div className="flexcontainer--right__comments">
        <h2><strong>Compare e compre online nas <br />
          principais Casas de Câmbio do país.</strong></h2>
        
        <p>Realize seu câmbio online em menos de 2 minutos de maneira rápida, 
          fácil e 100% segura. Receba suas moedas onde quiser.</p>
          
        <Slider />

        <div className="comment-footer">
          <div className="comment-footer__images">
            <img src={MedalIcon} width="12%"/>
            <img src={LockIcon} width="10%"/>
            <img src={GloboIcon} width="12%"/>
          </div>

          <div className="comment-footer__text">
            <div>
              Mais de <br />
              <span className="span-1">100 mil</span><br />
              clientes<br />
              satisfeitos
            </div>
            
            <div>
              Câmbio 100% <span className="span-2">seguro</span><br />
              parceiro <span className="span-2"> autorizado</span><br />
              pelo <span className="span-2"> Banco Central</span>
            </div>
            
            <div>
              Maior <br />
              <span className="span-1">diversidade</span><br />
              de moedas
            </div>
          </div>

         </div>
        
      </div>
    );
  }
}
