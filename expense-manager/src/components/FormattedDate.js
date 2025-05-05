import React from 'react';
import { format } from "date-fns";

class FormattedDate extends React.Component{

  constructor(props){
    super(props);
  }

  format(val){
    return format(new Date(val), 'd-MMM-y'); //https://date-fns.org/v4.1.0/docs/format
  }

  render(){
    return(
      <span>{this.format(this.props.value)}</span>
    )
  }
}

export default FormattedDate;