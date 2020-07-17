import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const Part = styled.p`
  display: flex;
  flex-direction: row;
`

const PartText = styled.div`
  font-weight: ${props => (props.isLatest ? 'bold' : 'regular')};
  flex: 1;
  cursor: pointer;
  &:hover {
    background: lightgrey;
  }
`

const ClearButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
`

function StoryLog({ log, clearFollowing, editPart }) {
  return (
    <>
      {log.map((part, i) => {
        return (
          // eslint-disable-next-line react/no-array-index-key
          <Part key={i}>
            <PartText
              isLatest={i === log.length - 1}
              onClick={() => editPart(i)}
            >
              {part}
            </PartText>
            <ClearButton type="button" onClick={() => clearFollowing(i)}>
              X
            </ClearButton>
          </Part>
        )
      })}
    </>
  )
}

StoryLog.propTypes = {
  log: PropTypes.arrayOf(PropTypes.string),
  editPart: PropTypes.func,
  clearFollowing: PropTypes.func,
}

export default StoryLog
