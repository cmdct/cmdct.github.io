const

// - - - - - - - - TAG by Commanders Act, START - - - - - - - -

tag = {
  page: (template, page) => {
    tc_vars.env_template = template;
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
  init: () => {
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

route = {
  check: () => {
    const hash = location.hash.replace('#', '');
    switch (hash) {
      case '':
      case 'home': ui.container(
          template.home,
          tag.page('home', content.home.main.head)
        );
        break;
      case 'doc': ui.container(
          template.doc,
          tag.page('products', content.doc.head)
        );
        break;
      default: ui.container(
          template.default,
          tag.page('404', 'Not Found')
        )
    }
  },
  init: () => {
    route.check();
    window.onhashchange = route.check
  }
},

ui = {
  container: (html, callback) => {
    document.querySelector('#container').innerHTML = html;
    if (callback) callback()
  }
},

content = {
  home: {
    main: {
      head: 'Customer Solutions Engineer',
      body: 'Please note that this website is intended only to practice the implementation of the various Commanders Act products and is not an official showcase. The code of this website is also not related to Commanders Act technologies but simply to a personal web development project.'
    },
    video: 'https://www.youtube.com/embed/6S9Es0UhzQg',
    cta: {
      text: 'Documentation',
      href: '#doc'
    }
  },
  doc: {
    head: 'Documentation',
    a: {
      text: 'Platform',
      link: 'https://community.commandersact.com/platform'
    },
    b: {
      text: 'TAG',
      link: 'https://community.commandersact.com/tagcommander'
    },
    c: {
      text: 'TRUST',
      link: 'https://community.commandersact.com/trustcommander'
    },
    d: {
      text: 'MIX',
      link: 'https://community.commandersact.com/mixcommander'
    },
    e: {
      text: 'DATA',
      link: 'https://community.commandersact.com/datacommander'
    },
    f: {
      text: 'FUSE',
      link: '#fuse'
    },
    cta: {
      text: 'Internal',
      href: 'https://tagcommander.atlassian.net/wiki/spaces/CAH/overview?mode=global'
    }
  }
},

template = {
  home: `
    <section class="sect-b">
      <h2 class="title-p">${content.home.main.head}</h2>
      <div class="text txt-2">
        <p>${content.home.main.body}</p>
      </div>
      <div class="intersection"></div>
      <iframe class="tub" src="${content.home.video}" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
      <div class="intersection"></div>
      <a class="btn-w btn-p btn btn-o" href="${content.home.cta.href}" onclick="tag.click(\'Internal Nav', content.home.cta.text)">
        ${content.home.cta.text}
      </a>
    </section>
  `,
  doc: `
    <section class="sect-b">
      <h2>${content.doc.head}</h2>
      <div class="intersection"></div>
      <div id="balls">
        <div class="ball-l">
          <a target="_blank" href="${content.doc.a.link}" onclick="tag.click(\'Outbound link', content.doc.a.text)">
            <span class="ball">${content.doc.a.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.b.link}" onclick="tag.click(\'Outbound link', content.doc.b.text)">
            <span class="ball">${content.doc.b.text}</span>
          </a>
          <a target="_blank" href="${content.doc.c.link}" onclick="tag.click(\'Outbound link', content.doc.c.text)">
            <span class="ball">${content.doc.c.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.d.link}" onclick="tag.click(\'Outbound link', content.doc.d.text)">
            <span class="ball">${content.doc.d.text}</span>
          </a>
          <a target="_blank" href="${content.doc.e.link}" onclick="tag.click(\'Outbound link', content.doc.e.text)">
            <span class="ball">${content.doc.e.text}</span>
          </a>
          <a target="_blank" href="${content.doc.f.link}" onclick="tag.click(\'Outbound link', content.doc.f.text)">
            <span class="ball">${content.doc.f.text}</span>
          </a>
        </div>
      </div>
      <div class="intersection"></div>
      <a target="_blank" href="${content.doc.cta.href}" class="btn-w btn-p btn btn-x" onclick="tag.click(\'Outbound link', content.doc.cta.text)">${content.doc.cta.text}</a>
    </section>
  `,
  default: `
    <section class="sect-c">
      <h2>This page does not exist</h2>
    </section>
  `
};

tag.init();
route.init()
