import PropTypes from "prop-types";

const Vuesaxoutlinebox = ({ className = "" }) => {
  return (
    <div
      style={{
        borderRadius: "100px",
        backgroundColor: "#221f1b",
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
        src="/vuesaxoutlinebox.svg"
      />
    </div>
  );
};

Vuesaxoutlinebox.propTypes = {
  className: PropTypes.string,
};

export default Vuesaxoutlinebox;
