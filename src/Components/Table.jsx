import React from "react";
import { connect } from "react-redux";
import { Delete } from "../Action/Add_Data";

function Table(props, update) {
  return (
    <div>
      {props.data.map((item, index) => {
        return (
          <div
            style={{
              backgroundColor: "#D3D3D3",
              marginTop: "5px",
              height: "100px",
              marginRight: "10%",
            }}
          >
            <h5
              style={{
                verticalAlign: "middle",
                paddingLeft: "10px",
                display: "table-cell",
              }}
            >
              {item}
            </h5>
            <div style={{ float: "right" }}>
              <button
                type="button"
                className="btn"
                style={{
                  background: "#8A2BE2",
                  color: "white",
                  marginRight: "10px",
                }}
                onClick={() => {
                  props.update(item, index);
                  props.ChangeList(index);
                }}
              >
                Edit
              </button>

              <button
                type="button"
                className="btn"
                style={{
                  background: "#8A2BE2",
                  color: "white",
                  marginRight: "10px",
                }}
                onClick={() => {
                  props.ChangeList(index);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    data: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    ChangeList: (response) => {
      console.log("table", response);
      dispatch(Delete(response));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
