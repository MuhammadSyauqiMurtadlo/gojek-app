// Dom7
var $ = Dom7;

// Demo
const html = document.documentElement;
if (document.location.href.includes('safe-areas')){
  if (html) {
    html.style.setProperty('--f7-safe-area-top', '44px');
    html.style.setProperty('--f7-safe-area-bottom', '34px');
  }
}
html.style.setProperty('--f7-navbar-height', '85px');
if (document.location.href.includes('example-preview')) {
  $('.view-main').attr('data-browser-history', 'true');
  $('.view-main').attr('data-browser-history-root', '/kitchen-sink/core/');
  $('.view-main').attr('data-preload-previous-page', 'false');
  $('.view-main').attr('data-ios-swipe-back', 'false');
  document.documentElement.classList.add('example-preview');
}

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}
if (document.location.search.indexOf('mode=') >= 0) {
  const mode = document.location.search.split('mode=')[1].split('&')[0];
  if (mode === 'dark') document.documentElement.classList.add('dark');
}

// Init App
var app = new Framework7({
  el: '#app',
  theme,
  // store.js,
  store: store,
  // routes.js,
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
  
  navbar: {
    mdCenterTitle: true,
    hideOnPageScroll: true,
    showOnPageScrollTop: true,
    showOnPageScrollEnd: false
  },
});

let terjemahanhari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
let terjemahanbulan = ['','Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];

function sekarang() {
  let saatini = new Date();
  let hr = terjemahanhari[saatini.getDay()];
  let tgl = saatini.getDate() <= 9 ? `0${saatini.getDate()}` : saatini.getDate();
  let bl = terjemahanbulan[saatini.getMonth() + 1];
  let th = saatini.getFullYear();
  let jm = saatini.getHours() <= 9 ? `0${saatini.getHours()}` : saatini.getHours();
  let mn = saatini.getMinutes() <= 9 ? `0${saatini.getMinutes()}` : saatini.getMinutes();
  let dt = saatini.getSeconds() <= 9 ? `0${saatini.getSeconds()}` : saatini.getSeconds();
  return `${hr}, ${tgl} ${bl} ${th}<br>${jm}:${mn}:${dt}`;
}

