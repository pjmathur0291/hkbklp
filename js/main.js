(function () {
  'use strict';

  /* Career roles data per tab */
  var careerData = {
    bca: [
      { icon: 'icon-software.svg', title: 'Software Developer /<br>Programmer', tag: 'High Demand' },
      { icon: 'icon-web.svg', title: 'Web / Mobile App<br>Developer', tag: 'Top Role' },
      { icon: 'icon-network.svg', title: 'Network Engineer', tag: 'IT Operations' },
      { icon: 'icon-security.svg', title: 'Cybersecurity Analyst', tag: 'Security' },
      { icon: 'icon-design.svg', title: 'UI/UX Designer', tag: 'Design' }
    ],
    bba: [
      { icon: 'icon-software.svg', title: 'Business Analyst', tag: 'High Demand' },
      { icon: 'icon-web.svg', title: 'Marketing Manager', tag: 'Top Role' },
      { icon: 'icon-network.svg', title: 'HR Executive', tag: 'Operations' },
      { icon: 'icon-security.svg', title: 'Operations Manager', tag: 'Management' },
      { icon: 'icon-design.svg', title: 'Entrepreneur / Startup Founder', tag: 'Leadership' }
    ],
    bcom: [
      { icon: 'icon-software.svg', title: 'Chartered Accountant (CA)', tag: 'High Demand' },
      { icon: 'icon-web.svg', title: 'Financial Analyst', tag: 'Top Role' },
      { icon: 'icon-network.svg', title: 'Tax Consultant', tag: 'Finance' },
      { icon: 'icon-security.svg', title: 'Banking Professional', tag: 'Banking' },
      { icon: 'icon-design.svg', title: 'Auditor / Compliance Officer', tag: 'Audit' }
    ]
  };

  var careerGrid = document.getElementById('career-grid');
  var careerTabs = document.querySelectorAll('.career-tab');

  function renderCareers(tab) {
    var roles = careerData[tab] || careerData.bca;
    careerGrid.innerHTML = roles.map(function (role) {
      return (
        '<div class="career-card">' +
          '<div class="career-card__icon">' +
            '<img src="assets/icons/' + role.icon + '" alt="" width="24" height="24">' +
          '</div>' +
          '<div>' +
            '<p class="career-card__title">' + role.title + '</p>' +
            '<span class="career-card__tag">' + role.tag + '</span>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  careerTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      careerTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderCareers(tab.dataset.tab);
    });
  });

  renderCareers('bca');

  /* FAQ accordion */
  document.querySelectorAll('.faq-item__question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* Mobile nav toggle */
  var nav = document.getElementById('nav');
  var toggle = document.querySelector('.nav__toggle');

  if (toggle) {
    toggle.addEventListener('click', function () {
      var expanded = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  /* Sticky nav shadow on scroll */
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
    } else {
      nav.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)';
    }
  });
})();
