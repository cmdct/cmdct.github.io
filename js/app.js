const

// - - - - - - - - TAG by Commanders Act, START - - - - - - - -

tag = {
  page: (templates, page) => {
    tc_vars.env_template = templates;
    tc_vars.page_name = page;
    if (tC) tC.event.virtualPageView(this, {})
  },
  click: (category, label) => {
    if (tC) tC.event.buttonClick(this, {
      'eventAction': 'Button Click',
      'eventCategory': category,
      'eventLabel': label
    })
  },
  run: () => {
    window.gtag = window.gtag || undefined;
    window.tC = window.tC || undefined;
    window.tc_closePrivacyButton = function(callbackValue) {
      if (callbackValue === 'button_A') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        const maximumIteration = 12
            , timeInMilliseconds = 250
            , checkScriptLoadInteration = 0
            , checkScriptLoad = setInterval(() => {
                if (window.gtag) {
                  clearInterval(checkScriptLoad);
                  tC.event.virtualPageView(this, {})
                } else if (checkScriptLoadInterval >= maximumIteration) {
                  clearInterval(checkScriptLoad)
                } else {
                  checkScriptLoadInteration++
                }
              }, timeInMilliseconds)
            ;
      }
    }
    window.tc_closePrivacyCenter = function(callbackValue) {
      if (callbackValue === 'save') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        const maximumIteration = 12
            , timeInMilliseconds = 250
            , checkScriptLoadInteration = 0
            , checkScriptLoad = setInterval(() => {
                if (window.gtag) {
                  clearInterval(checkScriptLoad);
                  tC.event.virtualPageView(this, {})
                } else if (checkScriptLoadInterval >= maximumIteration) {
                  clearInterval(checkScriptLoad)
                } else {
                  checkScriptLoadInteration++
                }
              }, timeInMilliseconds)
            , checkPrivacyBannerIteration = 0
            , checkPrivacyBanner = setInterval(() => {
                const banner = document.querySelector('#footer_tc_privacy');
                if (banner) {
                  clearInterval(checkPrivacyBanner);
                  banner.remove()
                } else if (checkPrivacyBannerIteration >= maximumIteration) {
                  clearInterval(checkPrivacyBanner)
                } else {
                  checkPrivacyBannerIteration++
                }
              }, timeInMilliseconds)
            ;
      }
    }
  }
},

// - - - - - - - - TAG by Commanders Act, END - - - - - - - -

app = {
  route: () => {
    const hash = location.hash.replace('#', '');
    switch (hash) {
      case '':
      case 'home': app.ui(
          templates.home,
          tag.page('home', content.home.main.head)
        );
        break;
      case 'doc': app.ui(
          templates.doc,
          tag.page('products', content.doc.head)
        );
        break;
      default: app.ui(
          templates.default,
          tag.page('404', 'Not Found')
        )
    }
  },
  ui: (html, callback) => {
    document.querySelector('#container').innerHTML = html;
    if (callback) callback()
  },
  run: () => {
    app.route();
    window.onhashchange = app.route
  }
};

app.run()
