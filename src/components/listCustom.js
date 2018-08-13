import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../lib/store';

class ListCustom extends Component {
  constructor() {
    super();
     this.state = {
        listData: []
    }
     store.subscribe(() => {
      this.setState({
        listData: store.getState().listData
      })
    })
  }

  render() {
    return (
    <ul className="list-custom"> 
       {this.state.listData.map((data, index) => 
         <li className="item-custom" key={index}>
            {index} {data.item}
          </li>
          )}
    </ul>
   );
 }
}
export default ListCustom;