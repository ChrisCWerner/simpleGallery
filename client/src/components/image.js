import React from "react"
import "assets/style/image.css"

export default class Image extends React.Component {
  render() {
    const { src, alt, text, size, ...props } = this.props
    const sizeCard = size ? "my-card-" + size : ""
    const sizeArea = size ? size + "-area" : ""
    const sizeImage = size ? size + "-image" : ""
    return (
      <div className={`my-card ${sizeCard}`}>
        <div className={`image-area ${sizeArea}`}>
          <img className={`image ${sizeImage}`} src={src} alt={alt} {...props} />
        </div>
        <span className="subtext">{text || "Lorem Ipsum"}</span>
      </div>
    )
  }
}
