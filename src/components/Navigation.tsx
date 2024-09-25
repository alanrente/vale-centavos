import { globalColors } from "../styles/global.style";

export function Navigation({ children }: { children: any[] }) {
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 999,
        top: "10vh",
        right: 0,
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: globalColors.silverLight,
        // backgroundColor: "gold",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        {children.map((child, index) => (
          <>
            <div key={index}>{child}</div>
            {index % 2 === 0 && (
              <div
                style={{
                  height: "2px",
                  width: "50%",
                  backgroundColor: globalColors.black,
                }}
              ></div>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
