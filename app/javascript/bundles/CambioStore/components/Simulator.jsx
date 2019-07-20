import React from 'react'

import axios from 'axios'
import Select from '../templates/Select'
import Button from '../templates/Button'
import ImgLocal from '../templates/ImgLocal'
import ImgDolar from '../templates/ImgDolar'
import ImgSearch from '../templates/ImgSearch'

const URL = '/moeda'

export default class Simulator extends React.Component {

  constructor(props) {
    super(props)
    this.state = { valor: '', 
                   title: '', 
                   options: [
                    { key: "1", value: "USD", text: "Dólar" },
                    { key: "2", value: "EUR", text: "Euro" }
                  ]
                }

    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount(){
    this.callAPI('USD')
  }

  handleChange(event) {
    this.callAPI(event.target.value)
  }

  callAPI(data){
    const moeda = { moeda: data || 'USD'}

    axios.post('/moeda', moeda,{
      headers: {'Content-Type': 'application/json'}
    })
    .then( response =>{
      this.setState({
        title: response.data[moeda.moeda].name,
        valor: response.data[moeda.moeda].high
       })
    })
    .catch( error => {
      console.log("erro");
    });
  }

  render() {
    return (
      <div className="flexcontainer--left__simulator">
        <div className="simulator-header">Moeda em espécie</div>
        <div className="simulator-body">
          <div className="simulator-body__title">
            <span className="simulator-body__coin">
              {this.state.title } 
            </span>
            <span className="simulator-body__money">
              { this.state.valor}
            </span>
          </div>
          <div className="simulator-body__form">
            <ImgLocal />
            
            <Select options={[
                { 'text': 'São Paulo (SP)',
                  'key': '1', 
                  'value': 'São Paulo (SP)' }, 
                { 'text': 'Brasíla (DF)',
                  'key': '2',
                 'value': 'Brasíla (DF)' }
              ]} />
            
            <ImgSearch />
            
            <ImgDolar />
            
            <Select options={this.state.options}
              handleChange={this.handleChange}
            />
          </div>
          <Button />
        </div>

      </div>
    );
  }
}
