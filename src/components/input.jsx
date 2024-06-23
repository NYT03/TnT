import PropTypes from "prop-types";

import { useReducer } from "react";
import "styles/styles.css";

export const InputField = ({ text = "TEXT", property1, divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "non-click",
  });

  return (
    <div
      className={`input-field ${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "non-click" && <div className={`TEXT ${divClassName}`}>{text}</div>}

      {["null", "onclick"].includes(state.property1) && (
        <>
          <img className="line" alt="Line" src={state.property1 === "null" ? "image.svg" : "line-14.svg"} />
          <div className="frame">
            <div className="text-wrapper">{text}</div>
          </div>
        </>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "onclick",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "non-click",
      };
  }

  return state;
}

InputField.propTypes = {
  text: PropTypes.string,
  property1: PropTypes.oneOf(["null", "non-click", "onclick"]),
};
