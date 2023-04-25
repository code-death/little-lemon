import React from "react";

const food = [
    {
      foodName: "Greek Salad",
      price: `$ ${12.99}`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "http://placehold.it/",
    },
    {
      foodName: "Roman Salad",
      price: `$ ${12.99}`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "http://placehold.it/",
    },
    {
      foodName: "Indian Salad",
      price: `$ ${12.99}`,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "http://placehold.it/",
    },
  ];

export default function SpecialsMenu() {
  return <div className="specialsMenu">
    {food.map(item => (<div className="foodItem">
        <img src={item.image} alt={item.foodName} />
        <span className="namePriceBar">
            <p>{item.foodName}</p>
            <p>{item.price}</p>
        </span>
        <p>{item.description}</p>
        <span className="OrderFromSpecials"><a href="/order">Order a delivery</a><i className="deliveryIcon"></i></span>
    </div>))}
  </div>;
}


