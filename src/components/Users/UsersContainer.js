import React from 'react'
import { connect } from 'react-redux';
import {usersAPI} from '../../api/api';
import { follow, setCurrentPage,  unfollow, toggleFollowingProgress, getUsers } from '../../redux/user-reducer';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';



class UsersContainer extends React.Component {
         
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*
        this.props.toggleIsFetching(true)
       usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
             this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            }) */
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)

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


export default connect(mapStateToProps, 
    {
        follow, unfollow,
        setCurrentPage, 
        toggleFollowingProgress,getUsers
    }
    )(UsersContainer);
