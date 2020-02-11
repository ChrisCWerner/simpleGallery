import React from "react"
import Image from "./image"
import Slider from "./slider"
import "assets/style/gallery.css"
import api from "api"

export default class Gallery extends React.Component {
  state = {
    images: [],
    view: "grid",
    index: 0
  }

  componentDidMount() {
    api.image.getImages()
      .then(images => {
        console.log(images)
        return this.setState({ images })
      })
  }

  View = () => {
    const view = this.state.view
    if (view === "grid")
      return (
        <div className="grid-view">
          {this.state.images.map((img, index) => {
            return <Image onClick={() => this.goToImage(index)} key={index} src={img.src} alt={img.alt} text={img.text} />
          })}
        </div>
      )
    else return (
      <div>
        <Slider images={this.state.images} index={this.state.index} />
      </div>
    )
  }

  changeView(view) {
    this.setState({ view })
  }

  goToImage(index) {
    this.setState({
      view: "slider",
      index
    })
  }

  render = () => (
    <main className="my-gallery">
      <div style={{ textAlign: "end" }}>
        <button onClick={() => this.changeView("grid")}>Grid view</button>
        <button onClick={() => this.changeView("slider")}>Slider view</button>
      </div>
      <this.View />
    </main>
  )
}
