import React from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";

import List from "./Reducer/Data_Store";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";

const reducer = combineReducers({ data: List });
const store = createStore(reducer);
function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Input />
      </Provider>
    </div>
  );
}

export default App;
