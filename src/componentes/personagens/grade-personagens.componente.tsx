import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {
  return (
    <div className="grade-personagens">
      <CardPersonagem />
      <CardPersonagem />
      <CardPersonagem />
    </div>
  );
};

export default GradePersonagem;
