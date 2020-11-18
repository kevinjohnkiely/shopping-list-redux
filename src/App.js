import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header'
import Controls from './components/Controls'
import List from './components/List'

import * as actionTypes from './store/actionTypes'

import { connect } from 'react-redux'

class App extends Component {

  render () {

    const theList = this.props.stateIt.length === 0 ? <h2>Please add items!</h2> : 
    <List itemsFromApp = {this.props.stateIt} delItem={this.props.onDeleteItem} />
    
    return (

      <div className="App">
        <Header />
        <Controls addItem={this.props.onAddItem} />
        <h4>Your Shopping List:</h4>
        {theList}
        <button className="btnClearList" onClick={this.props.onClearAll}>Empty Basket</button>
      </div>
    );
  }
  
}

const mapStateToProps = state => {
  return {
    stateIt: state.stateItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (title, num) => dispatch({type: actionTypes.ADD_ITEM, theTitle:title, theNum:num }),
    onDeleteItem: (id) => dispatch({type: actionTypes.DELETE_ITEM, theId:id }),
    onClearAll: () => dispatch({type: actionTypes.CLEAR_LIST})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
