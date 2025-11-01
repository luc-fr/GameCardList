import Card from "./Card";
import imgMiraidonexFoil from '../assets/destinosdepaldea/miraidonex(243091).jpg'

const Cards = () => {
  return (
    <div className="cards">
      <Card
        titulo="Miraidon ex (243/091)"
        descricao1="Carta Foil : Sim (Foil)"
        descricao2="Qualidade : Praticamente Nova (NM)"
        descricao3="Idioma : Português (PT-BR)"
        preco="R$ 55,99"
        imagem={imgMiraidonexFoil}
      />
    </div>
  );
};

export default Cards;
