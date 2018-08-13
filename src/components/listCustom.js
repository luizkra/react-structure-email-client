import React from 'react';
import store from '../lib/store';
import { connect } from 'react-redux';

const ListCustom = ({ listData }) => {
    return (
    <ul className="list-custom"> 
       {listData.map((data, index) => 
         <li className="item-custom" key={index}>
            {index} {data.item}
          </li>
          )}
    </ul>
   );
}
const mapStateToProps = state => {
    return {
      listData: state.listData
    }
}
export default connect(mapStateToProps)(ListCustom);