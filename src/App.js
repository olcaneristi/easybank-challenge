import React from "react"
import "./components/assets/App.css"
import Header from "./components/header"
import Home from "./components/home"
import Info from "./components/info"
import Article from "./components/article"
import Footer from "./components/footer"

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Info />
      <Article />
      <Footer />
    </div>
  )
}

export default App
