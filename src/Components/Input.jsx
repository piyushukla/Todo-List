import React, { useState } from "react";
import Table from "./Table";
import { connect } from "react-redux";
import { Add, Update } from "../Action/Add_Data";

function Input(props) {
  const [flag, setflag] = useState(false);
  const [data, setdata] = useState("");
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState();

  function submit() {
    setdata("");
    setEdit(false);
    setflag(true);
  }

  function update(val, index) {
    setdata(val);
    setIndex(index);
    setEdit(true);
  }
  return (
    <div style={{ marginLeft: "10%" }}>
      <div className="input-group mb-3 mt-3" style={{ width: "90%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Add ToDo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={data}
          onChange={(e) => {
            setdata(e.target.value);
          }}
        />

        <div className="input-group-append">
          {/* <span
          className="input-group-text"
          style={{ background: "#8A2BE2", color: "white" }}
          id="basic-addon2"
        >
          @example.com
        </span> */}

          {edit === false ? (
            <button
              type="button"
              className="btn"
              style={{ background: "#8A2BE2", color: "white" }}
              onClick={() => {
                submit();
                props.ChangeList(data);
              }}
              disabled={data.length > 0 ? false : true}
            >
              Add Notes
            </button>
          ) : (
            <button
              type="button"
              className="btn"
              style={{ background: "#8A2BE2", color: "white" }}
              onClick={() => {
                submit();
                props.UpdateList(data, index);
              }}
              disabled={data.length > 0 ? false : true}
            >
              Update
            </button>
          )}
        </div>
      </div>
      {flag === true ? (
        <div>
          <Table
            update={(val, index) => {
              update(val, index);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    ChangeList: (response) => {
      dispatch(Add(response));
    },
    UpdateList: (val, index) => {
      dispatch(Update(val, index));
    },
  };
};
export default connect(null, mapDispatchToProps)(Input);
