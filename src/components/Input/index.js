/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Criamos um estilo que será utilizado no campo de input
const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: ${({ theme }) => theme.borderRadius};
  outline: 0;
  margin-bottom: 25px;
`;

// Criamos a "tag personalizada" ou nosso componente input que poderá trabalhar com onChange,
// Placeholder e n (...props) propriedades
export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

// Definimos um valor vazio inicial para a propriedade value da tag input
Input.defaultProps = {
  value: '',
};

// Aqui estamos fazendo uma validação do tipo de dados que tera nos props/propriedas da tag Input
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
