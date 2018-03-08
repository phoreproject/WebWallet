var href = '#overview'
var savedTheme = localStorage['phoreWalletTheme']

$(function(){
  localStorage['firstTime'] = true
  theme(savedTheme)
  if (localStorage['phoreWalletLocalization'] == undefined) {
    localStorage['phoreWalletLocalization'] = 'USD - United States Dollar'
  } else {
    $('.select').text(localStorage['phoreWalletLocalization'])
  }

  $('.theme button').click(function(){
    $('.theme button').removeClass('current')
    $(this).addClass('current')
  })

  $(`.body:not(${href})`).hide()

  $('.nav').click(function(){
    if (href == $(this).attr('href')) {
      return
    } else {
      $('.nav').removeClass('nav-active')
      $(this).addClass('nav-active')
      href=$(this).attr('href')
      $('.body').fadeOut('fast')
      setTimeout(function(){
        $(href).fadeIn('fast')
      },100)
    }
  })

  $('.option').click(function(){
    var value = $(this).text()
    $('.select').text(value)
    $('.options').slideToggle('fast')
    localStorage['phoreWalletLocalization'] = value
  })

  $('.subbalances .balance').click(function(){
    if (!$(this).hasClass('active')) {
      $('.balance').removeClass('active')
      $(this).addClass('active')
      if ($(this).hasClass('phore')) {
        $('.info').removeClass('active')
        $('.infoPhore').addClass('active')
      } else {
        $('.info').removeClass('active')
        $('.infoZero').addClass('active')
      }
    }
  })

  $('.customSelect .select').click(function(){
    $('.options').slideToggle('fast')
  })

  $('.transaction').click(function(){
    if ($(this).hasClass('open')) {
      $('.transaction').removeClass('open')
      let href = $(this).attr('href')
      $('#'+href).hide()
    } else {
      $('.transaction').removeClass('open')
      $(this).addClass('open')
      $('.transaction-info-ext').hide()
      let href = $(this).attr('href')
      $('#'+href).slideDown('250ms')
    }
  })

  $(".balance.total").css("height", $(".nav").height()); // Resize once on launch
  $(".transaction-cont").css("max-height", $("body").height()-50);
  $(window).resize(function() { // Resize on change size
    $(".balance.total").css("height", $(".nav").height());
    $(".transaction-cont").css("max-height", $("body").height()-50);
  })

  $('input').blur(function() {
    // check if the input has any value (if we've typed into it)
    if ($(this).val())
      $(this).addClass('used');
    else
      $(this).removeClass('used');
  });

  $('.closeSend').on('click', function() {
    $('.send').removeClass('active')
    $('.sendPop').hide()
  })

  $('.s-and-r button').on('click', function() {
    if ($(this).hasClass('send')) {
      $('.receive').removeClass('active')
      $(this).addClass('active')
      $('.receivePop').hide()
      $('.sendPop').fadeIn('fast')
    }
    else if ($(this).hasClass('receive')) {
      $('.send').removeClass('active')
      $(this).addClass('active')
      $('.sendPop').hide()
      $('.receivePop').fadeIn('fast')
    }
  })

  $('.received').on('click', function() {
    var text = prompt("Label sender as: ")
    $(this).find(".address").text("From: *" + text)
  })

  //if (localStorage['firstTime'] == true) {

  //} else {
  $('.sendPop').hide()
  $('.overlay').fadeOut('fast')
  //}

})

function theme(theme) {
  if (theme == "light") {
    $('html').css('color','#000')
    $('html').css('background-color','#fff')
    $('.theme button').removeClass('current')
    $('.light').addClass('current')
    $('.theme button').removeClass('darkB')
    $('.theme button').addClass('lightB')
    $('html').css('--light-gray-color','rgba(0,0,0,0.8)')
    $('.body').addClass('lightMode')
    localStorage['phoreWalletTheme'] = "light"
  }
  else if (theme == "dark") {
    $('html').css('color','#fff')
    $('html').css('background-color','#3c3f47')
    $('.theme button').removeClass('current')
    $('.dark').addClass('current')
    $('.theme button').removeClass('lightB')
    $('.theme button').addClass('darkB')
    $('html').css('--light-gray-color','rgba(255,255,255,0.8)')
    $('.body').removeClass('lightMode')
    localStorage['phoreWalletTheme'] = "dark"
  }
  else {
    localStorage['phoreWalletTheme'] = "dark"
  }
}

function staking(val) {
  if (val == '1') {
    $('.staking button').removeClass('activeStake')
    $('.onStake').addClass('activeStake')
  }
  else if (val == '0') {
    $('.staking button').removeClass('activeStake')
    $('.offStake').addClass('activeStake')
  }
}
