import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-links">
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="signup" smooth={true} duration={500}>Sign Up</Link></li>
        </ul>
        <div className="logo">Parthiban Blog</div>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer>
      <ul className="footer-links">
        <li>About</li>
        <li>Contact</li>
        <li>Terms of Use</li>
        <li>Privacy Policy</li>
      </ul>
      <p>© {new Date().getFullYear()} @Parthiban Blog. All Rights Reserved.</p>
    </footer>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <img src="https://www.mymaldives.com.au/wp-content/uploads/sites/11/2016/12/Beach-Banner.jpg" alt="Beach" />
      <div className="quote">"Blogging is the art of sharing stories."</div>
    </div>
  );
};

const MainContent = () => {
  return (
    <main>
      <div className="blog-content">
        <h1>Travelling Adventure</h1>
        <p>Adventure travel isn’t just about scaling treacherous peaks or diving into raging rivers. It’s about pushing your limits, embracing the unknown, and feeling truly alive. Whether you’re kayaking through remote fjords, exploring hidden caves, or simply wandering off the beaten path, adventure awaits at every turn.
        </p>
        <h1>What Is Adventure Travel?</h1>
        <p>Adventure travel defies definition—it’s as diverse as the adventurers themselves. Here’s our take: Adventure travel is anything that takes you out of your comfort zone and ignites your spirit. It needn’t be extreme or life-threatening; it’s about seeking unique experiences that resonate with your soul.
        </p>
        <img src="https://img.freepik.com/premium-photo/traveler-walks-rock-that-floats-sky-digital-art-style-illustration-painting-fantasy-concept-traveler-rock_743201-8025.jpg" alt="Travel" />
      </div>
    </main>
  );
};

const Location = () => {
  return (
    <div className="location">
      <h2>I wonder if the ocean smells different on the other side of the world.</h2>
      <div className="image-gallery">
        <div className="image-wrapper left">
<p>Sandy Beach</p>
          <img src="https://www.desktopbackground.org/download/o/2011/12/26/318496_free-beach-screensavers-and-wallpapers-tropical-beach-scenes-1024_1024x640_h.jpg" alt="Beach 1" />
          
        </div>
        <div className="image-wrapper right">
          <img src="https://naturetingz.com/wp-content/uploads/2020/09/Green-Sand-Beach.jpg" alt="Beach 2" />
          <p>Green Sand Beach</p>
        </div>
        <div className="image-wrapper left">
<p>White Sand Beach</p>
          <img src="https://cdn.architecturendesign.net/wp-content/uploads/2014/08/249.jpg" alt="Beach 3" />
          
        </div>
        <div className="image-wrapper right">
          <img src="https://naturetingz.com/wp-content/uploads/2020/09/A-Beautiful-Cave-Beach-768x513.jpg" alt="Beach 4" />
          <p>Cave Beach</p>
        </div>
        <div className="image-wrapper left">
<p>Seashell Beach</p>
          <img src="https://naturetingz.com/wp-content/uploads/2020/09/Sanibel-Shell-Beach.jpg" alt="Beach 5" />
        </div>
      </div>
    </div>
  );
};

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!isValidEmail(email)) {
      setError('Invalid email address');
      return;
    }
    // Proceed with sign-up process
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleChange} />
      <button onClick={handleSignUp}>Sign Up</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent id="home" />
      <Location id="about" />
      <SignUp id="signup" />
      <Footer />
    </div>
  );
};

export default App;
