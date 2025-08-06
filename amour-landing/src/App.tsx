import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <h1>Welcome to Amour Landing</h1>
          <p>Your beautiful landing page starts here</p>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="section-content">
            <h2>About Us</h2>
            <p>We are dedicated to creating amazing experiences for our users. Our team works tirelessly to bring you the best solutions.</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <div className="section-content">
            <h2>Our Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <h3>Feature 1</h3>
                <p>Amazing feature description goes here.</p>
              </div>
              <div className="feature-card">
                <h3>Feature 2</h3>
                <p>Another incredible feature description.</p>
              </div>
              <div className="feature-card">
                <h3>Feature 3</h3>
                <p>Yet another fantastic feature description.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefit Section */}
        <section id="benefit" className="section">
          <div className="section-content">
            <h2>Benefits</h2>
            <p>Discover all the amazing benefits of choosing our platform.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="section-content">
            <h2>Contact Us</h2>
            <p>Get in touch with us for any questions or inquiries.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
