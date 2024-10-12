import { useEffect, useRef } from "react";
import { globalColors } from "../../styles/global.style";
import {
  AnunciosDoBairroStyled,
  MaisFood,
  MarketPlace,
  PageStyled,
  VerMaisSpan,
  VerMaisStyled,
} from "./index.styled";
import SectionScrollHorizontal from "../../components/SectionScrollHorizontal";
import { usePngs } from "../../hooks/usePngs";
import IconButton from "../../components/IconButton";
import CardAnuncio from "../../components/CardAnuncio";
import LabelSection from "../../components/LabelSection";
import CardCupom from "../../components/CardCupom/CardCupom";
import CardAnuncioBairro from "../../components/CardAnuncioBairro";

interface StyleProps {
  [key: string]: (...args: any) => React.CSSProperties;
}

export default function Home() {
  const BannerStyle: StyleProps = {
    base: () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      gap: "20px",
      width: "100%",
      height: "22vh",
      minHeight: "150px",
      // backgroundColor: "#7e2929",
    }),
    back() {
      return {
        background: "linear-gradient(180deg, #414141 0%, #A7A7A7 100%)",
        position: "absolute",
        zIndex: -999,
        display: "flex",
        flexDirection: "row",
        top: 0,
        width: "100%",
        height: "66%",
      };
    },
    backDiv() {
      return {
        fontSize: ".6rem",
        color: "#fff",
        margin: "1vh 0 0 .8rem",
        // backgroundColor: "#000",
        height: "15%",
      };
    },
    banner() {
      return {
        height: "78%",
        position: "relative",
        marginTop: "4vh",
        borderRadius: "10px",
        backgroundColor: "#1c5779",
        width: "90%",
        maxWidth: "600px",
        maxHeight: "200px",
        flexShrink: 0,
      };
    },
  };

  const bannerRef = useRef<HTMLDivElement>(null);
  const pngs = usePngs();

  useEffect(() => {
    if (bannerRef.current) {
      const bannerWidth = bannerRef.current.scrollWidth;
      const containerWidth = bannerRef.current.clientWidth;
      const scrollPosition = (bannerWidth - containerWidth) / 2;
      bannerRef.current.scrollLeft = scrollPosition;
    }
  }, []);

  return (
    <PageStyled>
      <div style={BannerStyle.base()}>
        <div style={BannerStyle.back()}>
          <div style={{ ...BannerStyle.backDiv(), color: globalColors.yellow }}>
            São Pedro da Aldeia
          </div>
          <div style={BannerStyle.backDiv()}>Balneário</div>
          <div style={BannerStyle.backDiv()}>Parque dos Meninos</div>
          <div style={BannerStyle.backDiv()}>Cancela</div>
        </div>
        <SectionScrollHorizontal
          args={{
            ref: bannerRef,
          }}
        >
          <div style={BannerStyle.banner()}>Primeiro</div>
          <div style={BannerStyle.banner()}>Segundo</div>
          <div style={BannerStyle.banner()}>terceiro</div>
        </SectionScrollHorizontal>
      </div>
      <MarketPlace>
        <LabelSection
          qtd={238}
          title="Marketplace"
          description="Promoções exclusivas dos comercinates do bairro."
          color={globalColors.purple}
        />
        <div className="categorias">
          <SectionScrollHorizontal
            props={{
              gap: "2rem",
            }}
          >
            {Object.entries(pngs)
              .filter(([key]) => !key.includes("Seta"))
              .map(([key, value]) => {
                return (
                  <IconButton
                    id={key}
                    count={9}
                    maxCount={9}
                    description={key}
                    key={key}
                  />
                );
              })}
          </SectionScrollHorizontal>
        </div>
        <div className="anuncios">
          <div className="anuncios-section">
            <div className="anuncios-section-cards">
              <SectionScrollHorizontal args={{ className: "anuncios-card" }}>
                <CardAnuncio
                  descriptions={{
                    descricao: "qualquer",
                    titulo: "titulo",
                    valor: "10,00",
                    condicao: "PROMOÇÃO",
                  }}
                  imagem={require("../../icons/png/SacoRacao.png")}
                  nome="Nome"
                />
                <CardAnuncio
                  descriptions={{
                    descricao: "Ração Bio Care Premium",
                    titulo: "titulo",
                    valor: "10,00",
                    condicao: "PROMOÇÃO",
                  }}
                  imagem={require("../../icons/png/SacoRacao.png")}
                  nome="nome"
                />
                <CardAnuncio
                  descriptions={{
                    descricao: "qualquer",
                    titulo: "titulo",
                    valor: "10,00",
                    condicao: "PROMOÇÃO",
                  }}
                  imagem={require("../../icons/png/SacoRacao.png")}
                  nome="nome"
                />
              </SectionScrollHorizontal>
            </div>
            <VerMaisStyled>
              <VerMaisSpan>Ver mais</VerMaisSpan>
            </VerMaisStyled>
          </div>
        </div>
      </MarketPlace>
      <MaisFood>
        <LabelSection
          qtd={19}
          title="+Food"
          description="O que tem de mais gostoso no seu bairro está aqui!"
          color={globalColors.red}
        />
        <SectionScrollHorizontal
          args={{
            style: {
              gap: "2rem",
            },
          }}
        >
          <CardCupom
            nome="Cachorro-quente do Romário"
            descriptions={{
              valor: "15,00",
              valorCupom: "0,90",
              qtdCupom: "20",
              descricao: "Descrição",
              titulo: "Titulo",
              valorAntigo: "19,00",
            }}
            colorPreco={globalColors.red}
            imagem={require("../../icons/png/HotDog.png")}
          />
          <CardCupom
            nome="Cachorro-quente do Romário"
            descriptions={{
              valor: "5,00",
              valorCupom: "3,00",
              qtdCupom: "20",
              descricao: "Descrição",
              titulo: "Titulo",
              valorAntigo: "19,00",
            }}
            imagem={require("../../icons/png/HotDog.png")}
          />
        </SectionScrollHorizontal>
        <VerMaisStyled
          style={{
            width: "90%",
          }}
        >
          <VerMaisSpan>Ver mais</VerMaisSpan>
        </VerMaisStyled>
      </MaisFood>
      <AnunciosDoBairroStyled>
        <LabelSection
          qtd={19}
          title="MAIS ANÚNCIOS DO BAIRRO"
          description="Aproveite os desconto especiais de seu bairro"
          color={globalColors.greenLightSea}
        />

        <CardAnuncioBairro
          description="essa é uma descrição"
          imageUrl={require("../../icons/png/SacoRacao.png")}
          qtdCupom={10}
          title="Ração Bio Care Premium"
          validade="10/10/2021"
          valor="10,00"
          valorAntigo="15,00"
          valorCupom="0,50"
        />
        <CardAnuncioBairro
          description="essa é uma descrição"
          imageUrl={require("../../icons/png/SacoRacao.png")}
          qtdCupom={10}
          title="Ração Bio Care Premium"
          validade="10/10/2021"
          valor="10,00"
          valorAntigo="15,00"
          valorCupom="0,50"
        />
        <CardAnuncioBairro
          description="essa é uma descrição"
          imageUrl={require("../../icons/png/SacoRacao.png")}
          qtdCupom={10}
          title="Ração Bio Care Premium"
          validade="10/10/2021"
          valor="10,00"
          valorAntigo="15,00"
          valorCupom="0,50"
        />
        <div style={{
          width: "calc(100% - 2rem)",
          display: "flex",
          borderRadius: "5px",
          justifyContent: "center",
          textTransform: "uppercase",
          alignItems: "center",
          padding: ".7rem 1rem",
          backgroundColor: globalColors.black,
          color: globalColors.white,
        }}>
          carregar mais anúncios
        </div>
      </AnunciosDoBairroStyled>
      <div>footer</div>
    </PageStyled>
  );
}
