import PropTypes from "prop-types";
import { useReducer } from "react";
import "./style.css";

export const Submit = ({ text = "SUBMIT", property1, press }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "variant-1",
    press: press || false,
  });

  return (
    <div
      className={`submit ${state.property1}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`SUBMIT property-1-${state.property1} press-${state.press}`}>{text}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.press === false && state.property1 === "variant-2") {
    switch (action) {
      case "mouse_leave":
        return {
          press: false,
          property1: "variant-1",
        };

      case "click":
        return {
          press: true,
          property1: "variant-2",
        };
    }
  }

  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

Submit.propTypes = {
  text: PropTypes.string,
  property1: PropTypes.oneOf(["variant-2", "variant-1"]),
  press: PropTypes.bool,
};
