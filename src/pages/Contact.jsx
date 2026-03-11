import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bjm6dya",
      "template_efoc046",
      form.current,
      "7wSxYb4mtVmba9HdR"
    )
    .then(() => {
      alert("Message sent successfully 🚀");
      form.current.reset();
    })
    .catch(() => {
      alert("Something went wrong ❌");
    });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;