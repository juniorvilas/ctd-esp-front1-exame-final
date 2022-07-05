import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  return (
    <div className="paginacao">
      <button disabled={true} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
