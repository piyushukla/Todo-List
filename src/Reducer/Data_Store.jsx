const reducer = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.item];
  }

  if (action.type === "Delete_Item") {
    state.splice(action.item, 1);
    return [...state];
  }
  if (action.type === "Update_List") {
    state.splice(action.index, 0, action.value);
    return [...state];
  }
  return state;
};
export default reducer;
