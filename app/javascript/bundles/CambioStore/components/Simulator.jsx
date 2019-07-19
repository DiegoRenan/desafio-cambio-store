import React from 'react';

import Select from '../templates/Select'
import Button from '../templates/Button'
import ImgLocal from '../templates/ImgLocal'
import ImgDolar from '../templates/ImgDolar'
import ImgSearch from '../templates/ImgSearch'

export default class Simulator extends React.Component {

  render() {
    return (
      <div className="flexcontainer--left__simulator">
        <div className="simulator-header">Moeda em espécie</div>
        <div className="simulator-body">
          <div className="simulator-body__title">
            <span className="simulator-body__coin">Dólar comercial</span><span className="simulator-body__money">R$ 3,7189</span>
          </div>
          <div className="simulator-body__form">
            <ImgLocal /><Select /><ImgSearch />
            <ImgDolar /><Select />
          </div>
          <Button />
        </div>

      </div>
    );
  }
}
