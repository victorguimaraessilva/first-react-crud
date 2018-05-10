import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PessoaPage from '../components/Pessoa';

export default () => (

  <BrowserRouter>

    <Route path="/" component={ PessoaPage } />

  </BrowserRouter>

);
