import React, { Component } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Input = styled.input``

class StoryInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.inputRef = React.createRef()
  }

  handleClick = () => {
    this.props.submit(this.state.text)
    this.setState({ text: '' })
    this.inputRef.current.focus()
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  render() {
    return (
      <>
        <textarea
          ref={this.inputRef}
          rows={5}
          type="textarea"
          placeholder="Enter the next part of the story..."
          value={this.state.text}
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={this.handleKeyPress}
        />
        <button type="submit" onClick={this.handleClick}>
          Submit
        </button>
      </>
    )
  }
}

StoryInput.propTypes = {
  submit: PropTypes.func,
}

export default StoryInput
