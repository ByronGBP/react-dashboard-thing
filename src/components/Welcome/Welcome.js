//@flow
import React, { Component, Fragment } from 'react';

type Props = {}

class Welcome extends Component<Props> {

  containerElement: ?HTMLDivElement
  
  handleClick = () => {
    if (this.containerElement) {
      this.containerElement.classList.toggle('nvx-display');
      this.forceUpdate();
    }
  };

  checkDisplay = () => {
    return this.containerElement && this.containerElement.classList.contains('nvx-display');
  };
  
  render () {
    return (
      <div className="nvx-color-black container my-3 px-4" onClick={this.handleClick}>
        <div className="hld-item hld-bg-welcome d-flex justify-content-center align-items-center py-4">
          <div className="text-center fs-14 nvx-color-white">
            <img src="https://app.holded.com/assets/img/hround.png" alt="hld-logo" height="30"/><br/>
            <p className="hld-p nvx-bold mt-2 mb-3">Hey Byron!</p>
            <div className="text-left nvx-user-options" ref={element => this.containerElement = element} >
              { this.checkDisplay() &&
        <Fragment>
          <p className="hld-p">
            <i className="fas fa-briefcase mr-1"></i> Account details
          </p>
          <p className="hld-p">
            <i className="fas fa-desktop mr-1"></i> Book a demo
          </p>
          <p className="hld-p">
            <i className="fas fa-compass mr-1"></i> Discover Holded
          </p>
          <p className="hld-p">
            <i className="fas fa-cloud-upload-alt mr-1"></i> Import your data
          </p>
          <p className="hld-p">
            <i className="fas fa-paper-plane mr-1"></i> Invite your friends
          </p>
          <p className="hld-p">
            <i className="fas fa-graduation-cap mr-1"></i> Tutorials and guides
          </p>
          <p className="hld-p">
            <i className="fas fa-tachometer-alt mr-1"></i> My boards
          </p>
        </Fragment>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;