import React, { useState } from "react";
import logo from "./logo.svg";
import MapContainer from "./Map";
import MyMapComponent from "./MapAlt";
import ShopList from "./ShopList.jsx";
import ListContainer from "./ListContainer";
import "./App.css";

const repairShops = [
  {
    name: "Worldwide Corporate Headquarters",
    address: "The Landmark @ One Market, San Francisco, CA",
    position: {
      lat: 37.787519,
      lng: -122.41,
    },
    img: "/logo192.png",
    rating: 3.5,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
  {
    name: "salesforce.com inc Atlanta",
    address: "950 East Paces Ferry Road NE, Atlanta, GA",
    position: {
      lat: 37.75,
      lng: -122.42,
    },
    img: "/logo192.png",
    rating: 2.0,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
  {
    name: "salesforce.com inc Bellevue",
    address: "500 Boylston Street 19th Floor, Boston, MA",
    position: {
      lat: 37.797,
      lng: -122.40564,
    },
    img: "/logo192.png",
    rating: 5.0,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
  {
    name: "Worldwide Corporate Headquarters",
    address: "The Landmark @ One Market, San Francisco, CA",
    position: {
      lat: 37.787519,
      lng: -122.41,
    },
    img: "/logo192.png",
    rating: 3.5,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
  {
    name: "salesforce.com inc Atlanta",
    address: "950 East Paces Ferry Road NE, Atlanta, GA",
    position: {
      lat: 37.75,
      lng: -122.42,
    },
    img: "/logo192.png",
    rating: 2.0,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
  {
    name: "salesforce.com inc Bellevue",
    address: "500 Boylston Street 19th Floor, Boston, MA",
    position: {
      lat: 37.797,
      lng: -122.40564,
    },
    img: "/logo192.png",
    rating: 5.0,
    userRatings: [
      {
        userName: "Mike",
        review: "Got my stuff fixed right away!",
        rating: 5

      },
      {
        userName: "Mark",
        review: "They stole my car!!!",
        rating: 1
      },
      {
        userName: "Yoda",
        review: "Passible service it was.",
        rating: 3

      }
    ],
  },
];

function Display({activeShop:{name, address}}) {
  // const {activeShop:{name, address}} = props;
  // const {name, address} = activeShop; 
  return (
    <div>{name} {address}</div>
  );
}

function App() {
  const [activeShop, setShop] = useState({
    name: "Test Shop",
    address: "Test Address",
    position: {
      lat: 37.778519,
      lng: -122.40564,
    },
  });

  const setActiveShop = (newShop) => setShop(newShop);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <body>
        <div class="content">
          <MapContainer 
            repairShops={repairShops}
            activeShop={activeShop}
            onClickFunction={setActiveShop}
          ></MapContainer>
          {/* <ShopList
            onClickFunction={setActiveShop}
            activeShop={activeShop}
            repairShops={repairShops}
          ></ShopList>
          <Display activeShop={activeShop}/> */}
          <ListContainer 
            onClickFunction={setActiveShop}
            activeShop={activeShop}
            repairShops={repairShops}>
          </ListContainer>
          {/* <MyMapComponent></MyMapComponent> */}
        </div>
      </body>
    </div>
  );
}

export default App;
