const Card = (props) => {
  return (
    <div className="card">
      <div className="card__textos">
        <h2 className="card__titulo">{props.titulo}</h2>
        <p>{props.descricao1}</p>
        <p>{props.descricao2}</p>
        <p>{props.descricao3}</p>
        <p className="card__preco">{props.preco}</p>
      </div>
      <div className="card__img">
        <img src={props.imagem} alt="Imagem da Carta" />
      </div>
    </div>
  );
};

export default Card;
