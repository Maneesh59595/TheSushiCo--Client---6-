import { useMemo } from "react";
import PropTypes from "prop-types";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const PageFooter = ({ className = "", propMarginTop }) => {
  const pageFooterStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <footer
      style={{
        alignSelf: "stretch",
        backgroundColor: "#221f1b",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "11.5em 2.438em 1.5em 2.5em",
        boxSizing: "border-box",
        gap: "1.438em",
        maxWidth: "100%",
        textAlign: "left",
        color: "#fff",
        fontFamily: "Urbanist",
        ...pageFooterStyle,
      }}
      className={className}
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
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0em 0.063em 1.063em 0em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "70.5em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2.5em",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "3em",
              boxSizing: "border-box",
              maxWidth: "100%",
              gap: "1.25em",
              zIndex: "1",
            }}
          >
            <div
              style={{
                borderLeft: "5px solid #cf2830",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0em 0em 0em 0.688em",
                gap: "0.5em",
                maxWidth: "100%",
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
                Subscribe to our emails
              </h1>
              <div
                style={{
                  position: "relative",
                  fontSize: "1.125em",
                  fontWeight: "500",
                  display: "inline-block",
                  maxWidth: "100%",
                }}
              >
                Be the first to know about exclusive offers.
              </div>
            </div>
            <div
              style={{
                width: "23.813em",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.594em 0em 0em",
                boxSizing: "border-box",
                maxWidth: "100%",
                color: "rgba(255, 255, 255, 0.5)",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  padding: "1.25em 1.5em",
                  gap: "1.25em",
                }}
              >
                <b
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    display: "inline-block",
                    minWidth: "6.313em",
                  }}
                >
                  Email address
                </b>
                <b
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    color: "#fff",
                    display: "inline-block",
                    minWidth: "3.25em",
                  }}
                >
                  Submit
                </b>
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0em 1.313em 0em 1.25em",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
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
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0em 1.25em",
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
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "0.063em",
          position: "relative",
          borderTop: "1px solid #fff",
          boxSizing: "border-box",
          opacity: "0.2",
          zIndex: "1",
        }}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          maxWidth: "100%",
          gap: "1.25em",
          color: "rgba(255, 255, 255, 0.5)",
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
            maxWidth: "100%",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/image-13@2x.png"
        />
      </div>
    </footer>
  );
};

PageFooter.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
};

export default PageFooter;
