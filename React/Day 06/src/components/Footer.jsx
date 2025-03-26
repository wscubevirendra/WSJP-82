const Footer = () => {
    return (
      <footer className="bg-dark text-light py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
          <ul className="list-inline mt-2">
            <li className="list-inline-item">
              <a href="#" className="text-light">Privacy Policy</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="#" className="text-light">Terms of Service</a>
            </li>
            <li className="list-inline-item">|</li>
            <li className="list-inline-item">
              <a href="#" className="text-light">Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;