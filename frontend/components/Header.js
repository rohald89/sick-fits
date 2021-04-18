import Link from 'next/link';
import Nav from './Nav';

const Header = () => (
  <header>
    <div className="bar">
      <Link href="/">Sick Fits</Link>
    </div>
    <div className="sub-bar">
      <p>search</p>
    </div>
    <Nav />
  </header>
);

export default Header;
