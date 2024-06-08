import FrameComponent7 from "../components/frame-component7";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent10 from "../components/frame-component10";
import PageFooter from "../components/page-footer";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#f2e9dd",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "2.938em",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <section
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "1.5em 0em 3em 2.5em",
          boxSizing: "border-box",
          gap: "0.875em",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "90em",
            height: "39.688em",
            position: "relative",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <FrameComponent7 />
        <FrameComponent8 />
        <div
          style={{
            width: "6.25em",
            height: "6.25em",
            position: "relative",
            overflow: "hidden",
            flexShrink: "0",
            display: "none",
          }}
        />
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0em 2.5em 2.063em",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "5em",
            maxWidth: "100%",
          }}
        >
          <FrameComponent6 />
          <FrameComponent9 />
        </div>
      </section>
      <img
        style={{
          width: "33.375em",
          height: "23.313em",
          position: "absolute",
          margin: "0",
          right: "12.875em",
          bottom: "27.375em",
          borderRadius: "24px 24px 0px 0px",
          objectFit: "cover",
          zIndex: "2",
        }}
        loading="lazy"
        alt=""
        src="/image-10@2x.png"
      />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0em 0em 3.375em",
          boxSizing: "border-box",
          gap: "5em",
          maxWidth: "100%",
        }}
      >
        <FrameComponent5 />
        <FrameComponent10 />
      </section>
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
      >
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
              width: "70.5em",
              borderRadius: "24px",
              backgroundColor: "#cf2830",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "3em 1.25em 3em 3em",
              boxSizing: "border-box",
              gap: "2.5em",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                width: "70.5em",
                height: "22em",
                position: "relative",
                borderRadius: "24px",
                backgroundColor: "#cf2830",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <p
              style={{
                margin: "0",
                width: "13.219em",
                position: "relative",
                fontSize: "2em",
                lineHeight: "1.25em",
                fontWeight: "600",
                display: "inline-block",
                maxWidth: "100%",
                zIndex: "2",
              }}
            >
              Now it will be easier to order our amazing hand made sushi from
              directly from your mobile phone.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1em",
                maxWidth: "100%",
                zIndex: "2",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  width: "11.494em",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  minHeight: "3.5em",
                }}
                alt=""
                src="/image-11@2x.png"
              />
              <img
                style={{
                  alignSelf: "stretch",
                  width: "11.494em",
                  position: "relative",
                  maxHeight: "100%",
                  objectFit: "cover",
                  minHeight: "3.5em",
                }}
                alt=""
                src="/image-12@2x.png"
              />
            </div>
          </div>
        </div>
        <PageFooter propMarginTop="-9em" />
      </section>
    </div>
  );
};

export default Home;
