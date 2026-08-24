// Componente filho: apenas exibe o que o pai (Grupo) manda via props
function MembroGrupo({ nome, rm }) {
  return (
    <p>
      {nome}: {rm}
    </p>
  );
}

export default MembroGrupo;
