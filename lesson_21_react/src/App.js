import React from 'react'
import testlar from './testlar'
import Score from './Score'
import Javob from './Javob'
import Savol from './Savol'

class App extends React.Component {

  state = {
    testlar: testlar,
    score: 0,
  }

  handleClick = (variant, index) => {
    if(this.state.testlar[index].javob === variant) {
      this.setState({score: this.state.score + 1})
    }
  }

  render() {
    return (
      <>
        {
          this.state.testlar.map((test, i) => (
            <Savol key={i} savol={test.savol}>
              {test.variantlar.map(variant => (
                <Javob
                  key={variant}
                  onClick={() => this.handleClick(variant, i)}
                >
                  {variant}
                </Javob>
              ))}
            </Savol>
          ))
        }
        <Score>{this.state.score}</Score>
      </>
    )
  }
}

export default App
