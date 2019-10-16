import React from 'react';
import { IndexLink, Link } from 'react-router';
import { connect } from 'react-redux'

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  hideNavBar(e){
    $('.navbar-collapse').collapse('hide');
  }
  render() {

      let active = { borderBottomColor: '#3f51b5' };
      // console.log(this.props.location);
      let rightNav =  (
            <ul id="header-list" data-easing="easeInOutExpo" data-speed="1500">
            <li className={this.props.location.pathname=="/"?"current":""}><Link to="/" onClick={this.hideNavBar.bind(this)}>Home</Link></li>
            <li className={this.props.location.pathname=="/create"?"current":""}><Link to="/create" onClick={this.hideNavBar.bind(this)}>Create</Link></li>
          </ul>
      );
      return (
        <div>
          <header id="header" className="transparent-header">
            <div id="header-wrap">
                <div className="container clearfix">
                    <div id="primary-menu-trigger"><i className="icon-reorder" /></div>

                    <div id="logo">
                        <a href="/" className="retina-logo">
                           ASN 2
                        </a>
                    </div>

                    <nav id="primary-menu">
                        {rightNav}

                    </nav>
                </div>
            </div>
        </header>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

export default connect(mapStateToProps)(Header);
