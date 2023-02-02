import React from "react";

function Contact() {
  return (
    <div>
      {" "}
      <section id="contact">
        <h2 class="text-important">contact me</h2>
        <form>
          <label>Full Name</label>
          <input type="text" placeholder="Email" />
          <label>Email</label>
          <input type="email" placeholder="Email" />
          <label>Message</label>
          <textarea rows="5" cols="40"></textarea>
          <button>Send</button>
        </form>
      </section>
      ,
    </div>
  );
}

export default Contact;
