import React, { Component } from 'react';

export default class Settings extends Component {
  render() {
    return <div className="body" id="settings">
      <div className="body-heading">
        Settings
          </div>
      <div className="body-content settings">
        <div className="setting theme">
          <h2>Theme <button className="light darkB" onclick="theme('light')">Light</button> <button className="dark darkB current" onclick="theme('dark')">Dark</button></h2>
          <div className="content">
            <p>Change the general look of the Phore Wallet.</p>
          </div>
        </div>
        <div className="setting localization">
          <h2>Localization</h2>
          <div className="content">
            <p>Select the curency unit to display fiat values.</p>
            {/* <select>
              <option value="EUR">EUR - Euro</option>
              <option value="NZD">NZD - New Zealand Dollar</option>
              <option value="USD" selected>USD - United States Dollar</option>
            </select> */}
            <div className="customSelect">
              <div className="select">USD - United States Dollar</div>
              <div className="options">
                <div className="option">EUR - Euro</div>
                <div className="option">NZD - New Zealand Dollar</div>
                <div className="option">USD - United States Dollar</div>
              </div>
            </div>
          </div>
        </div>
        <div className="setting staking">
          <h2>Staking <button className="onStake" onclick="staking('1')">On</button> <button className="offStake activeStake" onclick="staking('0')">off</button></h2>
          <div className="content">
            <p>Enable or Disable Staking</p>
          </div>
        </div>
      </div>
    </div>
  }
}