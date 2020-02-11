import React from "react"
import "assets/style/footer.css"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <a className="item" href="https://github.com/ChrisCWerner/simpleGallery">
          <img src={require("assets/images/GH/GitHub-Mark-32px.png")} alt="GitHub" />
        </a>
        <div className="spacer" />
        <span className="item made-by">Made by Christian W.</span>
      </footer>
    )
  }
}
