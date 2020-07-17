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
      updateText: '',
    }
  }

  addNewStoryPart = part => {
    const { history, partNumber } = this.state
    const storyLog = history.slice()
    storyLog[partNumber] = part
    this.setState({
      history: storyLog,
      partNumber: storyLog.length,
    })
  }

  editPart = partNumber => {
    const { history } = this.state
    this.setState({
      updateText: history[partNumber],
      partNumber,
    })
  }

  clearFollowing = partNumber => {
    const { history } = this.state
    const storyLog = history.slice(0, partNumber)
    this.setState({
      history: storyLog,
      partNumber: storyLog.length,
    })
  }

  resetStory = () => {
    this.setState({ history: [], partNumber: 0 })
  }

  render() {
    const { history, updateText } = this.state
    return (
      <Container>
        <LogSection>
          <StoryLog
            log={history}
            editPart={this.editPart}
            clearFollowing={this.clearFollowing}
          />
        </LogSection>
        <Section>
          <StoryInput
            updateText={updateText}
            submit={this.addNewStoryPart}
            reset={this.resetStory}
          />
        </Section>
      </Container>
    )
  }
}

export default Game
