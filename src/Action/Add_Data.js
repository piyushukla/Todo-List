export function Add(data) {
  return {
    type: "ADD_ITEM",
    item: data,
  };
}

export function Update(data, index) {
  return {
    type: "Update_List",
    value: data,
    index: index,
  };
}

export function Delete(value) {
  return {
    type: "Delete_Item",
    item: value,
  };
}
