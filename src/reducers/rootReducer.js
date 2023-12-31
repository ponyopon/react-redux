const initialState = {
  cards: [
    { id: 1, title: "alex", body: "a" },
    { id: 2, title: "c", body: "c" },
    { id: 3, title: "b", body: "b" },
  ],
};
const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_CARD":
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id;
      });
      return { ...state, cards: newCard };
    default:
      return state;
  }
};

export default rootReducer;
