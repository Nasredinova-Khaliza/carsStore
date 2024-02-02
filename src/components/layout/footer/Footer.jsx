
import scss from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container footer-content">
        <div className={scss.footer_links}>
          <a href="#">Home</a>
          <a href="#">Cars</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
