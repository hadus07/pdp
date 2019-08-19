import React from 'react';

class Misol extends React.Component {

  componentWillUnmount() {
    console.log('unmount')
  }

  render() {
    return <p>Misol</p>
  }
}

class Lifecycle extends React.Component {

  state = {
    count: 0,
  }

  componentDidMount() {
    console.log('paydo boldi')
  }

  componentDidUpdate() {
    console.log('update')
  }

  

  handleClick = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div>
        {this.state.count}
        <br/>
        <button onClick={this.handleClick}>Increase</button>
        <br/>
        {this.state.count < 5 && <Misol />}
      </div>
    );
  }
}

export default Lifecycle;
