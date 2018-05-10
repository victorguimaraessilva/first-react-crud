import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { savePessoa } from '../actions/actions';

class PessoaForm extends React.Component {
  
  state = {
    name: '',
    birthdate: '',
    identification: '',
    gender: '',
    address: '',
    errors: {},
    loading: false,

  }

  handleChange = (e) => {
    if (!!this.state.errors[e.target.name]) {
      let errors = Object.assign({}, this.state.errors);
      delete errors[e.target.name];
      this.setState({ 
        [e.target.name] : e.target.value,
        errors
      });
    } else {
      this.setState({ [e.target.name] : e.target.value });
    }
    
    this.setState({ [e.target.name] : e.target.value });
    
  }

  handleSubmit = (e) => {

    e.preventDefault();

    let errors = {}

    if (this.state.name === '') errors.name = "Preencha o campo nome";
    if (this.state.birthdate === '') errors.birthdate = "Informe sua data de nascimento";
    if (this.state.identification === '') errors.identification = "Forneça sua identificação";
    if (this.state.gender === '') errors.gender = "Informe seu gênero";
    if (this.state.address === '') errors.address = "Informe seu endereço";
  
    this.setState({errors});

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {

      const { name, birthdate, identification, gender, address } = this.state;
      this.setState({ loading: true });
      console.log(this.props)
      this.props.savePessoa({ name, birthdate, identification, gender, address }).then(
        (success) => { console.log(success)},
        (err) => err.response.json().then(({errors}) => this.state({errors, loading: false}))
      );

    }
    
  }

  render() {
    
    return (
      <div className="ui container">
        
        <form className={classnames('ui', 'form', {loading: !!this.state.loading})} onSubmit={this.handleSubmit}>
          <h1>Cadastro de Pessoa</h1>
          
          {!!this.state.errors.global && <div className="ui negative message"><p>{this.state.errors.global}</p></div>}

          <div className={classnames('field', {error: !!this.state.errors.name})}>
            <label htmlFor="name">Nome </label>
            <input id="name" name="name" value={this.state.name} onChange={this.handleChange} />
            <span>{this.state.errors.name}</span>
          </div>

          <div className={classnames('field', {error: !!this.state.errors.birthdate})}>
            <label htmlFor="birthdate">Data Nascimento</label>
            <input id="birthdate" name="birthdate" value={this.state.birthdate} onChange={this.handleChange} />
            <span>{this.state.errors.birthdate}</span>
          </div>

          <div className={classnames('field', {error: !!this.state.errors.identification})}>
            <label htmlFor="identification">Identificação</label>
            <input id="identification" name="identification" value={this.state.identification} onChange={this.handleChange} />
            <span>{this.state.errors.identification}</span>
          </div>

          <div className={classnames('field', {error: !!this.state.errors.gender})}>
            <label htmlFor="gender">Sexo</label>
            <input id="gender" name="gender" value={this.state.gender} onChange={this.handleChange} />
            <span>{this.state.errors.gender}</span>
          </div>

          <div className={classnames('field', {error: !!this.state.errors.address})}>
            <label htmlFor="address">Endereço</label>
            <input id="address" name="address" value={this.state.address} onChange={this.handleChange} />
            <span>{this.state.errors.address}</span>
          </div>

          <Link to="/"> <button className="ui secondary button">Voltar </button> </Link>
          <button className="ui primary button">Adicionar </button>
        </form>

      </div>
     
    );

  }
  
}

export default connect(null, { savePessoa })(PessoaForm);
  