import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.color ? props.color : 'black'};
  &:hover {
    color: black;
  }
`;

class Container extends Component {
  
    render() {
        return (
            <Container color={"green"}>
                Container works!
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return{

    }
}

export default connect(mapStateToProps,{  })(Container);
