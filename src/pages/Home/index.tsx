import { background } from "../../styles/global.style";

interface StyleProps {
  [key: string]: (...args: any) => React.CSSProperties;
}

export default function Home() {
  const HomeStyle: React.CSSProperties = {
    overflowX: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const HeaderStyle: StyleProps = {
    base: (args) => ({
      display: "flex",
      flexDirection: "row",
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "60px",
      height: "10vh",
      width: "100%",
      backgroundColor: args ? args.backgroundColor : "white",
    }),
    links: () => ({
      display: "flex",
      flexDirection: "row",
      gap: "20px",
    }),
    link: (args) => ({
      fontSize: "12px",
      height: "20px",
      cursor: "pointer",
      borderBottom:
        args && args.active
          ? `2px solid ${background.green.backgroundColor}`
          : "2px solid transparent",
    }),
    buttonEntrar: () => ({
      ...background.yellow,
      position: "absolute",
      display: "flex",
      textTransform: "uppercase",
      fontWeight: "600",
      color: background.brown.backgroundColor,
      fontSize: "0.8em",
      alignItems: "center",
      justifyContent: "center",
      width: "130px",
      height: "32px",
      top: "25%",
      right: "8vw",
      borderRadius: "5px",
      border: `1px solid ${background.yellowDark.backgroundColor}`,
    }),
  };

  const BannerStyle: StyleProps = {
    base: () => ({
      display: "flex",
      flexDirection: "column",
    }),
    banner() {
      return {
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        minHeight: "200px",
        height: "480px",
        backgroundImage: `url(${require("../../icons/png/BannerPrincipal.png")})`,
        // backgroundSize: "100%",
        // backgroundSize: "100% 100%",
        backgroundSize: "cover",
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundPosition: "100% 100%",
        width: "100vw",
      };
    },
  };

  return (
    <div style={HomeStyle}>
      <div style={HeaderStyle.base({ backgroundColor: "#FFF" })}>
        <div style={HeaderStyle.links()}>
          <span style={HeaderStyle.link({ active: true })}>
            PÁGINA PRINCIPAL
          </span>
          <span style={HeaderStyle.link()}>MARKETINPLACE</span>
          <span style={HeaderStyle.link()}>+FOOD</span>
          <span style={HeaderStyle.link()}>ANUNCIOS DO BAIRRO</span>
          <span style={HeaderStyle.link()}>CONSULTAR CUPOM</span>
          <span style={HeaderStyle.link()}>BLOG</span>
        </div>
        <div style={HeaderStyle.buttonEntrar()}>Entrar</div>
      </div>
      <div style={BannerStyle.base()}>
        <div style={BannerStyle.banner()}>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
      <div>direto com comerciante</div>
      <div>+food</div>
      <div>anuncios do bairro</div>
      <div>footer</div>
    </div>
  );
}
