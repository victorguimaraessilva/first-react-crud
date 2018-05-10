import React from 'react';

const PessoaList = ({pessoas}) => {
  
  const emptyMessage = (
    <p> Não há pessoas cadastradas </p>
  );

  const pessoasList = (
    <p> games list </p>

  );

  return (
    <div>
      { pessoas.length === 0 ? emptyMessage : pessoasList }
    </div>
  );
}

export default PessoaList;
  