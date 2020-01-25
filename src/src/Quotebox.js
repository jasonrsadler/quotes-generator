import React, { Component } from "react";
import quotes from './quotes/quotes'
import css from './css/Quotebox.css'

class Quotebox extends Component {
  constructor(props) {
    super(props)
    const index = Math.floor(Math.random() * Math.floor(quotes.length))
    this.state = {
      randomQuote: quotes[index].quote,
      author: quotes[index].author
    }
  }

  getNewQuote = () => {
    const index = Math.floor(Math.random() * Math.floor(quotes.length))
    this.setState({
      randomQuote: quotes[index].quote,
      author: quotes[index].author
    })
  }

  render() {
    return (
      <div id="quote-box">
        <span id="author">
          Author: {this.state.author}
        </span>
        <div id="text">
          Quotebox: {this.state.randomQuote}
        <a href={`${'https://twitter.com/intent/tweet?' + this.state.randomQuote}`} id="tweet-quote">
          Reteet
        </a>
        </div>
        <div>
          <button id="new-quote" onClick={this.getNewQuote}>Get New</button>
        </div>
      </div>
    )
  }
}

export default Quotebox