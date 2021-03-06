const ux = {
  pageView: (template, page) => {
    if (window.tc_vars) {
      tc_vars.env_template = template;
      tc_vars.page_name = page;
      try {
        tC.event.virtualPageView(this, {})
      } catch (e) {
        console.log(e)
      }
    }
  },
  clickEvent: (category, label) => {
    if (window.tC) tC.event.buttonClick(this, {
      'eventAction': 'Button Click',
      'eventCategory': category,
      'eventLabel': label
    })
  },
  setClosePrivacyCallback: () => {
    window.tc_closePrivacyButton = function(callbackValue) {
      if (callbackValue === 'button_B') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        utils.waitThreeSecondsIf(
          function() {
            return window.gtag
          },
          function() {
            tC.event.virtualPageView(this, {})
          }
        )
      }
    }
  },
  setClosePrivacyCenterCallback: () => {
    window.tc_closePrivacyCenter = function(callbackValue) {
      if (callbackValue === 'save') {
        tC.script.add('https://cdn.tagcommander.com/5423/tc_Sylvain_23.js');
        utils.waitThreeSecondsIf(
          function() {
            return window.gtag
          },
          function() {
            tC.event.virtualPageView(this, {});
            utils.waitThreeSecondsIf(
              function() {
                return document.querySelector('#footer_tc_privacy')
              },
              function() {
                document.querySelector('#footer_tc_privacy').remove()
              }
            )
          }
        )
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
