import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useSelector, useDispatch, connect } from "react-redux";

const Contact = ({ cards }) => {
  console.log(cards);
  return (
    <div>
      {cards.map((card) => {
        return (
          <div
            className="ui raised very padded text container segmant"
            style={{ marginTop: "80px" }}
            key={card.id}
          >
            <Link to={`/${card.title}`} className="ui header">
              {card.title}
            </Link>
            <h3 className="ui header">Contact</h3>
            <p>{card.body}</p>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(Contact);
