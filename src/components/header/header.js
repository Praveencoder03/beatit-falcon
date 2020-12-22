import React  from 'react'


class Header extends React.Component{
    render(){
        return(
           <div>
            <div id="header-container">
              <div className="container">
                <div className="row middle-xs between-xs" id="header">
                  <div className="col-xs-6 col-sm-1 col-md-1">
                    <a href="/#" title="inBeat" className="logo">
                      <svg width={18} height={22} viewBox="0 0 18 22" fill="none" xmlns="/#">
                        <path d="M15.5927 10.4968L15.7163 10.3874L15.6411 10.3545C17.1519 8.59871 17.6251 6.21929 16.8401 4.04774C15.9422 1.55346 13.6301 0 10.8073 0H2.38729C1.06998 0 0 1.00646 0 2.24814V3.20537V4.66037V18.2805V19.6753V19.8011H0.00537678C0.075275 21.0264 1.11837 22 2.38729 22H11.216C14.3453 22 16.9046 20.1238 17.7434 17.2138C18.4692 14.7031 17.6251 12.1377 15.5927 10.4968ZM1.30118 2.24814C1.30118 1.73943 1.79047 1.32372 2.38729 1.32372H10.8073C13.1032 1.32372 14.8991 2.51069 15.6196 4.50721C16.2809 6.33963 15.797 8.3635 14.3883 9.78021L1.30118 3.80159V2.24814ZM1.30118 5.25112L13.1624 10.6718L7.39308 14.003L1.30118 17.5256V5.25112ZM16.496 16.8419C15.9852 18.6087 14.2969 20.6763 11.216 20.6763H2.38729C1.79047 20.6763 1.30118 20.2277 1.30118 19.6753V19.0517L14.442 11.454L14.5066 11.4102C14.5281 11.3938 14.5442 11.3829 14.5657 11.3665C16.7003 12.909 16.9691 15.1845 16.496 16.8419Z" />
                      </svg>
                    </a>
                  </div>
                  <div className="col-xs-7 hide-sm">
                    <ul>
                      <li className="has-submenu">
                        <a href="/#" title="Features">Features</a>
                        <svg width={11} height={6} viewBox="0 0 11 6" fill="none" xmlns="/#">
                          <path d="M1 1L5.4698 5L10 1" stroke="black" />
                        </svg>
                        <ul className="submenu">
                          <li><a href="/#" title="Discover">Discover</a></li>
                          <li><a href="/#" title="Export">Export</a></li>
                          <li><a href="/#" title="Track">Track</a></li>
                        </ul>
                      </li>
                      <li><a href="/pricing" title="Pricing">Pricing</a></li>
                      <li><a href="/#" title="Blog">Blog</a></li>
                    </ul>
                  </div>
                  <div className="col-xs-4 hide-sm">
                    <ul className="right">
                      <li><a href="/#" title="Sign in">Sign in</a></li>
                      <li className="cta">
                        <a href="/#" title="Try it now" className="btn btn-sm" target="_blank">
                          Try it now
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 hide-sm-up">
                    <button className="hamburger hamburger--squeeze" type="button" id="menu-icon">
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="menu-overlay">
              
              <ul>
                <li><a href="/#" title="Home">Home</a></li>
                <li>
                  <a href="/#" title="Discover">Discover</a>
                </li>
                <li>
                  <a href="/#" title="Export">Export</a>
                </li>
                <li><a href="/#" title="Track">Track</a></li>
                <li><a href="/#" title="Pricing">Pricing</a></li>
                <li><a href="/#" title="Blog">Blog</a></li>
              </ul>
              <div className="cta">
                <a className="btn btn-crazy btn-md" href="/#" target="_blank">
                  <span>Try it now</span>
                </a>
                <a className="btn btn-md" href="/#"><span>Sign in</span></a>
              </div>
            </div>
           
          </div>
       
        )
    }

}
export default Header;