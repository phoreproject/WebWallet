import React, { Component } from 'react';

export default class Pricetag extends Component {
  render() {
    return <div className="body" id="pricetag">
      <div className="body-heading">
        Pricetag
          </div>
      <div className="body-content prices">
        <div className="row">
          <div className="column">USD<span className="price-value" id="USD">$4,70</span></div>
          <div className="column">EUR<span className="price-value" id="EUR">€3,90</span></div>
          <div className="column">AUD<span className="price-value" id="AUD">A$5,98</span></div>
          <div className="column">CAD<span className="price-value" id="CAD">C$5,83</span></div>
        </div>
        <div className="row">
          <div className="column">GBP<span className="price-value" id="GBP">£3,46</span></div>
          <div className="column">HKD<span className="price-value" id="HKD">H$36,74</span></div>
          <div className="column">CNY<span className="price-value" id="CNY">¥30,49</span></div>
          <div className="column">NZD<span className="price-value" id="NZD">N$6,55</span></div>
        </div>
        {/* 190px for 3 rows */}
      </div>
    </div>
  }

}