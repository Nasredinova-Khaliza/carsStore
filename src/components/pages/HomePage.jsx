

import scss from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={scss.homePage}>
      <h1 className={scss.heading}>Welcome to Our Car Showroom!</h1>
      <p className={scss.subheading}>Explore the latest models and deals on our wide range of cars.</p>
      <div className={scss.featuredCars}>
        <div className={scss.carCard}>
          <img src="https://images-porsche.imgix.net/-/media/C8A275E6885249F787440EE573531C2D_632F0FD13156437BA7C079A82F532EEC_TA22Q2ZIX0001-taycan-front-view-frozenberrymetallic?w=999&q=85&auto=format" alt="Car 1" />
          <h3>PORSCHE</h3>
          <p>Description of Car Model 1</p>
        </div>
        <div className={scss.carCard}>
          <img src="https://kolesa-photos.kcdn.online/kolesa-read/27bbd75c11470bd8437d3f967cd39d2a7d13a382-1193x671.jpg" alt="Car 2" />
          <h3>Car Model 2</h3>
          <p>Description of Car Model 2</p>
        </div>
        <div className={scss.carCard}>
          <img src="https://s.auto.drom.ru/i24216/c/photos/fullsize/lamborghini/urus/lamborghini_urus_773129.jpg" alt="Car 3" />
          <h3>Car Model 3</h3>
          <p>Description of Car Model 3</p>
        </div>
      </div>
      <div className={scss.services}>
        <h2>Our Services</h2>
        <ul>
          <li>Car Sales</li>
          <li>Car Rentals</li>
          <li>Car Maintenance</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
