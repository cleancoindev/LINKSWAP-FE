export function defaultTheme() {
  const mainBlue = '#295BDB'
  const mainBlueHover = '#295BDB'
  const mainBG = '#2b3a4a'
  const appBG = '#232a35'
  const white = '#FFF'
  const black = '#000'
  const transparent = 'transparent'
  const buttonBG = '#40444f'
  const buttonBGHover = '#60656d'
  const buttonSecondaryBG = '#212328'

  return {
    //App
    appBG: '#2b3a4a no-repeat 0 10vh url("../images/themes/default/bg.svg")',

    //Buttons
    buttonBG: transparent,
    buttonTextColor: white,
    buttonBGHover: mainBlueHover,
    buttonTextColorHover: white,
    buttonBGActive: mainBlue,
    buttonTextColorActive: white,
    buttonBGActiveHover: mainBlue,
    buttonTextColorActiveHover: white,
    buttonBGDisabled: buttonBG,
    buttonTextColorDisabled: white,
    buttonNavigationBG: buttonBG,
    buttonNavigationTextColor: '#c3c5cb',
    buttonNavigationBGHover: '#212328',
    buttonNavigationTextColorHover: '#c3c5cb',
    buttonSelectBG: buttonSecondaryBG,
    buttonSelectTextColor: white,
    buttonSelectBGHover: buttonBGHover,
    buttonSelectTextColorHover: white,
    buttonSelectBGActive: mainBlue,
    buttonSelectTextColorActive: white,
    buttonSelectBGActiveHover: mainBlue,
    buttonSelectTextColorActiveHover: white,

    //Footer
    footerBG: mainBG,
    footerTextColor: white,

    //Global
    bodyBG: mainBG,
    linkColor: mainBlue,
    linkColorHover: mainBlue,

    //Header
    headerBG: transparent,
    headerTextColor: white,
    headerButtonBG: buttonBG,
    headerButtonBGHover: buttonBGHover,
    headerButtonIconColor: white,

    //Modal
    modalBg: '',
    modalShadow: '',

    //Navigation
    navigationBG: appBG,
    navigationTabBG: transparent,
    navigationTabIconColor: white,
    navigationTabBGHover: transparent,
    navigationTabIconColorHover: white,
    navigationTabBGActive: mainBlue,
    navigationTabIconColorActive: white,

    //Text
    textHighlight: '',

    white: '#FFFFFF',
    black: '#000000',

    text1: '#FFFFFF',
    text2: '#C3C5CB',
    text3: '#6C7284',
    text4: '#565A69',

    bg1: '#222A35',
    bg2: '#2C2F36',
    bg3: '#40444F',
    bg4: '#5F656D',
    bg5: '#6C7284',
    bg6: '#373F49',
    bg7: '#295BDB',

    bodyBg: '#2b3a4a no-repeat 0 10vh url("https://yflink.io/YFL-BG-pattern-left.svg")',
    bodyBgColor: '#2b3a4a',

    modalBG: 'ba(0,0,0,.425)',
    advancedBG: 'ba(0,0,0,0.1)',

    primary1: '#295BDB',
    primary2: '#2251c9',
    primary3: '#4D8FEA',
    primary4: '#376bad70',
    primary5: '#202F46',

    primaryText1: '#87A9FF',

    secondary1: '#295BDB',
    secondary2: '#17000b26',
    secondary3: '#17000b26',

    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E'
  }
}
