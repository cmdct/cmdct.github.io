const ux = {
  pageView: (templates, page) => {
    tc_vars.env_template = templates;
    tc_vars.page_name = page;
    if (tC) tC.event.virtualPageView(this, {})
  },
  clickEvent: (category, label) => {
    if (tC) tC.event.buttonClick(this, {
      'eventAction': 'Button Click',
      'eventCategory': category,
      'eventLabel': label
    })
  },
  setClosePrivacyCallback: () => {
    window.tc_closePrivacyButton = function(callbackValue) {
      if (callbackValue === 'button_B') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        const maximumIteration = 12
            , timeInMilliseconds = 250
            , checkScriptLoadIteration = 0
            , checkScriptLoad = setInterval(() => {
                if (window.gtag) {
                  clearInterval(checkScriptLoad);
                  tC.event.virtualPageView(this, {})
                } else if (checkScriptLoadIteration >= maximumIteration) {
                  clearInterval(checkScriptLoad)
                } else {
                  checkScriptLoadIteration++
                }
              }, timeInMilliseconds)
            ;
      }
    }
  },
  setClosePrivacyCenterCallback: () => {
    window.tc_closePrivacyCenter = function(callbackValue) {
      if (callbackValue === 'save') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        const maximumIteration = 12
            , timeInMilliseconds = 250
            , checkScriptLoadIteration = 0
            , checkScriptLoad = setInterval(() => {
                if (window.gtag) {
                  clearInterval(checkScriptLoad);
                  tC.event.virtualPageView(this, {})
                } else if (checkScriptLoadIteration >= maximumIteration) {
                  clearInterval(checkScriptLoad)
                } else {
                  checkScriptLoadIteration++
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
  },
  init: () => {
    window.gtag = window.gtag || undefined;
    window.tC = window.tC || undefined;
    ux.setClosePrivacyCenterCallback();
    ux.setClosePrivacyCallback()

  }
};
