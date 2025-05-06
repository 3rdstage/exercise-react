import React from 'react';


// https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
class Clock extends React.Component<any, {date: Date}>{

  constructor(props: any){
    super(props);

    this.state = {
      date: new Date()
    }
  }

  setTime(){
    this.setState((state, props) => {
      console.log(state.date);
      return {
        date: new Date()
      }
    })
  }

  override componentDidMount(): void{
    // @ts-ignore
    this.setTimeRef= setInterval(() => this.setTime(), 1000)
  }

  override componentWillUnmount(): void {
    // @ts-ignore
    clearInterval(this.setTimeRef)
  }

  override render(){
    return (
      <div>
        <p>Current time is {this.state.date.toLocaleString()}</p>
      </div>
    )
  }
}

export default Clock;