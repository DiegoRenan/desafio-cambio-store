import React from 'react';
import Simulator from './Simulator'
import Comments from './Comments'

export default class CambioStore extends React.Component {

  render() {
    return (
      <div className="content">
        <div >
          <Simulator />
          <Comments />
        </div>
      </div>
    );
  }
}
