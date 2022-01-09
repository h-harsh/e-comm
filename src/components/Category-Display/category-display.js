import { Link } from "react-router-dom";
import "./category.style.css";

export const CategoryDisplay = () => {
  return (
    <div className="out-most" >
       <h1 className="cat-heading" >Browse All Categories</h1>
      <div className="category-container">
      <div className="card-category">
        <img
          className="cat-img"
          src="https://pbs.twimg.com/profile_images/472421066007015424/MHUJj15g_400x400.jpeg"
          alt=""
        />
        <h2>Robert T. Kiyosaki</h2>
        <p>Rich Dad Poor Dad</p>
        <Link to="/products/613881ab1d9bd21dc0896c09" > <button className="nm-btn2">Explore</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://m.economictimes.com/thumb/msid-69535173,width-1200,height-900,resizemode-4,imgsize-220321/morgan-housel-1200.jpg"
          alt=""
        />
        <h2>Morgan Housel</h2>
        <p>The Psychology of Money</p>
        <Link to="/products/613881ab1d9bd21dc0896c07" > <button className="nm-btn2">Explore</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://www.simplylifeindia.com/uploads/8/1/1/5/8115412/anil-lamba-speakers-simply-life-india-speakers-bureau_orig.jpg"
          alt=""
        />
        <h2>Dr Anil Lamba</h2>
        <p>Romancing the Balance Sheet</p>
        <Link to="/products/613881ab1d9bd21dc0896c0b" > <button className="nm-btn2">Explore</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://149483024.v2.pressablecdn.com/wp-content/uploads/2020/12/Eric-Jorgenson.jpg"
          alt=""
        />
        <h2>Eric Jorgenson</h2>
        <p>The Almanack of Naval Ravikant</p>
        <Link to="/products/613881ab1d9bd21dc0896c0c" > <button className="nm-btn2">Explore</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://s.wsj.net/public/resources/images/B3-DZ952_INVEST_E_20190515102620.jpg"
          alt=""
        />
        <h2>Benjamin Graham</h2>
        <p>The Intelligent Investor</p>
        <Link to="/products/613881ab1d9bd21dc0896c06" ><button className="nm-btn2">Explore </button></Link>
      </div>

      </div>
    </div>
  );
};
