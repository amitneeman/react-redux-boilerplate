import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.color ? props.color : 'black'};
  &:hover {
    color: black;
  }
`;

class COMPONENT_NAME extends Component {
  render() {
    return (
      <Container>
        Hello
      </Container>
    );
  }
}

export default COMPONENT_NAME;
