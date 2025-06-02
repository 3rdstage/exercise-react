import React from 'react';


// https://www.tutorialspoint.com/reactjs/reactjs_component_life_cycle.htm
class Clock extends React.Component<any, {date: Date, count: number}>{

  static get MAX_COUNT(): number{
    return 100;
  }

  private setTimeRef: number = 0;

  constructor(props: any){
    super(props);

    this.state = {
      date: new Date(),
      count: 0
    }
  }

  setTime(){
    this.setState((state, props) => {
      let count : number = state.count + 1;

      if(count > Clock.MAX_COUNT){
        console.log(`The clock has reached maximum counts (${Clock.MAX_COUNT})`);
        // @tis-ignore
        clearInterval(this.setTimeRef);
        return state;
      }else{
        let date: Date = new Date();
        console.log(date + ` (updated ${count} times)`);

        return {
          date: date,
          count: count
        }
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