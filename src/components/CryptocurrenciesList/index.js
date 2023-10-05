// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrencyList extends Component {
  state = {cryptocurrencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({cryptocurrencyList: modifiedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyList, isLoading} = this.state

    return (
      <div className="crypto-currency-list-bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="crypto-currency-title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-currency-image"
            />
            <ul className="crypto-currency-ulist">
              <li className="crypto-table-header">
                <p className="header-text">Coin Type</p>
                <div className="currency-section">
                  <p className="header-text">USD</p>
                  <p className="header-text">EURO</p>
                </div>
              </li>
              {cryptocurrencyList.map(eachData => (
                <CryptocurrencyItem
                  key={eachData.id}
                  currencyDetails={eachData}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrencyList
