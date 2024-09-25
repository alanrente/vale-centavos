import { createContext, Dispatch, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { globalColors } from "../../styles/global.style";
import { useNavigate } from "react-router-dom";
import { Navigation } from "../../components/Navigation";

type ValeCentavosContextType = {
  state: number;
  setState: Dispatch<number>;
};

export const ValeCentavosContext = createContext<ValeCentavosContextType>(
  null!
);

export const ValeCentavosProvider = ({ children }: any) => {
  const [state, setState] = useState<number>(999999.99);
  const [visible, setVisible] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <ValeCentavosContext.Provider value={{ state, setState }}>
      <div
        className="header"
        style={{
          height: "10vh",
          width: "100vw",
          backgroundColor: globalColors.white,
          // backgroundColor: "saddlebrown",
          position: "fixed",
          zIndex: 99999,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "82%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
            height: "80%",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={require("../../icons/png/TopBairro.png")}
              alt="Logo Top Bairros"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div
            style={{
              height: "100%",
              width: "1px",
              backgroundColor: globalColors.silverLightDark,
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              width: "40%",
              minWidth: "130px",
              // backgroundColor: "yellow"
            }}
          >
            <img
              src={require("../../icons/png/Person.png")}
              alt="Desenho de uma pessoa"
              style={{ width: "36px", height: "36px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "80%",
              }}
            >
              <span style={{ fontSize: 12, color: globalColors.black }}>
                NA CONTA R$
              </span>
              <span
                style={{
                  fontSize: 18,
                  color: globalColors.greenLightDark,
                  fontWeight: "bold",
                  overflowX: "scroll",
                  scrollbarWidth: "none",
                }}
              >
                {state.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            minWidth: "50px",
            width: "18%",
            // backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <GiHamburgerMenu
            size={30}
            onClick={() => {
              setVisible(!visible);
            }}
          />
        </div>
        {visible && (
          <Navigation>
            <div
              onClick={() => {
                navigate("/");
                setVisible(false);
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                navigate("/playground");
                setVisible(false);
              }}
            >
              Playground
            </div>
          </Navigation>
        )}
      </div>
      <div
        className="main"
        style={{
          height: "90vh",
          overflowY: "scroll",
          position: "relative",
          top: "10vh",
          // backgroundColor: "gray",
        }}
      >
        {children}
      </div>
    </ValeCentavosContext.Provider>
  );
};
