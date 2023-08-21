import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductList extends Component {
  renderContent = () => {
    return this.props.dataList.map((element) => {
      return (
        <div key={element.id} className="col-4">
          <Modal showDesc={this.props.showDesc} element={element} />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderContent()}</div>;
  }
}
