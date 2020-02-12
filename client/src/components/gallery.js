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
      .then(images => this.setState({ images }))
  }

  loadMore = () => {
    api.image.getImages()
      .then(images => this.setState({
        images: this.state.images.concat(images)
      }))
  }

  View = () => {
    const view = this.state.view
    if (view === "grid")
      return (
        <div className="grid-view">
          {this.state.images.map((img, index) => {
            return <Image onClick={() => this.goToImage(index)} key={index} src={img.src} alt={img.alt} text={img.text} />
          })}
          <div style={{ flexBasis: "100%", height: 0 }} />
          <button onClick={this.loadMore} style={{ margin: "0 auto" }}>
            load more!
          </button>
        </div >
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
      <div style={{ textAlign: "end", marginBottom: 8 }}>
        <button onClick={() => this.changeView("grid")}>Grid view</button>
        <button onClick={() => this.changeView("slider")}>Slider view</button>
      </div>
      <this.View />
    </main>
  )
}
