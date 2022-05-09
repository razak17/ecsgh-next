import style from 'styles/Contact.module.css';
import Card from './Card';
import Image from 'next/head'

const Contact = () => {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>Get In Touch</h3>
        <h1 className={style.subtitle}>Contact Us</h1>
        <div>
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          iusto molestias accusamus rem nobis est, et laborum harum doloremque
          nemo non, minima quos totam labore
          </p>
        </div>
        <div className={style.contact}>
          <div className={style.contact_form}>
            <form>
              <div className={style.row}>
                <div className={style.input50}>
                  <input type="text" placeholder="First Name" />
                </div>
                <div className={style.input50}>
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input50}>
                  <input type="text" placeholder="Email" />
                </div>
                <div className={style.input50}>
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input100}>
                  <textarea placeholder="Message"></textarea>
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input100}>
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
          <div className={style.contact_info}>
            <div className={style.info_box}>
              <Image src="images/address.png" className={style.contact_icon} alt="" />
              <div className={style.details}>
                <h4>Address</h4>
                <p>28 Neon Tower, New York City, USA</p>
              </div>
            </div>
            <div className={style.info_box}>
              <Image src="images/email.png" className={style.contact_icon} alt="" />
              <div className={style.details}>
                <h4>Email</h4>
                <a href="mailto:anyone@example.com">anyone@example.com</a>
                <a href="mailto:anyone@example.com">anyone@example.com</a>
              </div>
            </div>
            <div className="style.info-box">
              <Image src="images/call.png" className={style.contact_icon} alt="" />
              <div className="style.details">
                <h4>Call</h4>
                <a href="tel:+19785555555">+1 978 555 5555</a>
                <a href="tel:+19784444444">+1 978 555 4444</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

