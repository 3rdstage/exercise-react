import React from 'react';

class Welcome extends React.Component<{who: string}, {welcomeMessage: string}>{

  constructor(props: any){
    super(props);

    this.state = {
      welcomeMessage: "Hello"
    }
    this.changeMessageHandler = this.changeMessageHandler.bind(this);
  }

  changeMessageHandler(ev: React.SyntheticEvent){
    console.log("Event is fired");
    console.log("   Event target: " + ev.target);
    //console.log("   Event extra: " + extra);

    this.setState(prevState => ({
      /* @ts-ignore */
      welcomeMessage: prevState.welcomeMessage == "Hello" ? "Welcome" : "Hello"
    }));
  }

  override render(){
    return(
      <div>
        <div><h3>{this.state.welcomeMessage}, {this.props.who}</h3></div>
        <div><button onClick={this.changeMessageHandler}>Change welcome message</button></div>
      </div>
    )
  }
}

export default Welcome;