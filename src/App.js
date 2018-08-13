import React, { Component } from 'react';
import './styles.scss';
import store from './lib/store';
import ListCustom from './components/listCustom';

class App extends Component {
  constructor() {
    super();
    this.addToList = this.addToList.bind(this);
     this.state = {
      items: []
    }
  }
  addItemToList() {
        //this.setState({ mails: newMails })
        this.addToList({ item: 'item nuevo' })
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Lista dinámica</h1>
        </header>
        <section className="app-Container">
          <button onClick={() => this.addItemToList()}>Agregar elemento </button>
          <ListCustom />
        </section>
      </div>
    );
  }
  addToList(item) {
    store.dispatch({
      type: "ADD_TO_LIST",
      item
    })
  }
}
export default App; 