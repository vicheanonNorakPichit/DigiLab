import React from "react";
import Grade from "./Grade";

function Footer() {
  return (
    <footer className="footer font-poppins p-10 bg-main text-neutral-content">
      <nav>
        <header className="footer-title text-white opacity-100 bg-center">
          ព័ត៑មានបន្ថែមអំពី Digi-Lab?
        </header>
        <div className="text-white bg-second no-border">
          <Grade text="ចុចនៅទីនេះ" />
        </div>
      </nav>
    </footer>
  );
  <footer className="footer p-10 bg-main text-neutral-content">
    <nav>
      <header className="footer-title text-second opacity-100">Feature</header>
      <a className="link link-hover"> Virtual Experiment</a>
      <a className="link link-hover">Group Experiment</a>
      <a className="link link-hover">Explore and Reward</a>
      <a className="link link-hover">Q&A</a>
    </nav>
    <nav>
      <header className="footer-title text-second opacity-100">
        To know More
      </header>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
    </nav>
    <nav>
      <header className="footer-title text-second opacity-100">
        Parnership
      </header>
      <a className="link link-hover">DirectPlay</a>
      <a className="link link-hover">CADT IDRI</a>
      <a className="link link-hover">Spin-Offs</a>
    </nav>
    <nav>
      <header className="footer-title text-second opacity-100">Legal</header>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
    </nav>
  </footer>;
}

export default Footer;
