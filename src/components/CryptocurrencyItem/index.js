// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {id, currencyLogo, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li key={id} className="crypto-values-container">
      <div className="currency-logo-name-section">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-values-section">
        <p className="currency-values">{usdValue}</p>
        <p className="currency-values">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
