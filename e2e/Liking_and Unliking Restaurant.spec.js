Feature('Liking and Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  // … kita akan mengisi uji coba berikutnya …
});
