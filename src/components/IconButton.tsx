export default function IconButton({
  ReactSvgElement,
  description,
  count,
  maxCount,
}: {
  ReactSvgElement: JSX.Element;
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
      <div>{ReactSvgElement}</div>
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
