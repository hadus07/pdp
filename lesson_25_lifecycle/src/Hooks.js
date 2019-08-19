import React, { useState } from 'react'

const Hooks = () => {
  const [count, changeCount] = useState(0)
  const [isButtonVisible, changeVisibility] = useState(true)
  return (
      <>
        <button onClick={() => changeCount(count - 1)}>-</button>
        <span>{count}</span>
        {isButtonVisible && (
          <button
            onClick={() => {
              count > 4 && changeVisibility(false)
              changeCount(count + 1)
            }}
          >+</button>
        )}
      </>
    )

}

// class Hooks extends React.Component {

  // state = {
  //   count: 0,
  //   isButtonVisible: true,
  // }

//   render() {
//     return (
//       <>
//         <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
//       </>
//     )
//   }
// }

export default Hooks