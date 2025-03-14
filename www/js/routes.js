var routes = [
  { path: '/', name: "page-home", componentUrl: 'pages/home.html' },
  { path: '/profil/', componentUrl: 'pages/profil.html' },
  { path: '/atur/', componentUrl: 'pages/setting.html' },
  { path: '(.*)', url: './pages/404.html' }
];
