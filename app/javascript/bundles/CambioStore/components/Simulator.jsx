import React from 'react';

export default class Simulator extends React.Component {

  render() {
    return (
      <div className="flexcontainer--left__simulator">
        <div className="simulator-header">Moeda em espécie</div>
        <div className="simulator-body">
          <div className="simulator-body__form">
            <select>
              <option value="option">Option</option>
            </select>
            <select>
              <option value="option">Option</option>
            </select>
            <button>Comparar casas de câmbio</button>
          </div>
        </div>

      </div>
    );
  }
}
