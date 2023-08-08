import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast react Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzaData.length > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza data={pizza} key={pizza.name} />;
          })}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  const { photoName, name, ingredients, price, soldOut } = props.data;

  if (soldOut) {
    return null;
  }

  return (
    <li className="pizza">
      <img src={photoName} alt="spinaci pizza" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const openHour = 20;
  const closeHour = 22;
  const hour = new Date().getHours();
  const isOpen = hour >= openHour && hour <= closeHour ? true : false;
  console.log(isOpen);

  if (!isOpen) {
    return (
      <p>
        We are happy to welcome you beetwen {openHour}:00 to {closeHour}:00
      </p>
    );
  }
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are Open come and visit us until {closeHour}, come and visit us
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are curently close. We are open from {openHour} to {closeHour}
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we are currently open");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
