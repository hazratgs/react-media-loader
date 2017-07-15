import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class MediaLoader extends PureComponent {
  
  render () {

  }
}

MediaLoader.propTypes = {
  loader: PropTypes.node.isRequired,
  contents: PropTypes.array.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
}

MediaLoader.defaultProps = {
  loader: 'Загрузка...',
  contents: ['https://facebook.github.io/react/img/logo_og.png']
}
