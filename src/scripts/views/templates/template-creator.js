import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurants) => `


`;

const createRestaurantItemTemplate = (restaurants) => `
<div class="content-item">
  <img class="content-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
  <div class="content-paragraph">
    <p>
      <div class="content-rating">Rating : ${restaurants.rating}</div>
      <div class="content-location">Lokasi : ${restaurants.city}</div>
      <div class="content-title">Nama : ${restaurants.name}</div>
    </p>
  <div class="content-title"><a class="btn btn-detail-full" href="${`/#/detail/${restaurants.id}`}">More Info</a></div>
</div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};