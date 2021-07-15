const assert = require('assert');

Feature('Liking A Restaurant');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', (I) => {
  I.dontSeeElement('content-item');
});

Scenario('liking one restaurant', async (I) => {
  I.dontSeeElement('content-item');
  I.amOnPage('/');

  const firstRestaurant = locate('.content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('.btn-detail-full');
  I.click('.btn-detail-full');

  I.amOnPage('/#/detail');
  I.seeElement('.fa-heart-o');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.fa-heart');

  I.amOnPage('/#/favorite');
  const firstRestaurantCheck = locate('.content-title').first();
  const firstRestaurantTitleCheck = await I.grabTextFrom(firstRestaurantCheck);
  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleCheck);
});

Scenario('unliking a restaurant', async (I) => {
  I.dontSeeElement('content-item');
  I.amOnPage('/');

  const firstRestaurant = locate('.content-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('.btn-detail-full');
  I.click('.btn-detail-full');

  I.amOnPage('/#/detail');
  I.seeElement('.fa-heart-o');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.fa-heart');

  I.amOnPage('/#/favorite');
  const firstRestaurantCheck = locate('.content-title').first();
  const firstRestaurantTitleCheck = await I.grabTextFrom(firstRestaurantCheck);
  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitleCheck);
  I.click(firstRestaurantTitle);
  I.seeElement('.btn-detail-full');
  I.click('.btn-detail-full');

  I.amOnPage('/#/detail');
  I.seeElement('.fa-heart');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.seeElement('.fa-heart-o');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('content-item');
});
