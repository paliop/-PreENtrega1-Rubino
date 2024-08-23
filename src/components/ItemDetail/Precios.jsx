const Precios = ({ precio }) => {
  let cuotas = Number(Math.floor(precio / 6));
  let efec = precio * 0.85;

  return (
    <div style={{ display: "grid", gridTemplateRows: "50% 50%", padding: 10 }}>
      <h4 className="tit1">-15% en efectivo/trasnferencia: ${efec}</h4>
      <h4 className="tit2">6 cuotas sin interes de : ${cuotas}</h4>
    </div>
  );
};

export default Precios;
