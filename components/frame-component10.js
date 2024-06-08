import PropTypes from "prop-types";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0em 2.5em",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        color: "#221f1b",
        fontFamily: "Urbanist",
      }}
      className={className}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "2.188em",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            maxWidth: "100%",
            gap: "1.25em",
          }}
        >
          <div
            style={{
              width: "23.5em",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "0em 0em 0.313em",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                borderLeft: "5px solid #cf2830",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0em 0em 0em 0.688em",
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
                Desserts at SushiCo.
              </h1>
            </div>
          </div>
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
            <a
              style={{
                textDecoration: "none",
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
            </a>
          </button>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "grid",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2em",
            gridTemplateColumns: "repeat(4, minmax(237px, 1fr))",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25em",
                gap: "1em",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "18.75em",
                  position: "relative",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-63@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5em",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "0.5em",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      fontSize: "1.125em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "9.222em",
                    }}
                  >
                    Little moons mango cheese cake mochi (2 pieces)
                  </div>
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#126849",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "0.25em",
                      gap: "0.25em",
                      color: "#fff",
                    }}
                  >
                    <img
                      style={{
                        height: "0.75em",
                        width: "0.75em",
                        position: "relative",
                        minHeight: "0.75em",
                      }}
                      alt=""
                      src="/star-2.svg"
                    />
                    <div
                      style={{
                        height: "0.688em",
                        position: "relative",
                        fontSize: "1em",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "1.313em",
                      }}
                    >
                      4.2
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1.5em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "4.958em",
                    }}
                  >
                    £10.50 GBP
                  </b>
                  <s
                    style={{
                      position: "relative",
                      fontSize: "1.125em",
                      textDecoration: "line-through",
                      color: "rgba(34, 31, 27, 0.5)",
                      display: "inline-block",
                      minWidth: "5.111em",
                    }}
                  >
                    £25.50 GBP
                  </s>
                </div>
              </div>
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
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "5.125em",
                  }}
                >
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25em",
                gap: "1em",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "18.75em",
                  position: "relative",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-63@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5em",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "0.5em",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      fontSize: "1.125em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "9.222em",
                    }}
                  >
                    Little moons mango cheese cake mochi (2 pieces)
                  </div>
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#126849",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "0.25em",
                      gap: "0.25em",
                      color: "#fff",
                    }}
                  >
                    <img
                      style={{
                        height: "0.75em",
                        width: "0.75em",
                        position: "relative",
                        minHeight: "0.75em",
                      }}
                      alt=""
                      src="/star-2.svg"
                    />
                    <div
                      style={{
                        height: "0.688em",
                        position: "relative",
                        fontSize: "1em",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "1.313em",
                      }}
                    >
                      4.2
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1.5em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "4.958em",
                    }}
                  >
                    £10.50 GBP
                  </b>
                  <s
                    style={{
                      position: "relative",
                      fontSize: "1.125em",
                      textDecoration: "line-through",
                      color: "rgba(34, 31, 27, 0.5)",
                      display: "inline-block",
                      minWidth: "5.111em",
                    }}
                  >
                    £25.50 GBP
                  </s>
                </div>
              </div>
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
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "5.125em",
                  }}
                >
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25em",
                gap: "1em",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "18.75em",
                  position: "relative",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-63@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5em",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      fontSize: "1.125em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "9.222em",
                    }}
                  >
                    Little moons mango cheese cake mochi (2 pieces)
                  </div>
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#126849",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "0.25em",
                      gap: "0.25em",
                      color: "#fff",
                    }}
                  >
                    <img
                      style={{
                        height: "0.75em",
                        width: "0.75em",
                        position: "relative",
                        minHeight: "0.75em",
                      }}
                      alt=""
                      src="/star-2.svg"
                    />
                    <div
                      style={{
                        height: "0.688em",
                        position: "relative",
                        fontSize: "1em",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "1.313em",
                      }}
                    >
                      4.2
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1.5em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "4.958em",
                    }}
                  >
                    £10.50 GBP
                  </b>
                  <s
                    style={{
                      position: "relative",
                      fontSize: "1.125em",
                      textDecoration: "line-through",
                      color: "rgba(34, 31, 27, 0.5)",
                      display: "inline-block",
                      minWidth: "5.111em",
                    }}
                  >
                    £25.50 GBP
                  </s>
                </div>
              </div>
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
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "5.125em",
                  }}
                >
                  Add to cart
                </div>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                flex: "1",
                borderRadius: "6px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0.25em",
                gap: "1em",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "18.75em",
                  position: "relative",
                  borderRadius: "4px",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                }}
                alt=""
                src="/rectangle-63@2x.png"
              />
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "0.5em",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <div
                    style={{
                      flex: "1",
                      position: "relative",
                      fontSize: "1.125em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "9.222em",
                    }}
                  >
                    Little moons mango cheese cake mochi (2 pieces)
                  </div>
                  <div
                    style={{
                      borderRadius: "4px",
                      backgroundColor: "#126849",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      padding: "0.25em",
                      gap: "0.25em",
                      color: "#fff",
                    }}
                  >
                    <img
                      style={{
                        height: "0.75em",
                        width: "0.75em",
                        position: "relative",
                        minHeight: "0.75em",
                      }}
                      alt=""
                      src="/star-2.svg"
                    />
                    <div
                      style={{
                        height: "0.688em",
                        position: "relative",
                        fontSize: "1em",
                        fontWeight: "500",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "1.313em",
                      }}
                    >
                      4.2
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "0.5em",
                  }}
                >
                  <b
                    style={{
                      position: "relative",
                      fontSize: "1.5em",
                      fontWeight: "600",
                      display: "inline-block",
                      minWidth: "4.958em",
                    }}
                  >
                    £10.50 GBP
                  </b>
                  <s
                    style={{
                      position: "relative",
                      fontSize: "1.125em",
                      textDecoration: "line-through",
                      color: "rgba(34, 31, 27, 0.5)",
                      display: "inline-block",
                      minWidth: "5.111em",
                    }}
                  >
                    £25.50 GBP
                  </s>
                </div>
              </div>
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
                  whiteSpace: "nowrap",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    fontSize: "1em",
                    fontWeight: "600",
                    fontFamily: "Urbanist",
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: "5.125em",
                  }}
                >
                  Add to cart
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
