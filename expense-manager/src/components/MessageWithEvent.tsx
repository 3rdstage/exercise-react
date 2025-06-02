import React, { SyntheticEvent } from 'react'

// https://www.tutorialspoint.com/reactjs/reactjs_create_event_aware_component.htm
class MessageWithEvent extends React.Component<{name: string}, any>{

  constructor(props: {name: string}){
    super(props);

    this.logEventToConsole = this.logEventToConsole.bind(this);
  }

  logEventToConsole(msgId: number, ev: SyntheticEvent){
    console.log(`Inner HTML: ${ev.currentTarget.innerHTML}, message ID: ${msgId}`);
  }

  override render(){
    return (
      <div onClick={this.logEventToConsole.bind(this, Math.floor(Math.random() * 100))}>
        <p>Hello {this.props.name}</p>
      </div>
    )
  }
}

export default MessageWithEvent;
