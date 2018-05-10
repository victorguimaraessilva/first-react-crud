import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import render from 'react-dom';
import { Link, Route } from 'react-router-dom';
import PessoaPage from './components/Pessoa';
import PessoaForm from './components/PessoaForm';

class App extends Component {
  render() {
    return (

      <div className="ui container">
        
        <Route exact path="/" component={ PessoaPage } />
        <Route path="/add" component={ PessoaForm } />


      </div>

    )

  }

}

export default App;
