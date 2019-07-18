import React from 'react';
import Simulator from './Simulator'
import Comments from './Comments'

export default class CambioStore extends React.Component {

  render() {
    return (
      <div className="content">
        <div className="content__flexcontainer">
          <div className="flexcontainer--left">
            <Simulator />
          </div>
          <div className="flexcontainer--right">
            <Comments />
          </div>
        </div>
      </div>
    );
  }
}
