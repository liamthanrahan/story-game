import React, { Component } from 'react'
import PropTypes from 'prop-types'

class StoryInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: props.updateText || '',
      disabled: false,
    }
    this.inputRef = React.createRef()
  }

  componentDidUpdate(prevProps) {
    const { updateText } = this.props
    if (updateText !== prevProps.updateText) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ text: updateText })
    }
  }

  handleClick = () => {
    const { submit } = this.props
    const { text } = this.state

    submit(text)

    if (text.toLowerCase() === 'the end') {
      this.setState({ disabled: true })
    } else {
      this.inputRef.current.focus()
    }

    this.setState({ text: '' })
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleClick()
    }
  }

  handleReset = () => {
    const { reset } = this.props

    reset()
    this.setState({ text: '', disabled: false })
    this.inputRef.current.focus()
  }

  render() {
    const { text, disabled } = this.state
    return (
      <>
        <textarea
          ref={this.inputRef}
          rows={5}
          type="textarea"
          placeholder="Enter the next part of the story..."
          value={text}
          disabled={disabled}
          onChange={e => this.setState({ text: e.target.value })}
          onKeyPress={this.handleKeyPress}
        />
        {disabled ? (
          <button type="submit" onClick={this.handleReset}>
            New story
          </button>
        ) : (
          <button type="submit" onClick={this.handleClick}>
            Submit
          </button>
        )}
      </>
    )
  }
}

StoryInput.propTypes = {
  updateText: PropTypes.string,
  submit: PropTypes.func,
  reset: PropTypes.func,
}

export default StoryInput
