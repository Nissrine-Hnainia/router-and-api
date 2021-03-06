import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
            <section id="footer">
        <div className="container">
          <div className="row text-center text-xs-center text-sm-left text-md-left">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right" />Home</a></li>
                <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right" />About</a></li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <h5>Quick links</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right" />FAQ</a></li>
                <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right" />Get Started</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-facebook" /></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-twitter" /></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-instagram" /></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-google-plus" /></a></li>
                <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" ><i className="fa fa-envelope" /></a></li>
              </ul>
            </div>
            <hr />
          </div>	
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u></p>
              <p className="h6">?? All right Reversed.
              <a className="text-green ml-2" href="https://www.sunlimetech.com" >Sunlimetech</a>
              </p>
            </div>
            <hr />
          </div>	
        </div>
      </section>
        </div>
    )
}

export default Footer
