import DicodingDB from '../../data/dicodingdb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <section class="headline" id="headline">
      <h2>RestoMantap Memberikan List Restoran Termantap Se-Indonesia</h2>
    </section>

    <section class="content" id="list">
      
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await DicodingDB.HomePage();
    const restaurantContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
