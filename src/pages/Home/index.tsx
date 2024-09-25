import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { globalColors } from "../../styles/global.style";

interface StyleProps {
  [key: string]: (...args: any) => React.CSSProperties;
}

export default function Home() {
  const HomeStyle: React.CSSProperties = {
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const BannerStyle: StyleProps = {
    base: () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      gap: "20px",
      width: "100%",
      height: "25vh",
      // backgroundColor: "#7e2929",
    }),
    back() {
      return {
        background: "linear-gradient(180deg, #414141 0%, #A7A7A7 100%)",
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        top: 0,
        width: "100%",
        height: "70%",
      };
    },
    backDiv() {
      return {
        fontSize: ".6rem",
        color: "#fff",
        margin: "4% 0 0 4%",
        // backgroundColor: "#000",
        height: "15%",
      };
    },
    background() {
      return {
        height: "80%",
        width: "100vw",
        position: "absolute",
        bottom: 0,
        overflowX: "scroll",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        backgroundColor: "transparent",
        scrollbarWidth: "none",
      };
    },
    banner() {
      return {
        height: "90%",
        margin: "0 2px",
        backgroundColor: "#1c5779",
        width: "75%",
        flexShrink: 0,
      };
    },
  };

  const navigate = useNavigate();
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bannerRef.current) {
      const bannerWidth = bannerRef.current.scrollWidth;
      const containerWidth = bannerRef.current.clientWidth;
      const scrollPosition = (bannerWidth - containerWidth) / 2;
      bannerRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <div style={{ ...HomeStyle }}>
      <div style={BannerStyle.base()}>
        <div style={BannerStyle.back()}>
          <div style={{ ...BannerStyle.backDiv(), color: globalColors.yellow }}>
            São Pedro da Aldeia
          </div>
          <div style={BannerStyle.backDiv()}>Balneário</div>
          <div style={BannerStyle.backDiv()}>Parque dos Meninos</div>
          <div style={BannerStyle.backDiv()}>Cancela</div>
        </div>
        <div style={BannerStyle.background()} ref={bannerRef}>
          <div style={BannerStyle.banner()}>Primeiro</div>
          <div style={BannerStyle.banner()}>Segundo</div>
          <div style={BannerStyle.banner()}>terceiro</div>
        </div>
      </div>
      <div>direto com comerciante</div>
      <div>+food</div>
      <div>anuncios do bairro</div>
      <div>footer</div>
    </div>
  );
}
