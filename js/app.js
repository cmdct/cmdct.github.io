
// TODO:
// - Add a link to Privacy Center
// - Add flash message when user consent is saved successfully
// - Improve nav burger for mobile
// - Add a copy paste feature (multiple text possible)

const app = {
  data: false,
  route: () => {
    switch (location.hash.replace('#', '')) {
      case '':
      case 'home':
        app.ui(templates.dynamic.home(), 'Home', content.home.name);
        break;
      case 'documentation':
        app.ui(templates.doc, 'Documentation', content.doc.name);
        break;
      case 'about':
        app.ui(templates.about, 'About', content.about.main.name);
        break;
      default:
        app.ui(templates.default, '404', 'Not Found')
    }
  },
  ui: (html, template, title) => {
    document.title = title;
    document.querySelector('#container').innerHTML = html;
    window.scrollTo(0, 0);
    if (app.data) ux.pageView(template, title)
  },
  init: () => {
    app.route();
    window.onhashchange = app.route;
    document.querySelector('header h1').innerHTML = content.site.name;
    templates.dynamic.nav();
    templates.dynamic.footer();
    if (app.data) ux.init()
  }
};

app.init()
