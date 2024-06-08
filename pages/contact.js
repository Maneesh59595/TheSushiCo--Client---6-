import Content from "../components/content";
import Order from "../components/order";

const Contact = () => {
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
        padding: "0em 0em 0.625em",
        boxSizing: "border-box",
        lineHeight: "normal",
        letterSpacing: "normal",
      }}
    >
      <img
        style={{
          width: "33.375em",
          height: "23.313em",
          position: "absolute",
          margin: "0",
          right: "12.875em",
          bottom: "28em",
          borderRadius: "24px 24px 0px 0px",
          objectFit: "cover",
          zIndex: "2",
        }}
        loading="lazy"
        alt=""
        src="/image-10@2x.png"
      />
      <Content />
      <Order />
      <img
        style={{
          width: "20.313em",
          height: "30.438em",
          position: "absolute",
          margin: "0",
          top: "-0.187em",
          right: "14.063em",
          objectFit: "contain",
          zIndex: "2",
        }}
        alt=""
        src="/image-18@2x.png"
      />
    </div>
  );
};

export default Contact;
