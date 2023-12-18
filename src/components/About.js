import React from 'react';

export default function About() {
  return (
    <>
    <div>
       <header className='container' id="header2">
        <div id='heading'className='text-center'>About Us</div>
        <div id='aboutHeading'className='my-4'><p id='pa'>Welcome to Re-Assume, where career aspirations meet seamless creation. We are your dedicated partners in crafting professional resumes effortlessly. <strong>Why <span className='fw-bolder' id="title1">Re-</span><span className='fw-bold'>Assume?</span></strong></p></div>
        <strong id='center'>Features We're Proud Of:</strong>
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"id="drop" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <strong>Free and User-Friendly:</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Creating a resume shouldn't be a hassle or a financial burden. Re-Assume is not only free but also designed with simplicity in mind, ensuring that anyone, regardless of their background, can create a polished and effective resume..</div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" id="drop" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <strong>Endless Possibilities:</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Your career path is unique, and so should be your resume. Re-Assume offers a range of templates and customization options, allowing you to tailor your resume to reflect your individual strengths and aspirations.
    </div>
    </div>
  </div>
  <div className="accordion-item my-3">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed"id="drop" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <strong>Multi-Resume Creation:</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">With our login/signup option, you can build and manage multiple resumes effortlessly. Tailor each resume to different job opportunities, showcasing the diverse skills and experiences that make you stand out.</div>
    </div>
  </div>

</div>
    </header>

    <section className='container my-6'>
        
      <div className="my-3"> <strong >Our Mission:</strong>
        <p>At Re-Assume, our mission is to empower individuals on their journey to career success. We understand the importance of a well-crafted resume in opening doors to opportunities, and we're here to make that process accessible to everyone.</p>
</div>
      <div className="my-3"><strong>Our Commitment to Privacy:</strong>
        <p>Your data security is paramount to us. Re-Assume employs the latest encryption and privacy measures to safeguard your personal and professional information. Rest assured, your journey with us is confidential and secure.</p>
</div>
      <div className="my-3"> <strong>Join the Re-Assume Community:</strong>
        <p>Connect with a community of aspiring professionals, job seekers, and career enthusiasts. Follow us on [social media links] for tips, trends, and success stories. Your success is our success, and we're here to support you every step of the way.</p>
</div>
<div className="my-3"> 
        <strong>Get Started Today:</strong>
        <p>Ready to take the next step in your career? Create your free account on Re-Assume today. Let's build a future where every resume tells a success story.</p>
</div>
        
       
    </section>


    <footer className='container'>
      <hr />
        <p>Thank you for choosing <strong><span className='fw-bolder' id="title1">Re-</span><span className='fw-bold'>Assume</span></strong>.</p>
    </footer>
   
    </div>
     </>
   
  )
}
