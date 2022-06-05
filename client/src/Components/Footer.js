import './../App.css';
import React from "react";
import twitterLogo from './../assets/twitter-logo.svg';

// ツイッターリンク用の定数を定義する。
const TWITTER_HANDLE = 'HARUKI05758694';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

/**
 * Footerコンポーネント
 */
function Footer() {
    return (
        <div className="footer-container">
            <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
            <a
                className="footer-text"
                href={TWITTER_LINK}
                target="_blank"
                rel="noreferrer"
            >{`built with @${TWITTER_HANDLE}`}</a>
        </div>
    );
}

export default Footer;