import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Container.css';

class Container extends Component {
  
    render() {
        return (
            <div>
                Container works!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,{  })(Container);
