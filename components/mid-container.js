import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const MidContainer = ({ className = "", propMargin }) => {
  const nowItWillStyle = useMemo(() => {
    return {
      ...getStyleValue("margin", propMargin),
    };
  }, [propMargin]);

  return (
    <div
      style={{
        alignSelf: "stretch",
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
      }}
      className={className}
    >
      <div
        style={{
          width: "70.5em",
          borderRadius: "24px",
          backgroundColor: "#cf2830",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "3em 1.25em 3em 3em",
          boxSizing: "border-box",
          gap: "2.5em",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <div
          style={{
            width: "70.5em",
            height: "22em",
            position: "relative",
            borderRadius: "24px",
            backgroundColor: "#cf2830",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <p
          style={{
            margin: "0",
            width: "13.219em",
            position: "relative",
            fontSize: "2em",
            lineHeight: "1.25em",
            fontWeight: "600",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "2",
            ...nowItWillStyle,
          }}
        >
          Now it will be easier to order our amazing hand made sushi from
          directly from your mobile phone.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1em",
            maxWidth: "100%",
            zIndex: "2",
          }}
        >
          <img
            style={{
              alignSelf: "stretch",
              width: "11.494em",
              position: "relative",
              maxHeight: "100%",
              objectFit: "cover",
              minHeight: "3.5em",
            }}
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <img
            style={{
              alignSelf: "stretch",
              width: "11.494em",
              position: "relative",
              maxHeight: "100%",
              objectFit: "cover",
              minHeight: "3.5em",
            }}
            loading="lazy"
            alt=""
            src="/image-121@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

MidContainer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMargin: PropTypes.any,
};

export default MidContainer;
