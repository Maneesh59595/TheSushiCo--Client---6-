import Vuesaxoutlinetruck from "./vuesaxoutlinetruck";
import Vuesaxoutlinebox from "./vuesaxoutlinebox";
import PropTypes from "prop-types";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "3.375em",
        maxWidth: "100%",
        textAlign: "left",
        color: "#221f1b",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <div
        style={{
          width: "36.375em",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0em 0em 0.563em",
          boxSizing: "border-box",
          minWidth: "36.375em",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "2em",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          <div
            style={{
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(34, 31, 27, 0.2)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                backgroundColor: "#fff7ec",
                border: "1px solid #cf2830",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.875em 1.625em",
                gap: "1em",
              }}
            >
              <Vuesaxoutlinetruck />
              <b
                style={{
                  position: "relative",
                  fontSize: "1em",
                  fontWeight: "600",
                  display: "inline-block",
                  minWidth: "3.125em",
                }}
              >
                Deliver
              </b>
            </div>
            <div
              style={{
                boxShadow: "0px 0px 20px 2px rgba(207, 40, 48, 0.2) inset",
                borderRadius: "0px 20px 20px 0px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "1em 1.688em",
                gap: "1em",
                zIndex: "1",
                marginLeft: "-0.062em",
              }}
            >
              <Vuesaxoutlinebox />
              <b
                style={{
                  position: "relative",
                  fontSize: "1em",
                  fontWeight: "600",
                  display: "inline-block",
                  minWidth: "3.125em",
                }}
              >
                Collect
              </b>
            </div>
          </div>
          <h1
            style={{
              margin: "0",
              height: "2.406em",
              position: "relative",
              fontSize: "4em",
              fontWeight: "600",
              fontFamily: "inherit",
              display: "inline-block",
            }}
          >
            <p style={{ margin: "0" }}>Fresh sushi now</p>
            <p style={{ margin: "0" }}>
              <span>{`available in `}</span>
              <span style={{ color: "#cf2830" }}>minutes!</span>
            </p>
          </h1>
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "24px",
              border: "1px solid #f2e9dd",
              boxSizing: "border-box",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0.75em 1.875em 0em 0em",
              position: "relative",
              gap: "0.5em",
              minHeight: "8.188em",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: "20px",
                backgroundColor: "#f2e9dd",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "100%",
                  gap: "1.25em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "0.25em",
                    }}
                  >
                    <img
                      style={{
                        height: "1.25em",
                        width: "1.25em",
                        position: "relative",
                        minHeight: "1.25em",
                      }}
                      loading="lazy"
                      alt=""
                      src="/vuesaxboldgps.svg"
                    />
                    <b
                      style={{
                        position: "relative",
                        fontSize: "1em",
                        fontWeight: "600",
                        display: "inline-block",
                        minWidth: "2.688em",
                      }}
                    >
                      Home
                    </b>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      fontSize: "0.875em",
                      fontWeight: "500",
                    }}
                  >
                    4545 Dudley Motorway, Lake Darleen, OH 99804-7612
                  </div>
                </div>
                <b
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "#cf2830",
                    display: "inline-block",
                    minWidth: "3.563em",
                  }}
                >
                  Change
                </b>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                margin: "0",
                position: "absolute",
                top: "4.063em",
                left: "calc(50% - 291px)",
                borderRadius: "20px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "100%",
                gap: "0.5em",
              }}
            >
              <div
                style={{
                  width: "25.875em",
                  borderRadius: "20px 0px 0px 20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1.5em 13.938em 1.5em 1em",
                  boxSizing: "border-box",
                  gap: "0.75em",
                  maxWidth: "100%",
                }}
              >
                <img
                  style={{
                    height: "1.125em",
                    width: "1.125em",
                    position: "relative",
                    minHeight: "1.125em",
                  }}
                  alt=""
                  src="/vector.svg"
                />
                <input
                  style={{
                    width: "calc(100% - 257px)",
                    border: "none",
                    outline: "none",
                    fontWeight: "500",
                    fontFamily: "Urbanist",
                    fontSize: "0.875em",
                    backgroundColor: "transparent",
                    height: "1.214em",
                    flex: "1",
                    position: "relative",
                    color: "#221f1b",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "6.214em",
                    padding: "0",
                  }}
                  placeholder="Search food at SushiCo"
                  type="text"
                />
              </div>
              <button
                style={{
                  cursor: "pointer",
                  border: "1px solid #f2e9dd",
                  padding: "1.375em 3.313em",
                  backgroundColor: "#cf2830",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "3.188em",
                  }}
                >
                  Search
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        style={{
          height: "30.813em",
          flex: "1",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          objectFit: "contain",
          minWidth: "31.063em",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/image-6@2x.png"
      />
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
