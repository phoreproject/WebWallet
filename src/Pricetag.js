import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchPrices } from "./actions/index";

class Pricetag extends Component {
  constructor(props) {
    super(props)
  }
  async componentDidMount() {
    await this.props.fetchPrices()
    // console.log('prices', this.props.prices);
  }
  render() {
    return (
      <div className="body" id="pricetag">
        <div className="body-heading">
          Pricetag
          </div>
        <div className="body-content prices">
          <div className="row">
            <div className="column">USD<span className="price-value" id="USD">${this.props.prices.USD}</span></div>
            <div className="column">EUR<span className="price-value" id="EUR">€{this.props.prices.EUR}</span></div>
            <div className="column">AUD<span className="price-value" id="AUD">A${this.props.prices.AUD}</span></div>
            <div className="column">CAD<span className="price-value" id="CAD">C${this.props.prices.CAD}</span></div>
          </div>
          <div className="row">
            <div className="column">GBP<span className="price-value" id="GBP">£{this.props.prices.GBP}</span></div>
            <div className="column">HKD<span className="price-value" id="HKD">H${this.props.prices.HKD}</span></div>
            <div className="column">CNY<span className="price-value" id="CNY">¥{this.props.prices.CNY}</span></div>
            <div className="column">NZD<span className="price-value" id="NZD">N${this.props.prices.NZD}</span></div>
          </div>
          {/* 190px for 3 rows */}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ prices }) {
  return { prices }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPrices }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pricetag);