
// TODO:
// - Add https://open.spotify.com/
// - Find and add a Media Queries resource
// - Create and add a dedicated Google Analytics account
// - Add labels on hover on documentation bullets, based on fiche-de-poste.pdf
// - Add a link to Trust Privacy Center to authorize reopening
// - Add warning message when Trust Privacy is blocked on advanced privacy browser
// - Add flash message when user consent is saved successfully
// - Improve nav burger for mobile

const app = {
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
    ux.pageView(template, title)
  },
  init: () => {
    app.route();
    window.onhashchange = app.route;
    document.querySelector('header h1').innerHTML = content.site.name;
    templates.dynamic.nav();
    templates.dynamic.footer();
    ux.init()
  }
};

app.init()
