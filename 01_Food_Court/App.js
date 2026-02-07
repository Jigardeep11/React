import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-71-580x386.jpg" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "334475",
      name: "KFC",
      cloudinaryImageId: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Burgers", "Biryani", "American"],
      avgRating: 4.2,
      deliveryTime: "25 mins",
    },
  },
  {
    info: {
      id: "255651",
      name: "Pizza Hut",
      cloudinaryImageId: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Pizzas"],
      avgRating: 4.0,
      deliveryTime: "35 mins",
    },
  },
  {
    info: {
      id: "108097",
      name: "Chinese Wok",
      cloudinaryImageId: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Chinese", "Asian", "Tibetan"],
      avgRating: 3.9,
      deliveryTime: "40 mins",
    },
  },
  {
    info: {
      id: "123456",
      name: "Burger King",
      cloudinaryImageId: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      deliveryTime: "22 mins",
    },
  },
  {
    info: {
      id: "789012",
      name: "The Dessert Heaven",
      cloudinaryImageId: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Bakery", "Desserts", "Ice Cream"],
      avgRating: 4.7,
      deliveryTime: "15 mins",
    },
  },
  {
    info: {
      id: "345678",
      name: "Sushi House",
      cloudinaryImageId: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Japanese", "Sushi", "Healthy Food"],
      avgRating: 4.5,
      deliveryTime: "45 mins",
    },
  },
  {
    info: {
      id: "901234",
      name: "Taco Bell",
      cloudinaryImageId: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Mexican", "Fast Food"],
      avgRating: 4.1,
      deliveryTime: "28 mins",
    },
  },
  {
    info: {
      id: "556677",
      name: "The Biryani House",
      cloudinaryImageId: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=500&auto=format&fit=crop",
      cuisines: ["Biryani", "Hyderabadi", "Mughlai"],
      avgRating: 4.6,
      deliveryTime: "30 mins",
    }
}
];

const RestaurantCard = (props) => {
  const { resData } = props;
  
  // Destructure the data from the nested 'info' object
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = resData?.info;

  return (
    <div className="res-card">
      <img className="res-img" alt="res-logo" src={cloudinaryImageId} />
      <h3>{name}</h3>
      {/* Join array of cuisines into a string */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
//not using keys {not acceptable} <<< index as a key <<< unique id (best prastice)
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search</div>
      <div className="res-container">

      {/* <RestaurantCard resData={resList[0]}/> <RestaurantCard resData={resList[1]}/>*/} 
        {/* Map through the list to render cards dynamically */}

         {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
        
        
        

      </div>
    </div>
  );
};

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

// Ensure the ID matches your HTML (usually "root")
const root = ReactDOM.createRoot(document.getElementById("roott"));
root.render(<AppLayout />);