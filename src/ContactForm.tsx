import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

    //http://localhost:5000/send-email
    const response = await fetch('https://server-q89f.onrender.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();
    if (result.message === 'Email sent successfully') {
      alert('Your message has been sent!');
    } else {
      alert('Failed to send your message.');
    }
  };

  return (
    <section className="hero-section" style={{ marginBottom: "60px" }}>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", width: "300px" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ padding: "10px", width: "300px", height: "100px" }}
          />
        </div>
        <button type="submit" className="project-button" style={{ padding: "10px 20px" }}>Send Message</button>
      </form>
    </section>
  );
}

export default ContactForm;