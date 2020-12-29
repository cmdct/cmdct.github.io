const templates = {
  site: {
    nav: {
      dynamic: () => {
        let links = '';
        content.site.nav.forEach((entry) => {
          links += templates.site.nav.link
                    .replace('__href__', entry.href)
                    .replace(/__text__/g, entry.text)
        });
        document.querySelector('#drop-i-c').insertAdjacentHTML('afterbegin', links)
      },
      link: `
        <a href="__href__"
           class="btn-w btn-p"
           onclick="tracker.onClick('Internal Nav', 'Nav Burger - __text__')"
        >__text__</a>
      `,
    },
    footer: {
      dynamic: () => {
        let texts = ''
          , icons = ''
          ;
        content.site.footer.texts.forEach((entry) => {
          texts += templates.site.footer.text
                    .replace(/__text__/g, entry.text)
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
      text: `
        <a class="foot-l"
           target="_blank"
           href="__href__"
           onclick="tracker.onClick('Outbound link', 'Footer Text - __text__')"
        >__text__</a>
      `,
      icon: `
        <a target="_blank"
           href="__href__"
           onclick="tracker.onClick('Outbound link', 'Footer Icon - __name__')">
           <img class="foot-i icon"
            src="__src__"
            alt="__name__"
           />
        </a>
      `,
    },
  },
  home: {
    dynamic: () => {
      let cards = '';
      content.home.cards.forEach((entry) => {
        let card = templates.home.card.replace('__title__', entry.title)
          , links = ''
          ;
        entry.links.forEach((one) => {
          let data
          links += templates.home.link
                    .replace('__href__', one.href)
                    .replace('__text__', one.name)
                    .replace('__data__', `'${entry.title + ' - ' + one.name}'`)
        });
        cards += card.replace('__links__', links)
      });
      return templates.home.main.replace('__cards__', cards)
    },
    main: `
      <section class="sect-c">
        <h2>${content.home.title}</h2>
        <div class="cards">
          __cards__
        </div>
      </section>
    `,
    card: `
      <div class="card">
        <div class="card-t">__title__</div>
        <div class="card-c">
          __links__
        </div>
      </div>
    `,
    link: `<a class="link" target="_blank" href="__href__" onclick="tracker.onClick('Outbound link', __data__)">__text__</a>`
  },
  doc: `
    <section class="sect-b">
      <h2>${content.doc.head}</h2>
      <div class="intersection"></div>
      <div id="balls">
        <div class="ball-l">
          <a target="_blank" href="${content.doc.a.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.a.text)">
            <span class="ball">${content.doc.a.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.b.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.b.text)">
            <span class="ball">${content.doc.b.text}</span>
          </a>
          <a target="_blank" href="${content.doc.c.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.c.text)">
            <span class="ball">${content.doc.c.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.d.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.d.text)">
            <span class="ball">${content.doc.d.text}</span>
          </a>
          <a target="_blank" href="${content.doc.e.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.e.text)">
            <span class="ball">${content.doc.e.text}</span>
          </a>
          <a target="_blank" href="${content.doc.f.link}" onclick="tracker.onClick('Outbound link', 'Bullet Link - ' + content.doc.f.text)">
            <span class="ball">${content.doc.f.text}</span>
          </a>
        </div>
      </div>
      <div class="intersection"></div>
      <a target="_blank" href="${content.doc.cta.href}" class="btn-w btn-p btn btn-x" onclick="tracker.onClick('Outbound link', 'Button - ' + content.doc.cta.text)">${content.doc.cta.text}</a>
    </section>
  `,
  about: `
    <section class="sect-b">
      <h2>${content.about.main.head}</h2>
      <div class="text txt-2">
        <p>${content.about.main.body}</p>
      </div>
      <a class="link" target="_blank" onclick="tracker.onClick('Outbound link', 'Simple Link - ' + content.about.hosting.text)" href="${content.about.hosting.href}">${content.about.hosting.text}</a>
      <div class="intersection"></div>
      <h2 class="title-p">${content.about.sub.head}</h2>
      <iframe class="tub" src="${content.about.sub.video}" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
      <div class="intersection"></div>
      <a  target="_blank" class="btn-w btn-p btn btn-o" href="${content.about.sub.cta.href}" onclick="tracker.onClick('Outbound link', 'Button - ' + content.about.sub.cta.text)">
        ${content.about.sub.cta.text}
      </a>
    </section>
  `,
  default: `
    <section class="sect-c">
      <h2>This page does not exist</h2>
    </section>
  `
};
