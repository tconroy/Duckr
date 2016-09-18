import React, { PropTypes } from 'react'
import {
  mainContainer,
  container,
  content,
  repliesContainer,
  replyTextAreaContainer,
  replyTextArea,
} from './styles.css'
import {
  subHeader,
  darkBtn,
  errorMsg,
} from 'sharedStyles/styles.css'
import { DuckContainer } from 'containers'

DuckDetails.propTypes = {
  authedUser: PropTypes.object.isRequired,
  duckId: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

export default function DuckDetails ({duckId, isFetching, authedUser, error}) {
  return (
    <div className={mainContainer}>
      {isFetching === true
        ? <p className={subHeader}>{'Fetching'}</p>
        : <div className={container}>
          <div className={content}>
            <DuckContainer
              duckId={duckId}
              hideLikeCount={false}
              hideReplyButton={true} />
            {'MAKE REPLY'}
          </div>
          <div className={repliesContainer}>
            {'REPLY SECTION'}
          </div>
        </div>}
      {error ? <p className={errorMsg}>{error}</p> : null}
    </div>
  )
}
