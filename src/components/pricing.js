import React  from 'react'

class Pricing extends React.Component{
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
                      <li><a href="/#" title="Pricing">Pricing</a></li>
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
            <section id="teaser-trial">
              <div className="container mobile-adjusted">
                <div className="row middle-xs">
                  <div className="col-xs-12 col-md-4">
                    <h2>Take it for a spin</h2>
                    <p className="description">Get a feel for the platform with our Teaser Plan. No credit card required. No trial period.</p>
                    <a href="/#" className="btn btn-lg" title="Try it now"><span>Try it for free</span> — No credit card</a>
                  </div>
                  <div className="col-xs-12 col-md-offset-2 col-md-6">
                    <div className="row">
                      <div className="col-xs-6"><p className="features"><svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--check">
                            <path d="M1 7.5L5 11.5L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>Free</span> Forever</p><p className="features"><svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--check">
                            <path d="M1 7.5L5 11.5L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>Instagram</span> and <span>TikTok</span></p><p className="features"><svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--close">
                            <path d="M1 1L12 12" stroke="black" strokeWidth={2} />
                            <path d="M1 12L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>No</span> Contact Exports</p></div>
                      <div className="col-xs-6"><p className="features"><svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--check">
                            <path d="M1 7.5L5 11.5L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>2</span> campaigns</p><p className="features"><svg width={13} height={14} viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--check">
                            <path d="M1 7.5L5 11.5L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>E-mail</span> Support</p><p className="features"><svg width={13} height={13} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon--close">
                            <path d="M1 1L12 12" stroke="black" strokeWidth={2} />
                            <path d="M1 12L12 1" stroke="black" strokeWidth={2} />
                          </svg><span>Limited</span> Database Access</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </section><section className="container mobile-adjusted m-tb-80" id="pricing">
              <div className="row monthly" id="pricing-row">
                <div className="col-xs-12 pricing-header">
                  <h1>Pricing</h1>
                  <p className="pricing-schedule">
                    <span id="monthly-schedule">Billed Monthly</span>
                    <span id="yearly-schedule">
                      <span>Billed Yearly</span><span className="deal">4 Months Free</span>
                    </span> 
                  </p>
                </div><div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="plan" id="lite">
                    <div>
                      <p className="title">Lite</p>
                      <h2>
                        <span className="monthly-price">35</span>
                        <span className="yearly-price">23</span>
                        <span className="currency">USD</span>
                      </h2>
                      <p className="description">Ideal for marketers looking to <span>try</span> influencer marketing.</p>
                    </div>
                    <div className="features">
                      <p>
                        <strong>Instagram</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>TikTok</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>All</strong> Search Filters<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Filter profiles by engagement rate, number of followers, location
                          and many more.
                        </span>
                      </p>
                      <p>
                        <strong>100</strong> Contact Exports <span className="small">/ month</span><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Export all available info (e-mail, handle, URL, etc.).
                          Profiles without e-mail don’t use an export.
                          Unused exports won't rollover to the following month.
                        </span>
                      </p>
                      <p>
                        <strong>2</strong> Concurrent Campaigns<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Manage multiple campaign at the same time.
                          Once you're satisfied, export the campaign and create a new one.
                        </span>
                      </p><p className="empty">&nbsp;</p><p className="empty">&nbsp;</p><p className="empty">&nbsp;</p><p className="empty">&nbsp;</p><a className="btn btn-md" href="/#" target="_blank">
                        Try it for free
                      </a>
                    </div>
                  </div>
                </div><div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="plan" id="brand">
                    <div>
                      <p className="title">Brand</p>
                      <h2>
                        <span className="monthly-price">80</span>
                        <span className="yearly-price">54</span>
                        <span className="currency">USD</span>
                      </h2>
                      <p className="description">Ideal for brands or consultants wanting to <span>scale</span> their influencer marketing through mass e-mail outreach.</p>
                    </div>
                    <div className="features">
                      <p>
                        <strong>Instagram</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>TikTok</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>All</strong> Search Filters<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Filter profiles by engagement rate, number of followers, location
                          and many more.
                        </span>
                      </p>
                      <p>
                        <strong>500</strong> Contact Exports <span className="small">/ month</span><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Export all available info (e-mail, handle, URL, etc.).
                          Profiles without e-mail don’t use an export.
                          Unused exports won't rollover to the following month.
                        </span>
                      </p>
                      <p>
                        <strong>2</strong> Concurrent Campaigns<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Manage multiple campaign at the same time.
                          Once you're satisfied, export the campaign and create a new one.
                        </span>
                      </p><p>
                        <strong>2</strong> Client Accounts<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Assign campaigns to client accounts you manage.
                        </span>
                      </p><p>
                        <strong>Bulk</strong> Selection<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Select and export up to 1000 filtered profiles in a single click.
                        </span>
                      </p><p className="empty">&nbsp;</p><p className="empty">&nbsp;</p><a className="btn btn-md" href="/#" target="_blank">
                        Try it for free
                      </a>
                    </div>
                  </div>
                </div><div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="plan" id="agency">
                    <div>
                      <p className="title">Agency</p>
                      <h2>
                        <span className="monthly-price">200</span>
                        <span className="yearly-price">134</span>
                        <span className="currency">USD</span>
                      </h2>
                      <p className="description">Ideal for agencies launching <span>continuous campaigns</span>.</p>
                    </div>
                    <div className="features">
                      <p>
                        <strong>Instagram</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>TikTok</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>All</strong> Search Filters<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Filter profiles by engagement rate, number of followers, location
                          and many more.
                        </span>
                      </p>
                      <p>
                        <strong>2000</strong> Contact Exports <span className="small">/ month</span><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Export all available info (e-mail, handle, URL, etc.).
                          Profiles without e-mail don’t use an export.
                          Unused exports won't rollover to the following month.
                        </span>
                      </p>
                      <p>
                        <strong>7</strong> Concurrent Campaigns<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Manage multiple campaign at the same time.
                          Once you're satisfied, export the campaign and create a new one.
                        </span>
                      </p><p>
                        <strong>5</strong> Client Accounts<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Assign campaigns to client accounts you manage.
                        </span>
                      </p><p>
                        <strong>Bulk</strong> Selection<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Select and export up to 1000 filtered profiles in a single click.
                        </span>
                      </p><p>
                        <strong>1000</strong> Collected Profiles<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          If our database is not enough, we can collect NEW profiles
                          directly on Instagram for you using hashtags and/or filters.
                        </span>
                      </p><p>
                        <strong>Similar Profiles</strong> Search<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Submit a list of influencers you like and we'll build a
                          campaign for you with similar profiles.
                        </span>
                      </p><a className="btn btn-md" href="/#" target="_blank">
                        Try it for free
                      </a>
                    </div>
                  </div>
                </div><div className="col-xs-12 col-sm-6 col-md-12 col-lg-3">
                  <div className="plan" id="business">
                    <div>
                      <p className="title">Business</p>
                      <h2>
                        <span className="monthly-price">400</span>
                        <span className="yearly-price">267</span>
                        <span className="currency">USD</span>
                      </h2>
                      <p className="description">Ideal for big brands looking to scale their <span>ambassador program</span>.</p>
                    </div>
                    <div className="features">
                      <p>
                        <strong>Instagram</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>TikTok</strong> Database<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Use all of our search features to find the right influencers.
                        </span>
                      </p>
                      <p>
                        <strong>All</strong> Search Filters<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Filter profiles by engagement rate, number of followers, location
                          and many more.
                        </span>
                      </p>
                      <p>
                        <strong>5000</strong> Contact Exports <span className="small">/ month</span><svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Export all available info (e-mail, handle, URL, etc.).
                          Profiles without e-mail don’t use an export.
                          Unused exports won't rollover to the following month.
                        </span>
                      </p>
                      <p>
                        <strong>30</strong> Concurrent Campaigns<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Manage multiple campaign at the same time.
                          Once you're satisfied, export the campaign and create a new one.
                        </span>
                      </p><p>
                        <strong>20</strong> Client Accounts<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Assign campaigns to client accounts you manage.
                        </span>
                      </p><p>
                        <strong>Bulk</strong> Selection<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Select and export up to 1000 filtered profiles in a single click.
                        </span>
                      </p><p>
                        <strong>2000</strong> Collected Profiles<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          If our database is not enough, we can collect NEW profiles
                          directly on Instagram for you using hashtags and/or filters.
                        </span>
                      </p><p>
                        <strong>Similar Profiles</strong> Search<svg width={11} height={11} viewBox="0 0 11 11" fill="none" xmlns="/#" className="icon--info">
                          <path d="M6 3.91994V3H5V3.91994H6ZM6 8V4.43258H5V8H6Z" fill="#141514" />
                          <circle cx="5.5" cy="5.5" r={5} stroke="black" />
                        </svg><span className="tooltip">
                          Submit a list of influencers you like and we'll build a
                          campaign for you with similar profiles.
                        </span>
                      </p><a className="btn btn-md btn-crazy" href="/#" target="_blank">
                        Try it for free
                      </a>
                    </div>
                  </div>
                </div></div>
            </section><section className="container mobile-adjusted" id="testimonial">
              <div className="row around-xs">
                <div className="col-xs-12 col-lg-8 align-center">
                  <h3>Helping 1000+ agencies and e-commerce brands</h3>
                  <p className="quote">
                    "inBeat is the tech behind our ambassador program of 3000+ micro-influencers.
                    It saves us countless hours of research every month.""
                  </p>
                  <p>
                    <img src="../images/avatar-jp.png" alt="J.P. Brousseau" />
                    J.P. Brousseau, CEO at Phoneloops
                  </p>
                </div>
              </div>
            </section><section className="container mobile-adjusted m-tb-160" id="included">
              <div className="row">
                <div className="col-xs-12 col-md-4">
                  <h4>All paid plans include  →</h4>
                  <p className="small subtitle">
                    Unsure about anything?
                    <a href="/#" title="Book a demo" target="_blank">
                      Book a demo
                    </a> or
                    <a href="/#" title="Send an E-mail">send an E-mail</a>.
                  </p>
                </div>
                <div className="col-xs-6 col-md-4"><p className="title">Full Database Access</p>
                  <p className="small">Use all of our search features to find the right influencers.</p><p className="title">Live Support</p>
                  <p className="small">Access to our support team at any time of the day (waking).</p></div>
                <div className="col-xs-6 col-md-4"><p className="title">Instagram &amp; TikTok</p>
                  <p className="small">Export the influencers you selected and contact them directly.</p><p className="title">Unlimited Campaigns</p>
                  <p className="small">Organize your influencer marketing efforts in individual campaigns.</p></div>
              </div>
            </section><section className="container m-tb-160 mobile-adjusted" id="pricing-faq">
              <div className="row large-gutter">
                <div className="col-xs-12 col-md-12">
                  <h2>Fairly asked questions</h2>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">Can I cancel my subscription whenever I want?</p><p className="small">Yes, you can change or cancel your plan at any time in your settings. Once you have canceled your plan, you will retain access to your premium plan until the end of your subscription cycle. At this point, you will be moved to our free plan.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">How many credits do I need?</p><p className="small">This depends on the scale at which you want to do influencer marketing. Think about how many influencers you want to work with and how many you will need to contact. Our experience is that 200 credits is enough for 1 campaign per month.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">What do I get when I export my campaign?</p><p className="small">You will receive the following information, if available: Handle, Email, Profile URL, Language, Followers, Engagement, Topics, Website.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">We are a charity, do you have any special discounts?</p><p className="small">Absolutely. Contact us and we will unlock our charity plan for you.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">What counts as a monthly credit?</p><p className="small">For each influencer you export in a campaign, you will be charged 1 credit. If the influencer does not have an email linked to it, you will not be charged. If you export the same influencer in multiple campaigns, you will only be charged once. If you’re on the Free Plan, you still can’t export contacts without email.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">Should I hire an influencer marketing agency?</p><p className="small">It’s a question we get a lot, and the answer is <strong>it depends</strong>. Because a lot of our clients were looking for an <a href="/#">influencer marketing agency</a>, we created one that focuses strictly on micro-influencer marketing. You should consider factors such as internal resources, budget, complexity and scale when choosing between using a tool in-house or hiring an agency.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">Can I exceed my plan's credit?</p><p className="small">Our system will warn you if you exceed your plan limit. You will be able to upgrade your plan at this stage.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">When do I receive my monthly credits?</p><p className="small">You receive your credits every month on the date you signed up for your paid plan. If you upgrade your plan, you immediately receive the number of credits of the new plan.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">How do you spam-check your influencers?</p><p className="small">We pre-vet all of our profiles by checking content authenticity, engagement metrics, and fraudulent behaviors.</p>
                </div><div className="col-xs-12 col-sm-6 col-md-6"><p className="question">Do you offer a discount for bootstrapped companies?</p><p className="small">Yes! If you’ve launched your product, are charging for it, and haven’t taken outside investment, hit us up on the live chat and we’ll give you a 40% discount for your first 3 months with us to help with your marketing cost.</p>
                </div></div>
            </section> 
          </div>
        )
}

}
export default Pricing;