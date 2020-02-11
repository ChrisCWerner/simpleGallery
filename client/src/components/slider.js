import React from "react"
import Image from "./image"
import "assets/style/slider.css"

export default class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: props.images,
      index: props.index || 0
    }
  }

  jump = (index) => {
    this.setState({ index: index % this.state.images.length })
  }

  goLeft = () => {
    let index = this.state.index
    let size = this.state.images.length
    this.jump((!index ? size : index) - 1)
  }

  goRight = () => {
    this.jump(this.state.index + 1)
  }

  render() {
    let { images, index } = this.state
    let image = images[index]
    return (
      <div>
        <div className="buttons">
          <button className="button left" onClick={this.goLeft}>
            &lt;
          </button>
          <span className="index">{index}</span>
          <button className="button right" onClick={this.goRight}>
            &gt;
          </button>
        </div>
        <Image size="full" src={image.src} alt={image.alt} text={image.text} />
      </div>
    )
  }
}
