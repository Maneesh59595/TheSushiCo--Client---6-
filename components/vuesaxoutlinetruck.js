import PropTypes from "prop-types";

const Vuesaxoutlinetruck = ({ className = "" }) => {
  return (
    <div
      style={{
        borderRadius: "100px",
        backgroundColor: "#cf2830",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "8px",
      }}
      className={className}
    >
      <img
        style={{ width: "24px", position: "relative", height: "24px" }}
        alt=""
        src="/vuesaxoutlinetruck.svg"
      />
    </div>
  );
};

Vuesaxoutlinetruck.propTypes = {
  className: PropTypes.string,
};

export default Vuesaxoutlinetruck;
