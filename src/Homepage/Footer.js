import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container footer_flex">
        <div>
          <ul className="footer_nav">
            <li>
              <Link to="/">About us </Link>
            </li>
            <li>
              <Link to="/">A Blog </Link>
            </li>
            <li>
              <Link to="/">Press </Link>
            </li>
            <li>
              <Link to="/">IOS app </Link>
            </li>
            <li>
              <Link to="/">Android app </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="social_links">
            <li>
              <Link to="/" className="logo-facebook">
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className="logo-twitter">
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className="logo-youtube">
                <ion-icon name="logo-youtube"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className="logo-snapchat">
                <ion-icon name="logo-snapchat"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <p>Copyright &copy; 2020 by HealthWize. All rights reserved.</p>
      </div>
    </footer>
  );
}
