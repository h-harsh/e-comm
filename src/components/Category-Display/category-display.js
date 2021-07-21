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
          src="https://images.unsplash.com/photo-1513001900722-370f803f498d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt=""
        />
        <h2>The category Name</h2>
        <p>A line very short abot category only</p>
        <Link to="/products" > <button className="nm-btn2">Browse More</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://cdn.shopify.com/s/files/1/0253/1334/5602/files/39_408x.progressive.png.jpg?v=1575564173"
          alt=""
        />
        <h2>The category Name</h2>
        <p>A line very short abot category only</p>
        <Link to="/products" > <button className="nm-btn2">Browse More</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://cdn.shopify.com/s/files/1/0253/1334/5602/files/38_408x.progressive.png.jpg?v=1575564234"
          alt=""
        />
        <h2>The category Name</h2>
        <p>A line very short abot category only</p>
        <Link to="/products" > <button className="nm-btn2">Browse More</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://cdn.shopify.com/s/files/1/0253/1334/5602/files/40_4e1d84a1-c290-4310-85b8-36e8a22192e1_408x.progressive.png.jpg?v=1575564250"
          alt=""
        />
        <h2>The category Name</h2>
        <p>A line very short abot category only</p>
        <Link to="/products" > <button className="nm-btn2">Browse More</button></Link>
      </div>
      <div className="card-category">
        <img
          className="cat-img"
          src="https://cdn.shopify.com/s/files/1/0278/7180/5515/files/55_408x.progressive.png.jpg?v=1575648598"
          alt=""
        />
        <h2>The category Name</h2>
        <p>A line very short abot category only</p>
        <Link to="/products" ><button className="nm-btn2">Browse More</button></Link>
      </div>

      </div>
    </div>
  );
};
