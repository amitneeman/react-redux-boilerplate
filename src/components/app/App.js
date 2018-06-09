import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.color ? props.color : 'black'};
  transition: all 0.5s ease;
  &:hover {
    color: red;
  };
  display: flex;
  align-items: center;
  flex-direction: column
`;

const Section = styled.section`
  font-size: 20p5;
`;



class App extends Component {
  render() {
    return (
      <Container>
        <h1>React-redux boilerplate</h1>
        <Section>
          <div><b>npm run comp COMPONENT_NAME</b> will generate a component</div>  
          <div><b>npm run cont CONTAINER_NAME</b> will generate a container</div>    
          <div><b>npm run clean</b> will eject from the boilerplate git repository</div>
        </Section>
      </Container>
    );
  }
}

export default App;
