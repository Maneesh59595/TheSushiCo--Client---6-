import PropTypes from "prop-types";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <header
      style={{
        width: "86.25em",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "0em 1.25em 0em 0em",
        boxSizing: "border-box",
        top: "0",
        zIndex: "99",
        position: "sticky",
        gap: "1.25em",
        maxWidth: "100%",
      }}
      className={className}
    >
      <img
        style={{
          height: "3.5em",
          width: "7.75em",
          position: "relative",
          objectFit: "cover",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/image-31@2x.png"
      />
      <nav
        style={{
          margin: "0",
          width: "25em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "1.125em 0em 0em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <nav
          style={{
            margin: "0",
            width: "21.813em",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            maxWidth: "100%",
            gap: "1.25em",
            textAlign: "left",
            color: "#221f1b",
            fontFamily: "Urbanist",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              color: "#cf2830",
              display: "inline-block",
              minWidth: "2.688em",
              zIndex: "1",
            }}
          >
            Home
          </a>
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              color: "inherit",
              display: "inline-block",
              minWidth: "2.5em",
              zIndex: "1",
            }}
          >
            Menu
          </a>
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              color: "inherit",
              display: "inline-block",
              minWidth: "3.563em",
              zIndex: "1",
            }}
          >
            Contact
          </a>
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              color: "inherit",
              display: "inline-block",
              minWidth: "2.875em",
              zIndex: "1",
            }}
          >
            Stores
          </a>
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              color: "inherit",
              display: "inline-block",
              minWidth: "4.188em",
              zIndex: "1",
            }}
          >
            Franchise
          </a>
        </nav>
      </nav>
      <div
        style={{
          width: "4.5em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "1em 0em 0em",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1.25em",
          }}
        >
          <img
            style={{
              height: "1.5em",
              width: "1.5em",
              position: "relative",
              minHeight: "1.5em",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/vuesaxboldprofilecircle.svg"
          />
          <img
            style={{
              height: "1.5em",
              width: "1.5em",
              position: "relative",
              minHeight: "1.5em",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/vuesaxboldbag.svg"
          />
        </div>
      </div>
    </header>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
