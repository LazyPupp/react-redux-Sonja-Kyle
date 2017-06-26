import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import {showModal} from '../actions/showModalAction';
import {connect} from 'react-redux';

import './header.css';

export class Header extends React.Component  {
    toggleInfoModal() {
      this.props.dispatch(showModal());
    }

    render() {
        let infoModal;
        if (this.props.showModal) {
            infoModal = <InfoModal onClose={() => this.toggleInfoModal()} />;
        }

        return (
            <header>
                <TopNav onInfo={() => this.toggleInfoModal()}
                    onNewGame={this.props.onNewGame} />
                {infoModal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
const mapStateToProps = (state,props)=>({
  showModal:state.showModal
});

export default connect(mapStateToProps)(Header);