import React, { useState, useEffect } from "react";
import "./index.css";

// Animated AZ Technologies heading
function AnimatedAZTechnologies() {
  const [showFullName, setShowFullName] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowFullName(v => !v);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="mb-6 flex justify-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-500 flex items-center gap-2">
        <span className="transition-all duration-500" style={{minWidth: showFullName ? '320px' : '40px', display: 'inline-block', textAlign: 'right'}}>
          {showFullName ? "Andrés Felipe Jiménez Pérez" : "AZ"}
        </span>
        <span className="ml-2">Technologies</span>
      </h2>
    </div>
  );
}

const cyclingWords = [
  "profit",
  "time efficiency",
  "growth",
  "solutions",
  "peace of mind",
  "opportunity",
  "automation",
  "clarity"
];

// Find the longest word for fixed pill width
const longestWord = cyclingWords.reduce((a, b) => (a.length > b.length ? a : b), "");

function App() {
  // Cycling phrase state
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % cyclingWords.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm flex items-center h-12 md:h-14">
        <div className="flex items-center justify-center w-full max-w-5xl mx-auto px-4">
          {/* Logo and nav tabs as a single group */}
          <div className="flex space-x-6 md:space-x-10">
            <a href="#home" className="flex items-center mr-6"> 
              <img src="/images/az_logo.jpg" alt="AZ Technologies Logo" className="h-8 w-auto" style={{maxWidth: '40px'}} />
            </a>
            <a href="#projects" className="text-gray-700 font-light text-base md:text-lg px-2 py-1 hover:underline hover:underline-offset-4 transition">Projects</a>
            <a href="#cta" className="text-gray-700 font-light text-base md:text-lg px-2 py-1 hover:underline hover:underline-offset-4 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
       <section id="home" className="relative flex flex-col items-center justify-center text-center w-full min-h-screen md:min-h-[calc(100vh-56px)] min-h-[calc(100vh-48px)] overflow-hidden" style={{backgroundImage: "url('/images/sanfrancisco_banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center -80%', backgroundRepeat: 'no-repeat'}}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60 backdrop-blur-sm z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 md:mb-12" style={{letterSpacing: '-0.04em', lineHeight: 1.05, fontFamily: 'Montserrat, sans-serif', color: '#222', display: 'inline-block'}}>
            AZ tech<span style={{color: '#4285F4', fontSize: '0.7em', marginLeft: '0.12em', verticalAlign: 'super'}}>&#8226;</span>
          </h1>
          <div className="flex flex-col items-center justify-center mb-0 w-full px-2 sm:px-0" style={{minHeight: '64px'}}>
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Turn your challenges into</span>
            <span
              className="font-bold flex items-center justify-center mt-0"
              style={{
                background: 'linear-gradient(90deg, #4f8cff 0%, #a259ff 50%, #ff5ca7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                fontSize: '2rem',
                fontWeight: 700,
                fontFamily: 'monospace',
                lineHeight: 1.25,
                letterSpacing: '0.01em',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                // Removed overflow: 'hidden' to avoid cutting descenders
              }}
            >
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl block" style={{fontWeight: 700, lineHeight: 1.25}} key={cyclingWords[wordIndex]}>{cyclingWords[wordIndex]}</span>
            </span>
            {/* How it Works Path Diagram - now inside hero with contrast */}
            <div className="w-full max-w-4xl mx-auto mt-8 mb-2 bg-white/90 rounded-2xl shadow-xl border border-blue-100 p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0">
                {/* Step 1 */}
                <div className="flex flex-col items-center flex-1 min-w-[180px]">
                  <div className="mb-2 text-4xl md:text-5xl text-blue-400">1️⃣</div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Discovery</h3>
                  <p className="text-gray-600 text-center text-sm md:text-base">We understand your business needs and challenges.</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex mx-2 text-3xl text-gray-300">→</div>
                {/* Step 2 */}
                <div className="flex flex-col items-center flex-1 min-w-[180px]">
                  <div className="mb-2 text-4xl md:text-5xl text-green-400">2️⃣</div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Software Solution</h3>
                  <p className="text-gray-600 text-center text-sm md:text-base">We design and implement a tailored solution for you.</p>
                </div>
                {/* Arrow */}
                <div className="hidden md:flex mx-2 text-3xl text-gray-300">→</div>
                {/* Step 3 */}
                <div className="flex flex-col items-center flex-1 min-w-[180px]">
                  <div className="mb-2 text-4xl md:text-5xl text-purple-400">3️⃣</div>
                  <h3 className="font-semibold mb-1 text-lg text-gray-900">Impact</h3>
                  <p className="text-gray-600 text-center text-sm md:text-base">You see measurable results and business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer between banner and next section */}
      <div style={{height: '32px'}}></div>

      {/* Social Proof */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50 border-t border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-base text-gray-600 mb-4 tracking-wide uppercase">Trusted by</div>
          <div className="flex flex-wrap gap-12 justify-center items-center">
            {/* Real logos reordered: uniandes, unal, telefonica, ajp */}
            <div className="w-56 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 p-4">
              <img src="/images/trusted/uniandes_logo.png" alt="Uniandes Logo" className="max-h-28 max-w-[220px] object-contain" />
            </div>
            <div className="w-56 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 p-4">
              <img src="/images/trusted/unal_logo.png" alt="Universidad Nacional Logo" className="max-h-28 max-w-[220px] object-contain" />
            </div>
            <div className="w-56 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 p-4">
              <img src="/images/trusted/telefonica_logo.jpg" alt="Telefonica Logo" className="max-h-28 max-w-[220px] object-contain" />
            </div>
            <div className="w-56 h-32 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200 p-4">
              <img src="/images/trusted/ajp_logo.jpg" alt="AJP Logo" className="max-h-28 max-w-[220px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Features (Brief) */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Projects</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1,2,3].map(i => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 shadow border border-gray-200 flex flex-col items-center text-center">
                <div className="mb-6 text-5xl text-gray-400">[Feature {i} Icon]</div>
                <h3 className="font-semibold mb-3 text-xl text-gray-900">[Feature {i} Title]</h3>
                <p className="text-gray-600">[Feature {i} Description]</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Testimonials</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* LinkedIn Recommendation - Elizabeth */}
            <div className="bg-gray-50 rounded-xl p-8 shadow border border-gray-200 flex flex-col">
              <p className="text-lg text-gray-700 mb-4">“It is gratifying to recommend Andrés Felipe Jiménez Pérez. His dedication and exceptional skills stand out in every project. He is a committed, creative, and proactive professional. His integrity and work ethic are admirable, and I am sure he will continue to be a valuable asset to any team he works with.”</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src="/images/testimonials/elizabeth.jpg" alt="Elizabeth Blandón Bermúdez" className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <a href="https://www.linkedin.com/in/elizablabe/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">Elizabeth Blandón Bermúdez</a>
                  <div className="text-gray-500 text-sm">ICFES General National Director<br/>Mentor of Andrés Felipe (January 2024)</div>
                </div>
              </div>
            </div>
            {/* LinkedIn Recommendation - Luis Carlos Sanabria Castro */}
            <div className="bg-gray-50 rounded-xl p-8 shadow border border-gray-200 flex flex-col">
              <p className="text-lg text-gray-700 mb-4">“Super Andres Felipe!! We are all very proud of your excellent engagement at Achievers Lab! You have a bright future and count always with our support!!!!”</p>
              <div className="flex items-center gap-3 mt-auto">
                {/* If you have a profile photo, add it here: <img src="/images/testimonials/luiscarlos.jpg" alt="Luis Carlos Sanabria Castro" className="w-10 h-10 rounded-full object-cover mr-3" /> */}
                <img src="/images/testimonials/luis-carlos.jpg" alt="Luis Carlos Sanabria Castro" className="w-10 h-10 rounded-full object-cover mr-3" />
                <div>
                  <a href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7321363105861492736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7321363105861492736%2C7321365334223949824%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287321365334223949824%2Curn%3Ali%3AugcPost%3A7321363105861492736%29" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">Luis Carlos Sanabria Castro</a>
                  <div className="text-gray-500 text-sm">Universidad de los Andes<br/>Innovation & Entrepreneurship Professor</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Value */}
      <section id="cta" className="py-20 bg-blue-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to unlock your next big opportunity?</h2>
          <p className="text-lg text-gray-700 mb-8">Let’s talk about how AZ tech can help you solve your toughest challenges.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.linkedin.com/in/anjimenezp/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition">
  <img src="/images/in_logo.png" alt="LinkedIn" className="h-[1.5em] w-auto mr-2 align-top inline-block" />
  LinkedIn
</a>
            <a href="https://wa.me/573214190213?text=I%20have%20a%20challenge%20with%20my%20business%2C%20I%20want%20to%20ask%20for%20a%20software%20solution" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg text-lg transition" aria-label="WhatsApp">
              <img src="/images/wpp_icon.png" alt="WhatsApp" className="h-[1.5em] w-auto mr-2 align-top inline-block" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-gray-100 text-center border-t border-gray-800">
  <div className="flex flex-col items-center justify-center gap-2 mb-2">
    <span className="text-lg flex items-center justify-center">
      Made with
      <span role="img" aria-label="love" className="mx-1 animate-pulse text-red-500">❤️</span>
      in Colombia by <span className="font-bold ml-1">Andrés Felipe Jiménez Pérez</span>
    </span>
    <div className="flex gap-4 mt-1 justify-center">
      <a href="https://www.linkedin.com/in/anjimenezp/" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-300">LinkedIn</a>
      <a href="https://wa.me/573214190213" target="_blank" rel="noopener noreferrer" className="hover:underline text-green-400">WhatsApp</a>
    </div>
  </div>
  <div className="text-xs text-gray-400 mt-2">&copy; {new Date().getFullYear()} AZ Tech. All rights reserved.</div>
</footer>
    </div>
  );
}

export default App;
