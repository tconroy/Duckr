import React, { PropTypes } from 'react'
import { Replies } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as repliesActionCreators from 'redux/modules/replies'
import { staleReplies } from 'helpers/utils'

class RepliesContainer extends React.Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    replies: PropTypes.object.isRequired,
    fetchAndHandleReplies: PropTypes.func.isRequired,
    duckId: PropTypes.string.isRequired,
  };
  static defaultProps = {
    lastUpdated: 0,
    replies: {},
  }
  componentDidMount () {
    if (staleReplies(this.props.lastUpdated)) {
      this.props.fetchAndHandleReplies(this.props.duckId)
    }
  }
  render () {
    return (
      <Replies
        isFetching={this.props.isFetching}
        error={this.props.error}
        lastUpdate={this.props.lastUpdated}
        replies={this.props.replies} />
    )
  }
}

function mapStateToProps (state, props) {
  const duckRepliesInfo = state.replies[props.duckId] || {}
  const { lastUpdated, replies } = duckRepliesInfo
  return {
    isFetching: state.replies.isFetching,
    error: state.replies.error,
    lastUpdated,
    replies,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(repliesActionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepliesContainer)
