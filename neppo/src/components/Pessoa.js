import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import PessoaList from './PessoaList';
import { fetchPessoas } from '../actions/actions';

class PessoaPage extends React.Component {
  
  componentDidMount() {
    this.props.fetchPessoas();
  }


  render() {
    
    return (

      <div className="ui container">
        
        <div>
          <h1> Pessoas Cadastradas </h1>
          <Link className="ui primary button" to="/add"> Adicionar </Link>
          <PessoaList pessoas={this.props.pessoas} />
        </div>
        
      </div>
    );

  }
  
}

PessoaPage.propTypes = {
  pessoas: PropTypes.array,
  fetchPessoas: PropTypes.func,
}

function mapStateToProps(state) {
  return {
    pessoas: state.pessoas
  }
}

export default connect(mapStateToProps, { fetchPessoas })(PessoaPage);
