const templates = {
  site: {
    nav: {
      link: `
        <a href="__href__"
           class="btn-w btn-p"
           onclick="ux.clickEvent('Internal Nav', 'Nav Burger - __name__')"
        >__name__</a>
      `,
    },
    footer: {
      text: `
        <a class="foot-l"
           target="_blank"
           href="__href__"
           onclick="ux.clickEvent('Outbound link', 'Footer Text - __name__')"
        >__name__</a>
      `,
      icon: `
        <a target="_blank"
           href="__href__"
           onclick="ux.clickEvent('Outbound link', 'Footer Icon - __name__')">
           <img class="foot-i icon"
            src="__src__"
            alt="__name__"
           />
        </a>
      `,
    },
  },
  home: {
    main: `
      <section class="sect-c">
        <h2>${content.home.name}</h2>
        <div class="cards">
          __cards__
        </div>
      </section>
    `,
    card: `
      <div class="card">
        <div class="card-t">__head__</div>
        <div class="card-c">
          __links__
        </div>
      </div>
    `,
    link: `
      <a class="link" target="_blank" href="__href__"
          onclick="ux.clickEvent('Outbound link', __data__)"
       >__name__</a>
    `
  },
  doc: `
    <section class="sect-b">
      <h2>${content.doc.name}</h2>
      <div class="intersection"></div>
      <div id="balls">
        <div class="ball-l">
          <a target="_blank"
             href="${content.doc.a.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.a.name)"
          >
            <span class="ball">${content.doc.a.name}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank"
             href="${content.doc.b.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.b.name)"
          >
            <span class="ball">${content.doc.b.name}</span>
          </a>
          <a target="_blank"
             href="${content.doc.c.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.c.name)"
          >
            <span class="ball">${content.doc.c.name}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank"
             href="${content.doc.d.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.d.name)"
          >
            <span class="ball">${content.doc.d.name}</span>
          </a>
          <a target="_blank"
             href="${content.doc.e.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.e.name)"
          >
            <span class="ball">${content.doc.e.name}</span>
          </a>
          <a target="_blank"
             href="${content.doc.f.href}"
             onclick="ux.clickEvent('Outbound link', 'Bullet Link - ' + content.doc.f.name)"
          >
            <span class="ball">${content.doc.f.name}</span>
          </a>
        </div>
      </div>
      <div class="intersection"></div>
      <a target="_blank"
         href="${content.doc.cta.href}"
         class="btn-w btn-p btn btn-x"
         onclick="ux.clickEvent('Outbound link', 'Button - ' + content.doc.cta.name)"
      >${content.doc.cta.name}</a>
    </section>
  `,
  about: `
    <section class="sect-b">
      <h2>${content.about.main.name}</h2>
      <div class="text txt-2">
        <p>${content.about.main.body}</p>
      </div>
      <a class="link"
         target="_blank"
         href="${content.about.hosting.href}"
         onclick="ux.clickEvent('Outbound link', 'Simple Link - ' + content.about.hosting.name)"
      >${content.about.hosting.name}</a>
      <div class="intersection"></div>
      <h2 class="title-p">${content.about.sub.name}</h2>
      <iframe class="tub" src="${content.about.sub.video}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <div class="intersection"></div>
      <a target="_blank"
         class="btn-w btn-p btn btn-o"
         href="${content.about.sub.cta.href}"
         onclick="ux.clickEvent('Outbound link', 'Button - ' + content.about.sub.cta.name)"
      >${content.about.sub.cta.name}</a>
    </section>
  `,
  default: `
    <section class="sect-c">
      <h2>${content.default}</h2>
      <br />
      <a class="link" target="_blank" href="https://www.youtube.com/watch?v=Smwrw4sNCxE"
          onclick="ux.clickEvent('Outbound link', 'The Matrix has you...')"
       >Follow the white rabbit.</a>
    </section>
  `,
  dynamic: {
    nav: () => {
      let links = '';
      content.site.nav.forEach((entry) => {
        links += templates.site.nav.link
          .replace('__href__', entry.href)
          .replace(/__name__/g, entry.name)
      });
      document.querySelector('#drop-i-c').insertAdjacentHTML('afterbegin', links)
    },
    footer: () => {
      let texts = '',
        icons = '';
      content.site.footer.texts.forEach((entry) => {
        texts += templates.site.footer.text
          .replace(/__name__/g, entry.name)
          .replace('__href__', entry.href)
      });
      content.site.footer.icons.forEach((entry) => {
        icons += templates.site.footer.icon
          .replace(/__name__/g, entry.name)
          .replace('__href__', entry.href)
          .replace('__src__', entry.src)
      });
      document.querySelector('#foot-texts').insertAdjacentHTML('afterbegin', texts);
      document.querySelector('#foot-icons').insertAdjacentHTML('afterbegin', icons)
    },
    home: () => {
      let cards = '';
      content.home.cards.forEach((entry) => {
        let card = templates.home.card.replace('__head__', entry.name),
          links = '';
        entry.links.forEach((one) => {
          links += templates.home.link
            .replace('__href__', one.href)
            .replace('__name__', one.name)
            .replace('__data__', `'${entry.name + ' - ' + one.name}'`)
        });
        cards += card.replace('__links__', links)
      });
      return templates.home.main.replace('__cards__', cards)
    }
  }
};
