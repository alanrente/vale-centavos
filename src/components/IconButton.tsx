export default function IconButton({
  description,
  count,
  maxCount,
  id,
}: {
  // ReactSvgElement: JSX.Element;
  id: string;
  description: string;
  maxCount: 9 | 99 | 999;
  count: number;
}) {
  return (
    <div style={{ width: "66px", height: "73px" }}>
      <div
        style={{ display: "flex", flexDirection: "row", justifyContent: "end" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "9px",
            width: "17px",
            height: "12px",
            color: "#FFFFFF",
            fontWeight: "bold",
            backgroundColor: "#00BA46",
          }}
        >
          {count > maxCount ? `${maxCount}+` : `${count}`}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "32px",
          height: "32px",
          backgroundColor: "#F2F2F2",
          borderRadius: "16px",
          margin: "auto",
          marginTop: "5px",
        }}
      >
        <img
          style={{ width: "32px", height: "32px" }}
          src={require(`../icons/png/${id}.png`)}
          alt=""
        />
      </div>
      <div
        style={{
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "12px",
          color: "#707070",
          lineHeight: "15px",
        }}
      >
        {description}
      </div>
    </div>
  );
}
