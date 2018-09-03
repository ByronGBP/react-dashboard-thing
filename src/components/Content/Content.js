//@flow
import React, { Component } from 'react';

import Navbar from './Navbar';
import Global from './Global';
import Overview from './Overview';
import Pendings from './Pendings';

import type { ComponentType, StatelessFunctionalComponent } from 'react';

type Props = {}

type State = {
  activeItem: any
}

const items: { [string]: any } = {
  'Global': <Global className="" /> ,
  'Overview': < Overview className="" /> ,
  'Pendings': <Pendings className="" />
};

class Content extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = { activeItem: <Global className="" />};
  }

  componentDidMount() {
    $('.nvx-content-swipable').on('swipeleft', this.handleSwipeLeft);
    $('.nvx-content-swipable').on('swiperight', this.handleSwipeRight);
  }

  handleSwipeLeft = () => {
    $('.carousel-control-next').trigger('click');
  }

  handleSwipeRight = () => {
    $('.carousel-control-prev').trigger('click');
  }

  handleNavClick = (elem: string) => {
    this.setState({activeItem: items[elem] || <Global className="" />});
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="nvx-content container my-3 px-4">
        <div id="carouselItems" className="carousel slide hld-item" data-ride="carousel" data-interval="0">
          <ul className="nav justify-content-center">
            <li data-target="#carouselItems" data-slide-to="0" className="nav-item">
              <div className="nav-link">Global</div>
            </li>
            <li data-target="#carouselItems" data-slide-to="1" className="nav-item">
              <div className="nav-link">Overview</div>
            </li>
            <li data-target="#carouselItems" data-slide-to="2" className="nav-item">
              <div className="nav-link">Pendings</div>
            </li>
          </ul>
          <div className="nvx-content-swipable carousel-inner">
            <div className="carousel-item active">
              <Global/>
            </div>
            <div className="carousel-item">
              <Overview/>
            </div>
            <div className="carousel-item">
              <Pendings/>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev d-none" href="#carouselItems" role="button" data-slide="prev"></a>
        <a className="carousel-control-next d-none" href="#carouselItems" role="button" data-slide="next"></a>
      </div>
    );
  }
}

// class Content extends Component<Props, State> {
  
//   constructor(props: Props) {
//     super(props);
//     this.state = { activeItem: <Global className="" />};
//   }

//   handleNavClick = (elem: string) => {
//     this.setState({activeItem: items[elem] || <Global className="" />});
//   };

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <div className="container my-3 px-4">
//         <div className="hld-item">
//           <Navbar navClick={this.handleNavClick} className=""/>
//           {activeItem}
//         </div>
//       </div>
//     );
//   }
// }

export default Content;