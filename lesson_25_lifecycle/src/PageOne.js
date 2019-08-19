import React from 'react'
import { observer } from 'mobx-react'

import store from './store'

const PageOne = observer(() => (
  <div style={{backgroundColor: 'pink'}}>
    <p>Counter: {store.count}</p>
    <p>Page 1</p>
  </div>
))

export default PageOne