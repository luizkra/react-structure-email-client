import React, { Component } from 'react';
import './styles.scss';
import store from './lib/store';
import ListCustom from './components/listCustom';
import { addToList } from './lib/actionCreators';
import { connect } from 'react-redux';


const App = ({ listData }) => {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Lista dinámica</h1>
        </header>
        <section className="app-container">
          <button onClick={() => addToList({item: 'item nuevo'})}>Agregar elemento </button>
          <ListCustom />
        </section>
      </div>
    );
}
const mapStateToProps = state => {
  console.log(state)
  return {
    listData: state.listData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToList(item) {
      dispatch(addToList(item))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);