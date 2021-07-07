import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import HeaderBlog from './components/HeaderBlog'
import FooterBlog from './components/FooterBlog'
import SidebarBlog from './components/SidebarBlog'
import ContentBlog from './components/ContentBlog'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      resultado : []
    }

    axios
      .get('/postagens')
      .then(resultado => {
        this.setState({
          resultado : resultado.data[0]
        })
      })

    axios
      .get('/comentarios/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }

  render(){
    return (
      <div className="grid">
        <HeaderBlog />
        <SidebarBlog />
        <ContentBlog posts={this.state.resultado}/>
        <FooterBlog />
      </div>
    );
  }
}

export default App;
