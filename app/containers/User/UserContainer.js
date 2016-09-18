import React, { PropTypes } from 'react'
import { User } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as usersActionCreators from 'redux/modules/users'
import * as usersDucksActionCreators from 'redux/modules/usersDucks'
import { staleUser, staleDucks } from 'helpers/utils'

export class UserContainer extends React.Component {
  static propTypes = {
    noUser: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    duckIds: PropTypes.array.isRequired,
    fetchAndHandleUsersDucks: PropTypes.func.isRequired,
    fetchAndHandleUser: PropTypes.func.isRequired,
    lastUpdatedUser: PropTypes.number.isRequired,
    lastUpdatedDucks: PropTypes.number.isRequired,
    routeParams: PropTypes.object,
  };
  componentDidMount () {
    const uid = this.props.routeParams.uid
    if (this.props.noUser === true || staleUser(this.props.lastUpdatedUser)) {
      this.props.fetchAndHandleUser(uid)
    }
    if (this.props.noUser === true || staleDucks(this.props.lastUpdatedDucks)) {
      this.props.fetchAndHandleUsersDucks(uid)
    }
  }
  render () {
    const { noUser, name, isFetching, error, duckIds } = this.props
    return (
      <User
        noUser={noUser}
        name={name}
        isFetching={isFetching}
        error={error}
        duckIds={duckIds} />
    )
  }
}

function mapStateToProps ({users, usersDucks}, props) {
  const user = users[props.routeParams.uid]
  const specificUsersDucks = usersDucks[props.routeParams.uid]
  const noUser = typeof user === 'undefined'
  const isFetching = users.isFetching || usersDucks.isFetching
  const error = users.erorr || usersDucks.error

  return {
    noUser,
    isFetching,
    error,
    name: noUser ? '' : user.info.name,
    duckIds: specificUsersDucks ? specificUsersDucks.duckIds : [],
    lastUpdatedUser: user ? user.lastUpdated : 0,
    lastUpdatedDucks: specificUsersDucks ? specificUsersDucks.lastUpdated : 0,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    ...usersActionCreators,
    ...usersDucksActionCreators,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
