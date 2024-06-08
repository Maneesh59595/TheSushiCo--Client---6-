import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent3 = ({ className = "", rectangle6, propBorderRadius }) => {
  const foodImageBackgroundStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", propBorderRadius),
    };
  }, [propBorderRadius]);

  return (
    <div
      style={{
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0.25em",
        gap: "1em",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <img
        loading="lazy"
        alt=""
        src={rectangle6}
        style={{
          alignSelf: "stretch",
          height: "18.75em",
          position: "relative",
          borderRadius: "4px",
          maxWidth: "100%",
          overflow: "hidden",
          flexShrink: "0",
          objectFit: "cover",
          ...foodImageBackgroundStyle,
        }}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.5em",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5em",
          }}
        >
          <div
            style={{
              flex: "1",
              position: "relative",
              fontSize: "1.125em",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "8.444em",
            }}
          >
            Chicken katsu curry rice
          </div>
          <div
            style={{
              borderRadius: "4px",
              backgroundColor: "#126849",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "0.25em",
              gap: "0.25em",
            }}
          >
            <img
              style={{
                height: "0.75em",
                width: "0.75em",
                position: "relative",
                minHeight: "0.75em",
              }}
              loading="lazy"
              alt=""
              src="/star-2.svg"
            />
            <div
              style={{
                height: "0.688em",
                position: "relative",
                fontSize: "1em",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                minWidth: "1.313em",
              }}
            >
              4.2
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5em",
          }}
        >
          <b
            style={{
              position: "relative",
              fontSize: "1.5em",
              fontWeight: "600",
              display: "inline-block",
              minWidth: "4.958em",
            }}
          >
            £10.50 GBP
          </b>
          <s
            style={{
              position: "relative",
              fontSize: "1.125em",
              textDecoration: "line-through",
              color: "rgba(255, 255, 255, 0.5)",
              display: "inline-block",
              minWidth: "5.111em",
            }}
          >
            £25.50 GBP
          </s>
        </div>
      </div>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          padding: "1.25em 2.5em",
          backgroundColor: "#cf2830",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            position: "relative",
            fontSize: "1em",
            fontWeight: "600",
            fontFamily: "Urbanist",
            color: "#fff",
            textAlign: "left",
            display: "inline-block",
            minWidth: "5.125em",
          }}
        >
          Add to cart
        </div>
      </button>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  rectangle6: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
};

export default FrameComponent3;
