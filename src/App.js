import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <div className="container">
        {/* <!-- Flash Banner --> */}
        <div className="flash-banner">
            🔥 LIMITED TIME: 50% OFF First Month + FREE Trial className | Only 20 Spots Available This Month!
        </div>
        
        {/* <!-- Header Section --> */}
        <div className="header">
            <div className="logo">
                <div className="logo-icon"><img src='brain.png' alt="image"></img></div>
                <div className="company-name">BRIGHTMIND LAB</div>
            </div>
            <div className="urgency-badge">⏰ ENROLLMENT CLOSING SOON!</div>
            <div className="sub-headline">PREPARE YOUR CHILD FOR THE FUTURE</div>
            <div className="main-headline">CODING • ENGLISH • AI • BLOCKCHAIN</div>
            <div style={{fontSize: "18px", marginTop: "15px", opacity: "0.9"}}>
                <strong>REAL SKILLS. REAL CONFIDENCE. REAL FUTURE.</strong>
            </div>
        </div>
        
        {/* <!-- Benefits Section --> */}
        <div className="benefits-section">
            <h2 className="benefits-title">WHY SMART PARENTS CHOOSE US</h2>
            <div className="benefits-grid">
                <div className="benefit-item">
                    <span className="benefit-icon">💰</span>
                    <div className="benefit-title">Future-Proof Income</div>
                    <div className="benefit-desc">Tech jobs pay 3x more than average careers</div>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">🎯</span>
                    <div className="benefit-title">Better Grades</div>
                    <div className="benefit-desc">Coding improves math & science scores by 40%</div>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">🚀</span>
                    <div className="benefit-title">AI Advantage</div>
                    <div className="benefit-desc">Master AI tools before they become mandatory</div>
                </div>
                <div className="benefit-item">
                    <span className="benefit-icon">🌟</span>
                    <div className="benefit-title">Confidence Boost</div>
                    <div className="benefit-desc">Watch your shy child become a confident creator</div>
                </div>
            </div>
        </div>
        
        {/* <!-- Stats Banner --> */}
        <div className="stats-banner">
            <div className="stats-grid">
                <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Parents See Improvement in 30 Days</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">3X</span>
                    <span className="stat-label">Better Problem-Solving Skills</span>
                </div>
                <div className="stat-item">
                    <span className="stat-number">85%</span>
                    <span className="stat-label">Students Continue Advanced Programs</span>
                </div>
            </div>
        </div>
        
        {/* <!-- About Section --> */}
        <div className="about-section">
            <h2 className="section-title">TRANSFORM YOUR CHILD INTO A TECH GENIUS</h2>
            <p className="about-text">We don't just teach coding - we build confident, creative problem-solvers ready for tomorrow's world. From Scratch games to Python programming, AI mastery, and even blockchain basics - your child learns skills that translate to academic success and future career dominance.</p>
            
            <div className="unique-proposition">
                <h3 style={{fontSize: "24px", marginBottom: "15px"}}>🎯 OUR SECRET WEAPON</h3>
                <p style={{fontSize: "18px"}}>We're the ONLY institute teaching kids how to use AI and blockchain responsibly - giving them a 10-year head start over their peers!</p>
            </div>
            
            <div className="special-highlight">
                <strong>Ages 8-20 • Small classNamees (Max 6 Students) • English Communication Included</strong>
            </div>
        </div>
        
        {/* <!-- Services Grid --> */}
        <div className="services-grid">
            <div className="service-column">
                <h3>🚀 CORE PROGRAMS</h3>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>Scratch Programming (Ages 6-12)</strong>
                        Visual coding that builds logical thinking through games
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>Python & JavaScript (Ages 12+)</strong>
                        Real programming languages used by professionals
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>English Communication Skills</strong>
                        Technical writing and presentation confidence
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>AI & ChatGPT Mastery</strong>
                        Learn to use AI tools effectively and ethically
                    </div>
                </div>
            </div>
            
            <div className="service-column">
                <h3>💎 SPECIAL PROGRAMS</h3>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>Blockchain Basics (Ages 14+)</strong>
                        Understand crypto, digital money & future finance
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>ChatGPT for Homework</strong>
                        Smart study techniques using AI responsibly
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>Project Portfolio Building</strong>
                        Create impressive projects for college applications
                    </div>
                </div>
                <div className="service-item">
                    <span className="service-check">✓</span>
                    <div className="service-text">
                        <strong>Parent Progress Reports</strong>
                        Weekly updates with photos and videos
                    </div>
                </div>
            </div>
        </div>
        
        {/* <!-- Testimonials
        <div className="testimonials">
            <h3 className="section-title">REAL PARENTS, REAL RESULTS</h3>
            <div className="testimonial">
                <div className="testimonial-text">My 10-year-old went from struggling with math to creating his own cryptocurrency game in 4 months. His teachers are amazed at his logical thinking improvement!</div>
                <div className="testimonial-author">- Fatima K., Software Engineer & Mother</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-text">The AI training helped my 16-year-old daughter get the highest score in her computer science className. She's now teaching her friends how to use ChatGPT properly!</div>
                <div className="testimonial-author">- Ahmed R., Business Owner</div>
            </div>
            <div className="testimonial">
                <div className="testimonial-text">Small className sizes mean real attention. My shy son now confidently presents his coding projects and speaks better English than kids 2 years older!</div>
                <div className="testimonial-author">- Sarah M., Doctor & Mother of 3</div>
            </div>
        </div> --> */}
        
        {/* <!-- Guarantee Section --> */}
        <div className="guarantee-section">
            <h3 className="guarantee-title">🛡️ OUR IRON-CLAD GUARANTEE</h3>
            <p className="guarantee-text">If your child doesn't show measurable improvement in confidence and skills within 30 days, we'll refund 100% of your money - no questions asked!</p>
            <div style={{fontSize: "16px", opacity: "0.9"}}>We're that confident in our results!</div>
        </div>
        
        {/* <!-- Urgency Section --> */}
        <div className="urgency-section">
            <h3 className="urgency-title">⚡ ACT FAST - SPOTS FILLING QUICKLY!</h3>
            <p className="urgency-text">Only 20 students accepted this month to maintain quality!</p>
            <div className="countdown-timer">
                <div style={{fontSize: "18px", fontWeight: "bold"}}>EARLY BIRD SPECIAL ENDS IN:</div>
                <div style={{fontSize: "24px", marginTop: "10px"}}>🕐 7 DAYS REMAINING</div>
            </div>
            <p style={{fontSize: "18px"}}>12 spots already taken - Don't let your child miss out!</p>
        </div>
        
        {/* <!-- Contact Section --> */}
        <div className="contact-section">
            <h2 className="contact-title">SECURE YOUR CHILD'S FUTURE TODAY</h2>
            <div className="phone-number">📞 +923390085730</div>
            
            <div className="contact-methods">
                <div className="contact-method">
                    <span className="contact-icon">💬</span>
                    <span>WhatsApp Ready</span>
                </div>
                <div className="contact-method">
                    <span className="contact-icon">🏠</span>
                    <span>Home Visits</span>
                </div>
                <div className="contact-method">
                    <span className="contact-icon">💻</span>
                    <span>Online Classes</span>
                </div>
                <div className="contact-method">
                    <span className="contact-icon">🎁</span>
                    <span>FREE Trial</span>
                </div>
            </div>
            
            <button className="cta-button">CALL NOW - DON'T WAIT!</button>
            <div style={{fontSize: "16px", marginTop: "15px", opacity: "0.9"}}>
                📅 Book Your FREE Consultation & Trial class Today
            </div>
            <div className="tagline">INSPIRE. CODE. INNOVATE.</div>
        </div>
        
        {/* <!-- Local Trust --> */}
        <div className="local-trust">
            👨‍🏫 Taught by Local Expert Tutor in Your Area 
        </div>
    </div>
      </header>
    </div>
  );
}

export default App;
