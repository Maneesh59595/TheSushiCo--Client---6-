import FrameComponent4 from "./frame-component4";
import PropTypes from "prop-types";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2.5em",
        textAlign: "left",
        color: "#221f1b",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "1.25em",
        }}
      >
        <div
          style={{
            borderLeft: "5px solid #cf2830",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0em 0em 0em 0.688em",
            gap: "0.5em",
          }}
        >
          <b
            style={{
              position: "relative",
              fontSize: "2.5em",
              fontWeight: "600",
            }}
          >
            Our menu
          </b>
          <div
            style={{
              position: "relative",
              fontSize: "1.125em",
              fontWeight: "500",
            }}
          >
            Explore list of all the sushi items
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            padding: "0em 0em 0.563em",
          }}
        >
          <button
            style={{
              cursor: "pointer",
              border: "1px solid #cf2830",
              padding: "1.125em 2.438em",
              backgroundColor: "transparent",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              whiteSpace: "nowrap",
            }}
          >
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                fontFamily: "Urbanist",
                color: "#cf2830",
                textAlign: "left",
                display: "inline-block",
                minWidth: "4.875em",
              }}
            >
              View more
            </b>
          </button>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "grid",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "2em",
          gridTemplateColumns: "repeat(6, minmax(150px, 1fr))",
        }}
      >
        <FrameComponent4 image7="/image-7@2x.png" hotMeals="Hot meals" />
        <FrameComponent4
          image7="/image-7-1@2x.png"
          hotMeals="Poke bowl"
          propPadding="0em 3.688em"
          propMinWidth="4.556em"
        />
        <FrameComponent4
          image7="/image-71@2x.png"
          hotMeals="Hosomaki"
          propPadding="0em 3.75em"
          propMinWidth="4.389em"
        />
        <FrameComponent4
          image7="/image-7-3@2x.png"
          hotMeals="Urumaki"
          propPadding="0em 4.125em"
          propMinWidth="3.778em"
        />
        <FrameComponent4
          image7="/image-7-4@2x.png"
          hotMeals="Nigri"
          propPadding="0em 1.25em"
          propMinWidth="2.111em"
        />
        <FrameComponent4
          image7="/image-72@2x.png"
          hotMeals="Crunch"
          propPadding="0em 4.438em"
          propMinWidth="3.222em"
        />
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
