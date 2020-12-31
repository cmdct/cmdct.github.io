const content = {
  home: {
    name: "Liens utiles",
    cards: [{
        name: "Langage",
        links: [{
            name: "Tech",
            href: "https://techterms.com"
          },
          {
            name: "Marketing",
            href: "https://www.definitions-marketing.com"
          },
          {
            name: "Conjugueur",
            href: "https://www.gymglish.com/fr/conjugaison/vatefaireconjuguer"
          },
          {
            name: "Wiktionary",
            href: "https://www.wiktionary.org"
          },
          {
            name: "Wikipedia",
            href: "https://www.wikipedia.org"
          },
          {
            name: "Translate",
            href: "https://translate.google.com/?ui=tob&sl=en&tl=fr&op=translate"
          }
        ]
      },
      {
        name: "Gestion",
        links: [{
            name: "Lucca",
            href: "https://fjordtechnologies.ilucca.net/home"
          },
          {
            name: "Zoho",
            href: "https://care.commandersact.com/support/commandersact529"
          },
          {
            name: "Slack",
            href: "https://tagcoteam.slack.com"
          },
          {
            name: "Office",
            href: "https://login.microsoftonline.com"
          },
          {
            name: "Spendek",
            href: "https://app.spendesk.com/auth/login"
          }
        ]
      },
      {
        name: "Solution",
        links: [{
            name: "Platform",
            href: "https://platform.commandersact.com"
          },
          {
            name: "Extension",
            href: "https://chrome.google.com/webstore/detail/commanders-act-assistant/lfaifjhjdolnpnlgeohohaalbeidhlpj?hl=fr"
          },
          {
            name: "Documentation",
            href: "https://community.commandersact.com/en/"
          },
          {
            name: "Corporate",
            href: "https://www.commandersact.com"
          }
        ]
      },
      {
        name: "Client",
        links: [{
            name: "DevTools",
            href: "https://developers.google.com/web/tools/chrome-devtools"
          },
          {
            name: "URL Encoding",
            href: "https://www.w3schools.com/tags/ref_urlencode.ASP"
          },
          {
            name: "Status Codes",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
          },
          {
            name: "Check IP",
            href: "http://checkip.amazonaws.com/"
          },
          {
            name: "Masque",
            href: "https://cric.grenoble.cnrs.fr/Administrateurs/Outils/CalculMasque"
          }
        ]
      },
      {
        name: "Code",
        links: [{
            name: "Beautifier",
            href: "https://beautifier.io"
          },
          {
            name: "DiffNow",
            href: "https://www.diffnow.com/compare-clips"
          },
          {
            name: "Codeshare",
            href: "https://codeshare.io"
          }
        ]
      },
      {
        name: "JavaScript",
        links: [{
            name: "MDN",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          },
          {
            name: "Eloquent",
            href: "https://eloquentjavascript.net/"
          },
          {
            name: "ECMAScript",
            href: "https://www.ecma-international.org/ecma-262/11.0/index.html#title"
          }
        ]
      },
      {
        name: "CSS",
        links: [{
            name: "Selectors",
            href: "https://www.w3schools.com/cssref/css_selectors.asp"
          },
          {
            name: "Flexbox",
            href: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
          },
          {
            name: "Colors",
            href: "https://en.wikipedia.org/wiki/Web_colors"
          },
          {
            name: "ColorZilla",
            href: "https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp"
          }
        ]
      },
      {
        name: "Regex",
        links: [{
            name: "101",
            href: "https://regex101.com"
          },
          {
            name: "Tutorial",
            href: "http://www.rexegg.com"
          },
          {
            name: "Cheat Sheet",
            href: "https://regexcheatsheet.com"
          }
        ]
      }
    ]
  },
  doc: {
    name: "Documentation",
    a: {
      name: "Platform",
      href: "https://community.commandersact.com/platform"
    },
    b: {
      name: "TAG",
      href: "https://community.commandersact.com/tagcommander"
    },
    c: {
      name: "TRUST",
      href: "https://community.commandersact.com/trustcommander"
    },
    d: {
      name: "MIX",
      href: "https://community.commandersact.com/mixcommander"
    },
    e: {
      name: "DATA",
      href: "https://community.commandersact.com/datacommander"
    },
    f: {
      name: "FUSE",
      href: "#fuse"
    },
    cta: {
      name: "Interne",
      href: "https://tagcommander.atlassian.net/wiki/spaces/CAH/overview?mode=global"
    }
  },
  about: {
    main: {
      name: "À propos",
      body: "Veuillez noter que ce site est destiné uniquement à pratiquer l'implémentation des différents produits Commanders Act et n'est en aucun cas une vitrine officielle. Le code de ce site n'est pas non plus lié aux technologies Commanders Act mais à un projet de développement Web personnel. Les données collectées ne sont utilisées que pour vérifier la configuration."
    },
    hosting: {
      name: "Hébergé sur GitHub Pages",
      href: "https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages"
    },
    sub: {
      name: "Commanders Act",
      video: "https://www.youtube.com/embed/6S9Es0UhzQg",
      cta: {
        name: "Plus d'information",
        href: "https://www.commandersact.com"
      }
    }

  },
  default: "Cette page n'existe pas",
  site: {
    name: "Cmd",
    footer: {
      texts: [{
        name: "GitHub Pages",
        href: "https://pages.github.com"
      }],
      icons: [{
        name: "Github",
        href: "https://github.com/cmdct/cmdct.github.io",
        src: "images/iconmonstr-github.png"
      }]
    }
  }
};
content.site.nav = [{
    name: content.home.name,
    href: "#home"
  },
  {
    name: content.doc.name,
    href: "#documentation"
  },
  {
    name: content.about.main.name,
    href: "#about"
  }
];