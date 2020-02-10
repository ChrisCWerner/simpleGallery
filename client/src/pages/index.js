import React from "react"
import Header from "components/header"
import Gallery from "components/gallery"

export default class Home extends React.Component {
  render = () => (
    <div>
      <Header />
      <Gallery />
    </div>
  )
}
