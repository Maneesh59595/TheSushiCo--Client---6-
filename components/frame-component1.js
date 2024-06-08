import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent1 = ({ className = "", propWidth, propAlignSelf }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      style={{
        width: "85em",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0em 1.25em",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
        ...frameDiv1Style,
      }}
      className={className}
    >
      <div
        style={{
          width: "70.5em",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "3em",
          boxSizing: "border-box",
          maxWidth: "100%",
          gap: "1.25em",
          zIndex: "1",
        }}
      >
        <div
          style={{
            borderLeft: "5px solid #cf2830",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0em 0em 0em 0.688em",
            gap: "0.5em",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              margin: "0",
              position: "relative",
              fontSize: "2.5em",
              fontWeight: "600",
              fontFamily: "inherit",
            }}
          >
            Subscribe to our emails
          </h1>
          <div
            style={{
              position: "relative",
              fontSize: "1.125em",
              fontWeight: "500",
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            Be the first to know about exclusive offers.
          </div>
        </div>
        <div
          style={{
            width: "23.813em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.594em 0em 0em",
            boxSizing: "border-box",
            maxWidth: "100%",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "1.25em 1.5em",
              gap: "1.25em",
            }}
          >
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "6.313em",
              }}
            >
              Email address
            </b>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                color: "#fff",
                display: "inline-block",
                minWidth: "3.25em",
              }}
            >
              Submit
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default FrameComponent1;
