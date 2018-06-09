import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.color ? props.color : 'black'};
  &:hover {
    color: black;
  }
`;

class App extends Component {
  render() {
    return (
      <Container>
        Hello
      </Container>
    );
  }
}

export default App;
