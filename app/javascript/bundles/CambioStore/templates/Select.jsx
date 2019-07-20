import React from 'react'

export default props => {
  
  const renderElements = () => {
    const options = props.options || []
    
    return options.map(option => (
      <option value={option.value} key={option.key}>
        {option.text}
      </option>
    ))
  }

  return (
    <select onChange={props.handleChange} defaultValue='USD' className="select-default margin-10">
      {renderElements()}
    </select>
  )
}
