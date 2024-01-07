import React from "react";
import "../styles/base.css";

const Hero = () => {
  return (
    <>
      {/* <div class="container"> */}
      <div class="hero-section">
        <div class="column">
          <h2>Find your Doctor or Take Appointments</h2>
          <p>Explore our services to find the right practitioner for you.</p>
          <a href="/specialists" class="btn">
            Book Appointment
          </a>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
        <div class="column">
          <img src="/doctor.jpg" alt="Doctor Image" />
          <a href="#" class="btn">
            Book Appointment
          </a>
        </div>
      </div>
      <div class="what-we-do">
        <h2 class="headers">What We Do</h2>
        <p>
          {" "}
          At PataDoc, we are more than just a digital healthcare platform; we
          are your gateway to a healthier, happier life. Imagine a world where
          finding the right healthcare specialist is as easy as a few clicks.
          PataDoc brings this vision to life, connecting you with a diverse
          array of medical experts all across Kenya. Our revolutionary platform
          is designed to seamlessly bridge the gap between patients and
          healthcare specialists, ensuring that you can easily navigate the vast
          landscape of healthcare services. Gone are the days of endless
          searches and confusing directories. We empower you to effortlessly
          locate and engage with the perfect healthcare specialist, making your
          well-being our top priority. Join us on this transformative healthcare
          experience, where convenience meets expertise, and your journey to
          optimal health begins with a simple click.
        </p>
      </div>
      <section>
        <h2 class="headers">Most Sought Services</h2>
        <div class="services">
          <div class="what-we-do-column">
            <span class="top-icon">👶</span>
            <h2>Paediatrics and Child Health</h2>
            <p>
              Our dedicated paediatricians provide expert care for your little
              ones, ensuring their health and well-being from infancy through
              adolescence. Trust us to nurture the health of your most precious
              treasures.
            </p>
            <span
              class="bottom-arrow"
              onclick="location.href='#link-to-doctors'"
            >
              ➡️
            </span>
          </div>
          <div class="what-we-do-column">
            <span class="top-icon">⚕️</span>
            <h2>Surgery</h2>
            <p>
              Experience top-notch surgical care with our skilled and
              compassionate surgeons. From routine procedures to complex
              surgeries, we prioritize your safety and recovery at every step of
              the surgical journey.
            </p>
            <span
              class="bottom-arrow"
              onclick="location.href='#link-to-doctors'"
            >
              ➡️
            </span>
          </div>
          <div class="what-we-do-column">
            <span class="top-icon">🤰</span>
            <h2>Obstetrics and Gynaecology</h2>
            <p>
              Our obstetric and gynaecological experts are committed to
              providing comprehensive care for women's health. Whether you are
              expecting a new addition to your family or seeking routine women's
              healthcare services, we are here for you.
            </p>
            <span
              class="bottom-arrow"
              onclick="location.href='#link-to-doctors'"
            >
              ➡️
            </span>
          </div>
        </div>
      </section>
      <div class="Why-us">
        <div class="column">
          <img src="/doctor2.jpg" alt="Doctor Image" />
          <a href="#" class="btn">
            Find Your Doctor
          </a>
        </div>
        <div class="why-us-column">
          <h2 class="headers">Why PataDoc</h2>
          <b> 50+ Experienced Practitioners </b>
          <p>
            Embark on your healthcare journey with confidence as PataDoc boasts
            a team of 50+ seasoned practitioners. Our experts bring a wealth of
            experience.
          </p>
          <b>24/7 Instant Support</b>
          <p>
            Need assistance at any hour? PataDoc stands out with 24/7 instant
            support, providing you with peace of mind and timely answers to your
            healthcare queries.
          </p>
          <b>Verified Reviews</b>
          <p>
            PataDoc ensures transparency and credibility with verified reviews.
            Our community shares their experiences, empowering you to make
            informed choices and fostering a trusting relationship with our
            practitioners.
          </p>
          <a href="#" class="btn">
            Book Appointment
          </a>
          <a href="#" class="btn">
            Learn More
          </a>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default Hero;
