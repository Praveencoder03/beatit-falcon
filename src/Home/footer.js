import React  from 'react'

class Footer extends React.Component{
    render(){
        return(
<footer>
<div className="container mobile-adjusted">
  <div className="row">
    <div className="col-xs-6 col-md-3">
      <p className="small">inBeat</p>
      <ul>
        <li>
          <a href="https://app.inbeat.co" title="Sign in">Sign in</a>
        </li><li>
          <a href="https://www.inbeat.co/pricing" title="Pricing">Pricing</a>
        </li><li>
          <a href="https://www.inbeat.co/top-influencers/instagram" title="Top Instagram Influencers">Top Instagram Influencers</a>
        </li><li>
          <a href="https://www.inbeat.co/top-influencers/tiktok" title="Top TikTok Influencers">Top TikTok Influencers</a>
        </li><li>
          <a href="https://www.inbeat.co/engagement-rate-calculator-instagram" title="Instagram Engagement Rate Calculator">Instagram Engagement Rate Calculator</a>
        </li><li>
          <a href="https://www.inbeat.co/engagement-rate-calculator-tiktok" title="TikTok Engagement Rate Calculator">TikTok Engagement Rate Calculator</a>
        </li></ul>
    </div>
    <div className="col-xs-6 col-md-3">
      <p className="small">Ressources</p>
      <ul><li>
          <a href="https://www.inbeat.co/articles" title="Articles">Articles</a>
        </li><li>
          <a href="/#" title="The Pulse Podcast">The Pulse Podcast</a>
        </li><li>
          <a href="/#" title="Affiliate">Affiliate</a>
        </li><li>
          <a href="/#" title="Privacy Policy">Privacy Policy</a>
        </li><li>
          <a href="/#" title="Terms & Conditions">Terms &amp; Conditions</a>
        </li></ul>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <p className="small">Support</p>
      <ul>
        <li>
          <a href="/#" title="Book a demo" target="_blank">
            Book a demo
          </a>
        </li>
        <li><a href="mailto:david@inbeat.co" title="Send an e-mail">Send us an e-mail</a></li>
        <li>
          <a href="/#" title="Fax" target="_blank">Fax</a>
        </li>
      </ul>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-3">
      <p className="small">Social</p>
      <div className="row">
        <div className="col-xs-6">
          <ul>
            <li>
              <a href="/#" title="Facebook" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="/#" title="Instagram" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a href="/#" title="TikTok" target="_blank">
                TikTok
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6">
          <ul>
            <li>
              <a href="/#" title="Youtube" target="_blank">
                Youtube
              </a>
            </li>
            <li>
              <a href="/#" title="Linkedin" target="_blank">
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="row bottom middle-xs">
    <div className="col-xs-6 col-md-9">
      <span>inBeat. <a href="/#" title="Bug Bounty">Found a bug?</a></span>
    </div>
    <div className="col-xs-6 col-md-3">
      <span className="made">Made with love in Montreal</span>
    </div>
  </div>
</div>
</footer>
 )
}

}
export default Footer;