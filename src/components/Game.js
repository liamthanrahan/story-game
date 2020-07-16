import React, { Component } from 'react'
import styled from '@emotion/styled'
import StoryLog from './StoryLog'
import StoryInput from './StoryInput'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const LogSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  min-height: 200px;
  overflow-y: auto;
  margin: 20px;
`

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [],
      partNumber: 0,
    }
  }

  addNewStoryPart = part => {
    const { history, partNumber } = this.state
    const storyLog = history.slice(0, partNumber + 1)
    this.setState({
      history: storyLog.concat(part),
      partNumber: storyLog.length,
    })
  }

  render() {
    const { history } = this.state
    return (
      <Container>
        <LogSection>
          <StoryLog log={history} />
        </LogSection>
        <Section>
          <StoryInput submit={this.addNewStoryPart} />
        </Section>
      </Container>
    )
  }
}

export default Game
