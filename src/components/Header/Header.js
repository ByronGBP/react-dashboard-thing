//@flow
import React from 'react';

const Header = () => (
  <div className="container">
    <div className="row hld-header">
      <div className="col-4 d-flex justify-content-center flex-column">
        <div className="nvx-w-min-content p-4">
          <span className="d-block hld-icon-set hld-menu-hambuger"></span>
        </div>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center">
        <img className="hld-img-logo" src="https://app.holded.com/assets/img/hround.png" alt="hld logo"/>
      </div>
      <div className="col-4 d-flex justify-content-center align-items-center nvx-color-black">
        <div className="w-100 d-flex justify-content-between">
          <i className="fas fa-plus-circle fs-18"></i>
          <i className="fas fa-cog fs-18"></i>
          <i className="fas fa-briefcase fs-18"></i>
          <i className="fas fa-user fs-18"></i>
        </div>
      </div>
    </div>
  </div>
);

export default Header;