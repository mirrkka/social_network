import React from 'react'
import { connect } from 'react-redux';
import {usersAPI} from '../../api/api';
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/user-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';


class UsersContainer extends React.Component {
         
    componentDidMount() {
        this.props.toggleIsFetching(true)
       usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            })

    }

    render() {

        
        return <>
        {this.props.isFetching ? 
        <Preloader />
        : null}
        <Users 
        totalUsersCount = {this.props.totalUsersCount}
        pageSize = {this.props.pageSize}
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged}
        users = {this.props.users}
        follow = {this.props.follow}
        unfollow = {this.props.unfollow}
        toggleFollowingProgress = {this.props.toggleFollowingProgress}
        followinginProgress = {this.props.followinginProgress}
        />

        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followinginProgress: state.usersPage.followinginProgress
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId)) },
        
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },

        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }

    }
}*/

export default connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        toggleIsFetching,
        toggleFollowingProgress
    }
    )(UsersContainer);
