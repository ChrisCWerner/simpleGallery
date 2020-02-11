import React from "react"
import Header from "components/header"
import Gallery from "components/gallery"
import Footer from "components/footer"

export default class Home extends React.Component {
  render = () => (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  )
}
