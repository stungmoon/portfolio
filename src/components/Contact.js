import github from "../github-pk.svg"
import linkedin from "../linkedin-pk.svg"
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "service_8tcuzd8";
const TEMPLATE_ID = "template_w659lk8";
const USER_ID = "sMCOkg8PrKvOnwtlS"

function Contact() {  

    const handleOnSubmit = (e) => {
      e.preventDefault();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Thank you for sending a message. You will receive a confirmation email shortly."
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong, please retry.",
            text: error.text,
          })
        });
      e.target.reset()
    };

  return (
        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <p>You can find me on Github, LinkedIn, or simply email me with the form below.</p>
          <div className="links-wrapper">
            <a href="https://github.com/Ademoons"><img className="social-icons" src={github} alt="github logo"></img></a>
            <a href="https://www.linkedin.com/in/giuliabroli"><img className="social-icons" src={linkedin} alt="linkedin logo"></img></a>
          </div>

      <Form id="email-form" onSubmit={handleOnSubmit}>
        <Form.Field
          id="input"
          control={Input}
          label="Your Name"
          name="user_name"
          placeholder="John Doe"
          required
        />
        <Form.Field
          id="input"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="john@doe.com"
          required
        />        
        <Form.Field
          id="textarea"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Words are welcome here :)"
          required
        />
        <Button type="submit" >Email Me</Button>
      </Form>


          {/* <form>

            <label>Your Name</label>
            <input placeholder="John Doe"></input>
            <label>Email Address</label>
            <input placeholder="john@doe.com"></input>
            <label>Insert Message</label>
            <textarea placeholder="Words are welcome here :)"></textarea>
            <button>Email Me</button>
          </form> */}
        </section>
    )
  }

export default Contact;