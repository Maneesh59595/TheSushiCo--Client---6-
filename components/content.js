import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "2.5em 2.5em 6.313em",
        boxSizing: "border-box",
        position: "relative",
        gap: "6em",
        maxWidth: "100%",
        textAlign: "left",
        color: "#221f1b",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <div
        style={{
          width: "93.063em",
          height: "100%",
          position: "absolute",
          margin: "0",
          top: "0em",
          right: "-3.062em",
          bottom: "0em",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0em",
            left: "0em",
            backgroundColor: "#fff",
            width: "100%",
            height: "100%",
          }}
        />
        <img
          style={{
            position: "absolute",
            top: "1.5em",
            left: "2.5em",
            width: "7.75em",
            height: "3.5em",
            objectFit: "contain",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/image-31@2x.png"
        />
        <img
          style={{
            position: "absolute",
            top: "18.844em",
            left: "83.25em",
            width: "0.188em",
            height: "0.375em",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/vector-1.svg"
        />
      </div>
      <div
        style={{
          width: "53.375em",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1.25em",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "21.719em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0.125em 0em 0em",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <nav
            style={{
              margin: "0",
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
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
                color: "inherit",
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
                width: "3.563em",
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
                width: "4.188em",
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.5em",
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
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0em 0em 0.5em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <h1
          style={{
            margin: "0",
            position: "relative",
            fontSize: "4em",
            fontWeight: "600",
            fontFamily: "inherit",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          <p style={{ margin: "0" }}>Reach out to</p>
          <p style={{ margin: "0", color: "#cf2830" }}>The SushiCo.</p>
        </h1>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            marginTop: "-1.187em",
            color: "#cf2830",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1.188em",
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
                position: "relative",
                fontSize: "1em",
                fontWeight: "500",
                color: "#221f1b",
                display: "inline-block",
                minWidth: "3.563em",
                zIndex: "1",
              }}
            >
              Contact
            </div>
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
          padding: "0em 1.25em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "45.5em",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "3.5em",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0em 2em",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5em",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "2em",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    borderRadius: "20px",
                    backgroundColor: "rgba(34, 31, 27, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "1.25em 1.5em",
                    boxSizing: "border-box",
                    minWidth: "12.813em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "2.688em",
                    }}
                  >
                    Name
                  </b>
                </div>
                <div
                  style={{
                    flex: "1",
                    borderRadius: "20px",
                    backgroundColor: "rgba(34, 31, 27, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "1.25em 1.5em",
                    boxSizing: "border-box",
                    minWidth: "12.813em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "2.875em",
                    }}
                  >
                    Email*
                  </b>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "2em",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    borderRadius: "20px",
                    backgroundColor: "rgba(34, 31, 27, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    padding: "1.25em 1.5em",
                    boxSizing: "border-box",
                    minWidth: "12.813em",
                    whiteSpace: "nowrap",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "6.5em",
                    }}
                  >
                    Phone number
                  </b>
                </div>
                <div
                  style={{
                    flex: "1",
                    borderRadius: "20px",
                    backgroundColor: "rgba(34, 31, 27, 0.1)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25em 1.5em",
                    boxSizing: "border-box",
                    minWidth: "12.813em",
                    whiteSpace: "nowrap",
                    gap: "1.25em",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: "1em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "6.625em",
                    }}
                  >
                    Choose a store
                  </div>
                  <img
                    style={{
                      height: "0.313em",
                      width: "0.625em",
                      position: "relative",
                      objectFit: "contain",
                    }}
                    alt=""
                    src="/vector-1-1.svg"
                  />
                </div>
              </div>
              <textarea
                style={{
                  border: "none",
                  backgroundColor: "rgba(34, 31, 27, 0.1)",
                  height: "8.75em",
                  width: "auto",
                  outline: "none",
                  alignSelf: "stretch",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1.25em 1.5em",
                  boxSizing: "border-box",
                  fontFamily: "Urbanist",
                  fontWeight: "600",
                  fontSize: "1em",
                  color: "#221f1b",
                }}
                placeholder="Comment"
                rows={7}
                cols={33}
              />
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "1.25em 2.5em",
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
                    minWidth: "3.25em",
                  }}
                >
                  Submit
                </b>
              </button>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              borderRadius: "20px",
              backgroundColor: "rgba(34, 31, 27, 0.1)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "2em",
              boxSizing: "border-box",
              gap: "2em",
              maxWidth: "100%",
              zIndex: "1",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: "0",
                position: "relative",
                fontSize: "2.5em",
                fontWeight: "600",
                fontFamily: "inherit",
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              You can also contact us on
            </h1>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "2em",
              }}
            >
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "1.25em 4.625em",
                  backgroundColor: "#cf2830",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5em",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  style={{
                    height: "1.5em",
                    width: "1.481em",
                    position: "relative",
                    objectFit: "contain",
                  }}
                  alt=""
                  src="/image-16@2x.png"
                />
                <div
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  Chat on Whatsapp
                </div>
              </button>
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "1.25em",
                  backgroundColor: "#fff",
                  flex: "1",
                  borderRadius: "20px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  boxSizing: "border-box",
                  gap: "0.5em",
                  minWidth: "12.813em",
                  whiteSpace: "nowrap",
                }}
              >
                <img
                  style={{
                    height: "1.5em",
                    width: "1.5em",
                    position: "relative",
                  }}
                  alt=""
                  src="/vuesaxboldcall1.svg"
                />
                <b
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#221f1b",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "2.938em",
                  }}
                >
                  Call us
                </b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
