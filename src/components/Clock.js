import React from 'react'


export default class CLock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date:new Date() }
    }

    tick = () =>{
        this.setState({date: new Date() })
    }

    componentDidMount()  {
        this.timerID =setInterval(() =>{
        this.tick()
    }, 1000);
    }
    
    componentWillUnmount () {
        clearInterval(this.timerID)
    }

    render(){
      return(
        <div>
            <h5><i>Welcome !The time now is: {this.state.date.toLocaleTimeString()}</i></h5>
        </div>
    )
  }

}