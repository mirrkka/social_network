

import React from 'react';
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component  {

    state = {
        editMode: false
    }

    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
  
    return (
        <div>
            {!this.state.editMode &&
        <div>
           <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status}</span>
        </div>
    }
         {this.state.editMode &&
        <div>
           <input value={this.props.status} autoFocus = {true} onBlur={this.deactiveEditMode.bind(this)}/>
        </div>
    }
        </div>
    );

    }
};

export default ProfileStatus
