import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Settings from './Settings';
import Masternodes from './Masternodes';
import Pricetag from './Pricetag';
import Overview from './Overview';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import logo from './images/phore.png';
import './styles/styles.css';

class App extends Component {
  componentDidMount() {
    // TODO: Convert this init code to components
    // var href = '#overview'
    // var savedTheme = localStorage['phoreWalletTheme']

    // $(function () {
    //   localStorage['firstTime'] = true
    //   theme(savedTheme)
    //   if (localStorage['phoreWalletLocalization'] == undefined) {
    //     localStorage['phoreWalletLocalization'] = 'USD - United States Dollar'
    //   } else {
    //     $('.select').text(localStorage['phoreWalletLocalization'])
    //   }

    //   $('.theme button').click(function () {
    //     $('.theme button').removeClass('current')
    //     $(this).addClass('current')
    //   })

    //   $(`.body:not(${href})`).hide()

    //   $('.nav').click(function () {
    //     if (href == $(this).attr('href')) {
    //       return
    //     } else {
    //       $('.nav').removeClass('nav-active')
    //       $(this).addClass('nav-active')
    //       href = $(this).attr('href')
    //       $('.body').fadeOut('fast')
    //       setTimeout(function () {
    //         $(href).fadeIn('fast')
    //       }, 100)
    //     }
    //   })

    //   $('.option').click(function () {
    //     var value = $(this).text()
    //     $('.select').text(value)
    //     $('.options').slideToggle('fast')
    //     localStorage['phoreWalletLocalization'] = value
    //   })

    //   $('.subbalances .balance').click(function () {
    //     if (!$(this).hasClass('active')) {
    //       $('.balance').removeClass('active')
    //       $(this).addClass('active')
    //       if ($(this).hasClass('phore')) {
    //         $('.info').removeClass('active')
    //         $('.infoPhore').addClass('active')
    //       } else {
    //         $('.info').removeClass('active')
    //         $('.infoZero').addClass('active')
    //       }
    //     }
    //   })

    //   $('.customSelect .select').click(function () {
    //     $('.options').slideToggle('fast')
    //   })

    //   $('.transaction').click(function () {
    //     if ($(this).hasClass('open')) {
    //       $('.transaction').removeClass('open')
    //       let href = $(this).attr('href')
    //       $('#' + href).hide()
    //     } else {
    //       $('.transaction').removeClass('open')
    //       $(this).addClass('open')
    //       $('.transaction-info-ext').hide()
    //       let href = $(this).attr('href')
    //       $('#' + href).slideDown('250ms')
    //     }
    //   })

    //   $(".balance.total").css("height", $(".nav").height()); // Resize once on launch
    //   $(".transaction-cont").css("max-height", $("body").height() - 50);
    //   $(window).resize(function () { // Resize on change size
    //     $(".balance.total").css("height", $(".nav").height());
    //     $(".transaction-cont").css("max-height", $("body").height() - 50);
    //   })

    //   $('input').blur(function () {
    //     // check if the input has any value (if we've typed into it)
    //     if ($(this).val())
    //       $(this).addClass('used');
    //     else
    //       $(this).removeClass('used');
    //   });

    //   $('.closeSend').on('click', function () {
    //     $('.send').removeClass('active')
    //     $('.sendPop').hide()
    //   })

    //   $('.s-and-r button').on('click', function () {
    //     if ($(this).hasClass('send')) {
    //       $('.receive').removeClass('active')
    //       $(this).addClass('active')
    //       $('.receivePop').hide()
    //       $('.sendPop').fadeIn('fast')
    //     }
    //     else if ($(this).hasClass('receive')) {
    //       $('.send').removeClass('active')
    //       $(this).addClass('active')
    //       $('.sendPop').hide()
    //       $('.receivePop').fadeIn('fast')
    //     }
    //   })

    //   $('.received').on('click', function () {
    //     var text = prompt("Label sender as: ")
    //     $(this).find(".address").text("From: *" + text)
    //   })

    //   $('.sendPop').hide()
    //   //}
    // })

    // function theme(theme) {
    //   if (theme == "light") {
    //     $('html').css('color', '#000')
    //     $('html').css('background-color', '#fff')
    //     $('.theme button').removeClass('current')
    //     $('.light').addClass('current')
    //     $('.theme button').removeClass('darkB')
    //     $('.theme button').addClass('lightB')
    //     $('html').css('--light-gray-color', 'rgba(0,0,0,0.8)')
    //     $('.body').addClass('lightMode')
    //     localStorage['phoreWalletTheme'] = "light"
    //   }
    //   else if (theme == "dark") {
    //     $('html').css('color', '#fff')
    //     $('html').css('background-color', '#3c3f47')
    //     $('.theme button').removeClass('current')
    //     $('.dark').addClass('current')
    //     $('.theme button').removeClass('lightB')
    //     $('.theme button').addClass('darkB')
    //     $('html').css('--light-gray-color', 'rgba(255,255,255,0.8)')
    //     $('.body').removeClass('lightMode')
    //     localStorage['phoreWalletTheme'] = "dark"
    //   }
    //   else {
    //     localStorage['phoreWalletTheme'] = "dark"
    //   }
    // }

    // function staking(val) {
    //   if (val == '1') {
    //     $('.staking button').removeClass('activeStake')
    //     $('.onStake').addClass('activeStake')
    //   }
    //   else if (val == '0') {
    //     $('.staking button').removeClass('activeStake')
    //     $('.offStake').addClass('activeStake')
    //   }
    // }

  }
  render() {

    return (
      <BrowserRouter>
        <div>
          <meta charSet="UTF-8" />
          <title id="title">Phore Wallet</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald:300,500" rel="stylesheet" />
          <div className="navigation">
            <ul>
              <li id="phore"><img src={logo} width="70px" /></li>
              <Link to="/overview"><li href="#overview" className="nav nav-active"><i className="fa fa-home" aria-hidden="true" /><p>Overview</p></li></Link>
              <Link to="/pricetag"><li href="#pricetag" className="nav"><i className="fa fa-tag" aria-hidden="true" /><p>Pricetag</p></li></Link>
              <li href="#exchanges" className="nav"><i className="fa fa-exchange" aria-hidden="true" /><p>Exchanges</p></li> {/* <img src='images/pricetag.png' width='45px'/> */}
              <li href="#privacy" className="nav"><i className="fa fa-eye-slash" aria-hidden="true" /><p>Privacy</p></li>
              <Link to="/masternodes"><li href="#masternodes" className="nav"><i className="fa fa-server" aria-hidden="true" /><p>Masternodes</p></li></Link>
              <Link to="/settings"><li href="#settings" className="nav"><i className="fa fa-cog" aria-hidden="true" /><p>Settings</p></li></Link>
            </ul>
          </div>
          <Route path="/overview" component={Overview} />
          <Route path="/settings" component={Settings} />
          <Route path="/masternodes" component={Masternodes} />
          <Route path="/pricetag" component={Pricetag} />
          <div className="footer">
            <div className="syncing">
              <div className="progress-bar-main">
                <div className="progress-bar" />
              </div>
              Synchronizing
          </div>
            <div className="network-status">
              <span>PHR </span><i className="phore"><img src="images/phore.png" height="14px" /></i><i className="fa fa-rss" aria-hidden="true" /><i className="fa fa-check network" aria-hidden="true" />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
