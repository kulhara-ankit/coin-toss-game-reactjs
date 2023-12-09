// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    image: headImage,
    headCount: 0,
    tailsCount: 0,
  }

  onCoinToss = () => {
    const {headCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadCount = headCount
    let newTailCount = tailsCount

    if (tossResult === 0) {
      tossImage = headImage
      newHeadCount += 1
    } else {
      tossImage = tailImage
      newTailCount += 1
    }

    this.setState({
      image: tossImage,
      headCount: newHeadCount,
      tailsCount: newTailCount,
    })
  }

  render() {
    const {image, headCount, tailsCount} = this.state
    const total = headCount + tailsCount

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) tails</p>
          <img className="image" src={image} alt="toss result" />
          <button type="button" className="button" onClick={this.onCoinToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-para">Total: {total}</p>
            <p className="count-para">Heads: {headCount}</p>
            <p className="count-para">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
