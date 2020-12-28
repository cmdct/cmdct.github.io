const templates = {
  doc: `
    <section class="sect-b">
      <h2>${content.doc.head}</h2>
      <div class="intersection"></div>
      <div id="balls">
        <div class="ball-l">
          <a target="_blank" href="${content.doc.a.link}" onclick="tracker.onClick(\'Outbound link', content.doc.a.text)">
            <span class="ball">${content.doc.a.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.b.link}" onclick="tracker.onClick(\'Outbound link', content.doc.b.text)">
            <span class="ball">${content.doc.b.text}</span>
          </a>
          <a target="_blank" href="${content.doc.c.link}" onclick="tracker.onClick(\'Outbound link', content.doc.c.text)">
            <span class="ball">${content.doc.c.text}</span>
          </a>
        </div>
        <div class="ball-l">
          <a target="_blank" href="${content.doc.d.link}" onclick="tracker.onClick(\'Outbound link', content.doc.d.text)">
            <span class="ball">${content.doc.d.text}</span>
          </a>
          <a target="_blank" href="${content.doc.e.link}" onclick="tracker.onClick(\'Outbound link', content.doc.e.text)">
            <span class="ball">${content.doc.e.text}</span>
          </a>
          <a target="_blank" href="${content.doc.f.link}" onclick="tracker.onClick(\'Outbound link', content.doc.f.text)">
            <span class="ball">${content.doc.f.text}</span>
          </a>
        </div>
      </div>
      <div class="intersection"></div>
      <a target="_blank" href="${content.doc.cta.href}" class="btn-w btn-p btn btn-x" onclick="tracker.onClick(\'Outbound link', content.doc.cta.text)">${content.doc.cta.text}</a>
    </section>
  `,
  about: `
    <section class="sect-b">
      <h2 class="title-p">${content.about.main.head}</h2>
      <div class="text txt-2">
        <p>${content.about.main.body}</p>
      </div>
      <div class="intersection"></div>
      <iframe class="tub" src="${content.about.video}" allow="autoplay; encrypted-media" allowfullscreen> </iframe>
      <div class="intersection"></div>
      <a class="btn-w btn-p btn btn-o" href="${content.about.cta.href}" onclick="tracker.onClick(\'Internal Nav', content.about.cta.text)">
        ${content.about.cta.text}
      </a>
    </section>
  `,
  default: `
    <section class="sect-c">
      <h2>This page does not exist</h2>
    </section>
  `
};
