import React from "react"
import "assets/style/image.css"

export default class Image extends React.Component {
  render() {
    const { src, alt, text, ...props } = this.props
    return (
      <div className="my-card">
        <div className="image-area">
          <img className="image" src={src} alt={alt} {...props} />
        </div>
        <span className="subtext">{text || "Lorem Ipsum"}</span>
      </div>
    )
  }
}
