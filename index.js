import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Loader extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  componentWillMount () {
    this.onLoadImages()
  }

  // Загрузка изображения
  onLoadImages () {
    let img = new Image()
    img.src = this.props.url
    img.onload = () => {
      this.setState({visible: true})

      // Успешно загружено
      if (typeof this.props.onSuccess === 'function') {
        this.props.onSuccess()
      }
    }
  }

  close () {
    this.setState({visible: false})
  }

  render () {
    // Отображаем Loader
    if (!this.props.close) {
      return this.props.loader
    }
    // Если контент загружен, отображаем дочерние элементы
    return this.props.children
  }
}

Loader.propTypes = {
  loader: PropTypes.node.isRequired,
  url: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
}

Loader.defaultProps = {
  loader: 'Загрузка...',
  contents: 'https://facebook.github.io/react/img/logo_og.png'
}
