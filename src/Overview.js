import React, { Component } from 'react';
import logo from './logo.svg';
import TransactionsList from './TransactionsList';
import Settings from './Settings';
import Masternodes from './Masternodes';
import Pricetag from './Pricetag';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import './styles/styles.css';

export default class Overview extends Component {
  render() {
    return <div className="body" id="overview">
      <div className="two-column">
        <div className="body-heading">
          Overview
            </div>
        <div className="column leftColumn">
          <div className="balance total">
            <p>Total Balance </p>
            <p className="totalValue">143168.4823<span>PHR</span></p>
            <p className="unconfirmedValue">61334.122 Unconfirmed</p>
          </div>
          <div className="s-and-r active">
            <button className="movePhore send "><i className="fa fa-arrow-circle-up" aria-hidden="true" /> Send</button>
            <button className="movePhore receive"><i className="fa fa-arrow-circle-down" aria-hidden="true" /> Receive</button>
          </div>
          <div className="balances">
            <div className="subbalances">
            </div>
            <div className="sendPop">
              <div className="closeSend">x</div>
              <form>
                <div className="group addressGroup">
                  <input type="text" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label><span className="required">*</span>Address</label>
                </div>
                <div className="group">
                  <input type="text" />
                  <span className="highlight" />
                  <span className="bar" />
                  <label>Label</label>
                </div>
                <div className="group">
                  <input type="number" required />
                  <span className="highlight" />
                  <span className="bar" />
                  <label><span className="required">*</span>Amount</label>
                </div>
              </form>
              <div className="transactionFee">
                <p>Transaction Fee: 0.00010001 PHR/kB</p>
                <button className="change">Change</button>
              </div>
              <div className="final">
                <button className="send">Send</button>
                <button>Reset</button>
              </div>
            </div>
            <div className="receivePop">
            </div>
          </div>

        </div>
        <TransactionsList />
      </div>
    </div>
  }
}