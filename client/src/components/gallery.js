import React from "react"
import Image from "./image"
import Slider from "./slider"
import "assets/style/gallery.css"

export default class Gallery extends React.Component {
  state = {
    images: [
      {
        src: "https://pbs.twimg.com/profile_images/949787136030539782/LnRrYf6e.jpg",
        alt: "image",
        text: "lorem ipsum"
      },
      {
        src: "https://www.atomix.com.au/media/2017/07/StockPhotoBanner.jpg",
        alt: "image",
        text: "lorem ipsum"
      },
      {
        src: "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F550533%2Frocket-man.jpg&w=700&op=resize",
        alt: "image",
        text: "lorem ipsum"
      },
      {
        src: "https://g.foolcdn.com/image/?url=https%3A%2F%2Fg.foolcdn.com%2Feditorial%2Fimages%2F479691%2Fconfused.jpg&w=700&op=resize",
        alt: "image",
        text: "lorem ipsum"
      },
      {
        src: "https://cdn.lolwot.com/wp-content/uploads/2015/06/18-hilarious-and-bizarre-stock-photos-1.jpg",
        alt: "image",
        text: "lorem ipsum"
      },
      {
        src: "https://www.demilked.com/magazine/wp-content/uploads/2018/03/5aaa1cba74cb3-funny-weird-wtf-stock-photos-24-5a392d5d9bda7__700.jpg",
        alt: "image",
        text: "lorem ipsum"
      }
    ],
    view: "grid",
    index: 0
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
