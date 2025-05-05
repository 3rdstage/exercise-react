import React from 'react';
import PropTypes from 'prop-types';

class FormattedMoney extends React.Component{

  constructor(props){
    super(props);

  }

  format(amount){
    return parseFloat(amount).toFixed(2);
  }

  render(){
    return(
      <span>{this.format(this.props.value)}</span>
    )
  }
}

FormattedMoney.PropTypes = {
  value: PropTypes.number.isRequired
}


export default FormattedMoney;