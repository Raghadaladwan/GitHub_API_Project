import React, { Component } from 'react';


function UserReposList(props) {
    return (
        <ul >
            {props.data.map(({ id, full_name, stargazers_count, html_url }) => (
                
                <li key={id} className='repos-list'>
                    <h3><a className='user-repos-name' href={html_url}>{full_name}</a></h3>
                    <div className='user-repos-stars'>
                        <i class="fas fa-star"></i>
                        {stargazers_count}
                    </div>
                </li>
            
            ))}
        </ul>
    )
}
function UserFollowList(props) {
    return (
        <ul>
            {props.data.map(({ id, login, avatar_url, html_url }) => (
                <li key={id}>
                    <img className='user-data-img' src={avatar_url} alt="" />
                    <h3><a className='user-data-login' href={html_url}>{login}</a></h3>
                </li>
            ))}
        </ul>
    )
}
class UserDataList extends Component {
    render() {
        let repos_list = < UserReposList data={this.props.data} />
        let follow_list = < UserFollowList data={this.props.data} />

        if (this.props.repos) {
            return repos_list
        } else {
            return follow_list
        }
    }
}
export default UserDataList;
