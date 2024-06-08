import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent4 = ({
  className = "",
  image7,
  hotMeals,
  propPadding,
  propMinWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const hotMealsStyle = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1em",
        textAlign: "left",
        color: "#221f1b",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <img
        style={{
          width: "12.5em",
          height: "12.5em",
          position: "relative",
          borderRadius: "103.5px",
          objectFit: "cover",
        }}
        loading="lazy"
        alt=""
        src={image7}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0em 3.688em",
          ...frameDiv2Style,
        }}
      >
        <b
          style={{
            position: "relative",
            fontSize: "1.125em",
            fontWeight: "600",
            display: "inline-block",
            minWidth: "4.5em",
            ...hotMealsStyle,
          }}
        >
          {hotMeals}
        </b>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  image7: PropTypes.string,
  hotMeals: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default FrameComponent4;
