import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const OrderPromoParent = ({
  className = "",
  image12,
  orderPromoImageBottom,
}) => {
  const orderPromoParentStyle = useMemo(() => {
    return {
      ...getStyleValue("bottom", orderPromoImageBottom),
    };
  }, [orderPromoImageBottom]);

  return (
    <div
      style={{
        width: "70.5em",
        margin: "0",
        position: "absolute",
        bottom: "27.375em",
        left: "calc(50% - 564px)",
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
        zIndex: "2",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
        ...orderPromoParentStyle,
      }}
      className={className}
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
          zIndex: "3",
        }}
      >
        Now it will be easier to order our amazing hand made sushi from directly
        from your mobile phone.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1em",
          maxWidth: "100%",
          zIndex: "3",
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
          src={image12}
        />
      </div>
    </div>
  );
};

OrderPromoParent.propTypes = {
  className: PropTypes.string,
  image12: PropTypes.string,

  /** Style props */
  orderPromoImageBottom: PropTypes.any,
};

export default OrderPromoParent;
