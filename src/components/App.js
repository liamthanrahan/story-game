import { hot } from 'react-hot-loader/root'
import React from 'react'
import { injectGlobal } from 'emotion'
import styled from '@emotion/styled'
import Divider from '@material-ui/core/Divider'
import Game from './Game'

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Top = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  align-items: stretch;
`

const Heading = styled.h1`
  text-align: center;
`

const Description = styled.div``

const Bottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    margin: 0;
    font-family: Verdana, Geneva, sans-serif;
    font-weight: 400;
  }

  html,
  body,
  #root {
    height: 100%;
    position: relative;
  }
`

function App() {
  return (
    <Container>
      <Top>
        <Heading>Story Game</Heading>
        <Divider />
        <Description>
          <h2>Rules</h2>
          <ul>
            <li>Play with one or more of your friends.</li>
            <li>
              Take turns entering a new sentence or paragraph to create a
              collaborative story.
            </li>
            <li>
              When you are finished type &quot;the end&quot; to finish your
              story.
            </li>
          </ul>
        </Description>
      </Top>
      <Divider />
      <Bottom>
        <Game />
      </Bottom>
    </Container>
  )
}

export default hot(App)
