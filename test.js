import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import Loader from './index'

class Test extends PureComponent {
  render () {
    return (
      <Loader loader='Загрузка...' media='https://www.google.ru/images/branding/googleg/1x/googleg_standard_color_128dp.png'>
        <h2>Загружено!</h2>
      </Loader>
    )
  }
}

ReactDOM.render(<Test/>, document.getElementById('root'))
