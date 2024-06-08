import FrameComponent3 from "./frame-component3";
import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#221f1b",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "3.5em 2.5em",
        boxSizing: "border-box",
        position: "relative",
        gap: "2.5em",
        maxWidth: "100%",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <div
        style={{
          width: "90em",
          height: "41.813em",
          position: "relative",
          backgroundColor: "#221f1b",
          display: "none",
          maxWidth: "100%",
          zIndex: "0",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1.5em",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            height: "3.688em",
            width: "4em",
            borderRadius: "20px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25em 1.188em",
            transform: " rotate(180deg)",
            zIndex: "1",
          }}
        >
          <img
            style={{
              height: "1.5em",
              width: "1.5em",
              position: "relative",
              transform: " rotate(-180deg)",
            }}
            loading="lazy"
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
        <button
          style={{
            cursor: "pointer",
            border: "1px solid #fff",
            padding: "1.125em 2.438em",
            backgroundColor: "transparent",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            whiteSpace: "nowrap",
            zIndex: "1",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              position: "relative",
              fontSize: "1em",
              fontWeight: "600",
              fontFamily: "Urbanist",
              color: "#fff",
              textAlign: "left",
              display: "inline-block",
              minWidth: "4.875em",
            }}
          >
            View more
          </a>
        </button>
        <div
          style={{
            height: "3.688em",
            width: "4em",
            borderRadius: "20px",
            border: "1px solid #fff",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.25em 1.188em",
            zIndex: "1",
          }}
        >
          <img
            style={{ height: "1.5em", width: "1.5em", position: "relative" }}
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0em 3.563em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "58.5em",
            display: "grid",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0em 0em 0em 0em",
            boxSizing: "border-box",
            gap: "2em",
            maxWidth: "100%",
            gridTemplateColumns: "repeat(3, minmax(237px, 1fr))",
            zIndex: "3",
          }}
        >
          <FrameComponent3 rectangle6="/rectangle-6@2x.png" />
          <FrameComponent3
            rectangle6="/rectangle-61@2x.png"
            propBorderRadius="unset"
          />
          <FrameComponent3
            rectangle6="/rectangle-62@2x.png"
            propBorderRadius="unset"
          />
        </div>
      </div>
      <div
        style={{
          width: "62.719em",
          margin: "0",
          position: "absolute",
          height: "100%",
          top: "0em",
          bottom: "0em",
          left: "0em",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0em 2.688em",
          boxSizing: "border-box",
          rowGap: "20px",
          maxWidth: "100%",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
            margin: "0",
            top: "0em",
            right: "0em",
            bottom: "0em",
            left: "0em",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
            zIndex: "1",
          }}
          alt=""
          src="/clip-path-group@2x.png"
        />
        <div
          style={{
            width: "26.813em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "3.875em 0em 0em",
            boxSizing: "border-box",
            minWidth: "26.813em",
            maxWidth: "100%",
            flexShrink: "0",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "10.188em",
              flexShrink: "0",
              debugCommit: "bf4bc93",
            }}
          >
            <div
              style={{
                borderLeft: "5px solid #cf2830",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0em 0em 0em 0.688em",
                zIndex: "2",
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
                Popular items
              </h1>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1.5em",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "3em",
                  fontWeight: "600",
                  fontFamily: "inherit",
                  zIndex: "4",
                }}
              >
                Top most selling Sushi foods at SuchiCo.
              </h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0.063em 0em 0em",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: "1.125em",
                      fontWeight: "500",
                      display: "inline-block",
                      minWidth: "5.722em",
                      zIndex: "2",
                    }}
                  >
                    Review us on
                  </div>
                </div>
                <img
                  style={{
                    alignSelf: "stretch",
                    width: "6.175em",
                    position: "relative",
                    maxHeight: "100%",
                    overflow: "hidden",
                    flexShrink: "0",
                    minHeight: "1.5em",
                    zIndex: "2",
                  }}
                  loading="lazy"
                  alt=""
                  src="/logowhite-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "41.813em",
            width: "33.25em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0em 0em 0em 0em",
            boxSizing: "border-box",
            minWidth: "33.25em",
            maxWidth: "100%",
            flexShrink: "0",
          }}
        >
          <div
            style={{
              marginLeft: "-4.937em",
              width: "38.188em",
              flex: "1",
              position: "relative",
              background:
                "linear-gradient(-90deg, rgba(34, 31, 27, 0), #221f1b)",
              transform: " rotate(180deg)",
              flexShrink: "0",
              debugCommit: "bf4bc93",
              maxWidth: "115%",
              zIndex: "2",
            }}
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
