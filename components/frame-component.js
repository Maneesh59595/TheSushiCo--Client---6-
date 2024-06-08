import MidContainer from "./mid-container";
import FrameComponent1 from "./frame-component1";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        maxWidth: "100%",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <MidContainer />
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#221f1b",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "11.5em 0em 0em 2.5em",
          boxSizing: "border-box",
          gap: "2.5em",
          maxWidth: "100%",
          marginTop: "-9em",
        }}
      >
        <div
          style={{
            width: "90em",
            height: "36.375em",
            position: "relative",
            backgroundColor: "#221f1b",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <FrameComponent1 />
        <div
          style={{
            width: "84.938em",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0em 1.25em",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "1em",
              maxWidth: "100%",
            }}
          >
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "2.688em",
                zIndex: "1",
              }}
            >
              Home
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "3.188em",
                zIndex: "1",
              }}
            >
              Search
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "3.563em",
                zIndex: "1",
              }}
            >
              Contact
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                zIndex: "1",
              }}
            >{`Nutrition & Allergens`}</div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "2.063em",
                zIndex: "1",
              }}
            >
              Intro
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "6.125em",
                zIndex: "1",
              }}
            >
              Privacy policy
            </b>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "7.375em",
                zIndex: "1",
              }}
            >
              Terms of service
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.469em 0em 0em",
              }}
            >
              <div
                style={{
                  width: "0.25em",
                  height: "0.25em",
                  position: "relative",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: "1",
                }}
              />
            </div>
            <b
              style={{
                position: "relative",
                fontSize: "1em",
                fontWeight: "600",
                display: "inline-block",
                minWidth: "1.875em",
                zIndex: "1",
              }}
            >
              FAQ
            </b>
          </div>
        </div>
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
          }}
        >
          <img
            style={{
              height: "1.063em",
              width: "8.875em",
              position: "relative",
              objectFit: "cover",
              mixBlendMode: "color-dodge",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-14@2x.png"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.438em",
            maxWidth: "100%",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <div
            style={{
              width: "85.063em",
              height: "0.063em",
              position: "relative",
              borderTop: "1px solid #fff",
              boxSizing: "border-box",
              opacity: "0.2",
              maxWidth: "100%",
              zIndex: "1",
            }}
          />
          <div
            style={{
              width: "86.263em",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "0em 1.25em 0em 0em",
              boxSizing: "border-box",
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
                padding: "0.188em 0em 0em",
              }}
            >
              <div
                style={{
                  position: "relative",
                  fontSize: "0.75em",
                  fontWeight: "600",
                  display: "inline-block",
                  minWidth: "8.833em",
                  flexShrink: "0",
                  debugCommit: "bf4bc93",
                  zIndex: "1",
                }}
              >
                © 2024, Thesushico
              </div>
            </div>
            <img
              style={{
                alignSelf: "stretch",
                width: "21.575em",
                position: "relative",
                maxHeight: "100%",
                objectFit: "cover",
                mixBlendMode: "color-dodge",
                minHeight: "1.25em",
                flexShrink: "0",
                debugCommit: "bf4bc93",
                maxWidth: "100%",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-13@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "0.063em",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              maxWidth: "100%",
            }}
          >
            <section
              style={{
                alignSelf: "stretch",
                width: "84.188em",
                position: "relative",
                backgroundColor: "#fff",
                maxWidth: "100%",
                zIndex: "1",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
