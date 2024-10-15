import {
  ComprarCupomStyled,
  DividerStyled,
  SectionCupomStyled,
  SectionCuponsStyled,
  SectionDadosStyled,
  SectionPagamentoStyled,
} from "./index.styled";

interface ComprarCupomProps {
  nome?: string;
  saldo?: string;
  nomeEstabelecimento?: string;
  nomeProduto?: string;
  validade?: string;
  promoção?: string;
  valorDe?: string;
  valorPor?: string;
  valorCupom?: string;
  cupons?: string[];
  quantidade?: number;
}

export default function ComprarCupom({
  nome = "Fulano",
  saldo = "5,00",
  nomeEstabelecimento = "Quiosque do Romário",
  nomeProduto = "Cachorro-quente completão",
  promoção = "Sexta e Sábado",
  validade = "30/12/2021",
  valorDe = "19,00",
  valorPor = "14,00",
  valorCupom = "0,90",
  cupons = [
    // "0001-003-183033-0050",
    // "0001-003-183033-0051"
  ],
  quantidade = 1,
}: ComprarCupomProps) {
  return (
    <ComprarCupomStyled>
      <SectionCupomStyled>
        <div className="text-black usuario">Olá {nome},</div>
        <div className="saldo">
          <span className="text-silver saldo-text">Seu saldo atual R$:</span>
          <span className="saldo-valor">{saldo}</span>
        </div>
      </SectionCupomStyled>
      <DividerStyled />
      <SectionDadosStyled>
        <div className="text-black cupom">CUPOM DESTINADO PARA:</div>
        <div className="text-black subscription">{nomeEstabelecimento}</div>
        <div className="text-silver subscription">{nomeProduto}</div>
        {cupons.length === 0 && (
          <>
            <div className="text-silver subscription">Promoção: {promoção}</div>
            <div className="de-por">
              <span>De: {valorDe}</span>
              <span>Por: {valorPor}</span>
            </div>
          </>
        )}
        {cupons.length > 0 && (
          <div className="validade">
            <span>Válido até: {validade}</span>
          </div>
        )}
      </SectionDadosStyled>
      <DividerStyled
        style={{
          height: "1px",
        }}
      />
      {cupons.length > 0 && (
        <SectionCuponsStyled>
          {cupons.map((cupom, index) => (
            <span key={index}>{cupom}</span>
          ))}
        </SectionCuponsStyled>
      )}
      <DividerStyled />
      <SectionPagamentoStyled>
        <div className="valor-quantidade">
          <div className="qtd">
            {cupons.length === 0 ? (
              <>
                <label htmlFor="qtd">Qtd.</label>
                <input
                  className="item-height item-radius item-bordered com-fonte-big context-silver item-centered"
                  type="number"
                  id="qtd"
                  value={"01"}
                />
              </>
            ) : (
              <div className="item-height item-radius item-centered item-bordered com-fonte-big context-silver">
                <span className="com-fonte-small">Qtd.</span>
                {quantidade}
              </div>
            )}
          </div>
          {cupons.length === 0 && (
            <div>
              <label>VALOR DO CUPOM R$</label>
              <div className="item-height item-radius item-centered item-bordered com-fonte-big context-purple">
                {valorCupom}
              </div>
            </div>
          )}
          <div className={`${cupons.length === 0 ? "preco" : ""}`} style={{
            width: cupons.length > 0 ? "60%" : ""
          }}>
            {cupons.length === 0 && <label>PREÇO R$</label>}
            <div className={`item-height item-radius ${cupons.length === 0 ? "item-centered": "item-between item-align-center"} item-bordered com-fonte-big context-black`}>
            {cupons.length > 0 && <span className="com-fonte-small">PREÇO R$</span>}
              <span>{valorPor}</span>
            </div>
          </div>
        </div>
        <div className="item-height default item-centered item-bordered com-fonte-big context-green">
          <div className="com-valor">
            <span>{cupons.length === 0 ? "SALDO" : "VALOR TOTAL"} R$</span>
            <span>{cupons.length === 0 ? saldo : valorPor}</span>
          </div>
        </div>
        <div
          className={`item-height default clicked item-centered text-white ${
            cupons.length === 0 ? "fundo-roxo" : "fundo-preto"
          }`}
        >
          {cupons.length === 0 ? "COMPRAR CUPOM" : "PAGAR NO PIX"}
        </div>
        <div
          className={`item-height default clicked item-centered text-white ${
            cupons.length === 0 ? "fundo-cinza" : "fundo-verde"
          }`}
        >
          {cupons.length === 0 ? "CANCELAR" : "FALE COM COMERCIANTE"}
        </div>
      </SectionPagamentoStyled>
    </ComprarCupomStyled>
  );
}
