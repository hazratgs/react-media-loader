import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class MediaLoader extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      status: false
    }
  }

  componentDidMount () {
    this.onLoadImages()
  }

  // Загрузка изображения
  onLoadImages () {
    let img = new Image()
    img.src = this.props.media
    img.onload = () => {
      this.setState({status: true})
    }
  }

  // Загрузка видео
  onLoadVideo () {

  }

  render () {
    // Отображаем Loader
    if (!this.state.status) {
      return this.props.loader
    }
    // Если контент загружен, отображаем дочерние элементы
    return this.props.children
  }
}

MediaLoader.propTypes = {
  loader: PropTypes.node.isRequired,
  media: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func
}

MediaLoader.defaultProps = {
  loader: 'Загрузка...',
  contents: ['https://facebook.github.io/react/img/logo_og.png']
}
