window.addEventListener('load', () => {
  /* Menu */
  const $menu = document.querySelector('.menu');
  if ($menu) {
    const $menuToggle = $menu.querySelector('.menu__toggle');
    $menuToggle.addEventListener('click', () => {
      $menu.classList.toggle('menu--active');
      document.body.classList.toggle('body--lock');
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    $menu.addEventListener('click', e => {
      if ($menu === e.target && $menu.classList.contains('menu--active')) {
        $menu.classList.remove('menu--active');
      document.body.classList.remove('body--lock');
    }
    });
  }

  /* Quotes slider */
  new Swiper('.quotes__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.quotes__slider-next',
      prevEl: '.quotes__slider-prev',
      clickable: true
    },
    scrollbar: {
      el: '.quotes__slider-pagination',
      draggable: true,
      dragSize: 75,
    },
    speed: 600,
    breakpoints: {
      767: {
        spaceBetween: 0,
        scrollbar: {
          dragSize: 150,
        },
      },
    },
  });

  /* More btns */
  const $moreBtns = document.querySelectorAll('.js-more-btn');
  $moreBtns.forEach($btn => {
    $btn.addEventListener('click', () => {
      const listName = $btn.dataset.moreName;
      const $moreList = document.querySelector(`.more-list[data-more-name="${listName}"]`);
      $btn.classList.add('news__more--hide');
      $moreList.classList.add('more-list--active');
    });
  });

  /* Filter */
  const $filters = document.querySelectorAll('.filter');
  $filters.forEach($filter => {
    const $btn = $filter.querySelector('.filter__btn');
    $btn.addEventListener('click', () => $filter.classList.toggle('filter--active'));
  });

  window.addEventListener('click', (e) => {
    const $activeFilter = document.querySelector('.filter--active');
    const isInnerFilter = e.target.closest('.filter') && !e.target.classList.contains('filter');
    if (!$activeFilter || isInnerFilter) {
      return;
    }

    $activeFilter.classList.remove('filter--active');
  });

  /* Tabs */
  const $tabsLists = document.querySelectorAll('.tabs');
  $tabsLists.forEach($tabs => {
    const $btns = $tabs.querySelectorAll('.tabs-btn');
    $btns.forEach(($btn, index) => {
      $btn.addEventListener('click', () => {
        const $oldActiveBtn = $tabs.querySelector('.tabs-btn--active');
        const $oldActiveTab = $tabs.querySelector('.tabs-item--active');
        const $newActiveBtn = $tabs.querySelectorAll('.tabs-btn')[index];
        const $newActiveTab = $tabs.querySelectorAll('.tabs-item')[index];

        $oldActiveTab.classList.remove('tabs-item--active');
        $oldActiveBtn.classList.remove('tabs-btn--active');

        $newActiveBtn.classList.add('tabs-btn--active');
        $newActiveTab.classList.add('tabs-item--active');
      });
    });
  });

  /* Smoothscroll */
  const $anchors = document.querySelectorAll('a[href*="#"]');
  $anchors.forEach($anchor => {
    $anchor.addEventListener('click', e => {
      e.preventDefault();

      const id = $anchor.getAttribute('href');
      if (id === '#') {
        return;
      }

      const $elem = document.querySelector(id);
      if ($elem) {
        const offsetTop = $elem.getBoundingClientRect().top;
        window.scrollBy({ top: (offsetTop), left: 0, behavior: 'smooth' });
      }
    });
  });
});