import React, { Component } from 'react';
import { connect } from 'react-redux';

class COMPONENT_NAME extends Component {
  
    render() {
        return (
            <div>
                COMPONENT_NAME works!
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,{  })(COMPONENT_NAME);