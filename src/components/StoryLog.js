import React from 'react'
import PropTypes from 'prop-types'

function StoryLog({ log }) {
  return (
    <>
      {log.map((part, i) => {
        // eslint-disable-next-line react/no-array-index-key
        return <p key={i}>{part}</p>
      })}
    </>
  )
}

StoryLog.propTypes = {
  log: PropTypes.arrayOf(PropTypes.string),
}

export default StoryLog
