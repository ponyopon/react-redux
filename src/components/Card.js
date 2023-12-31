import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../actions/cardActions";

const Card = (props) => {
  const card = useSelector((state) => {
    let user = props.match.params.user;
    return state.cards.find((card) => card.title === user);
  });

  const { title, body } = card;
  const dispatch = useDispatch();
  const history = useHistory();
  const onButtonClick = () => {
    let id = card.id;
    dispatch({ type: "DELETE_CARD", id: id });
    history.push("/contact");
  };

  return (
    <div
      className="ui raised very padded text container segmant"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title}</h3>
      <p>{body}</p>
      <button onClick={onButtonClick}>DELETE</button>
    </div>
  );
};

const mapStateToProps = (state, onwProps) => {
  let title = onwProps.match.params.user;
  return {
    cards: state.cards.find((card) => card.title === title),
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    deleteCards: (id) => {
      dispatch(deleteCard(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchProps)(Card);
