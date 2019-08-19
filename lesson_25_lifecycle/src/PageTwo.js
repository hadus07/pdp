import React from 'react'
import { observer } from 'mobx-react'

import store from './store'

const PageTwo = observer(() => (
  <div style={{backgroundColor: 'lightgreen'}}>
    <p>Counter: {store.count}</p>
    <p>Page 2</p>
  </div>
))

export default PageTwo