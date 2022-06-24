import Title from '../Partials/Title';
import SubTitle from '../Partials/SubTitle';

import style from './Contact.module.css';

const Contact = () => {
  return (
    <div className={style.container} id='contact'>
      <div>
        <Title title='Get In Touch' />
        <SubTitle subTitle='Contact Us' />
        <div className={style.contact}>
          <div className={style.contact_form}>
            <form>
              <div className={style.row}>
                <div className={style.input50}>
                  <input type='text' placeholder='First Name' />
                </div>
                <div className={style.input50}>
                  <input type='text' placeholder='Last Name' />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input50}>
                  <input type='text' placeholder='Email' />
                </div>
                <div className={style.input50}>
                  <input type='text' placeholder='Subject' />
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input100}>
                  <textarea placeholder='Message'></textarea>
                </div>
              </div>
              <div className={style.row}>
                <div className={style.input100}>
                  <input type='submit' value='Send Message' />
                </div>
              </div>
            </form>
          </div>

          <div className={style.contact_info}>
            <div className={style.info_box}>
              <div className={style.details}>
                <h4>Address</h4>
                <p>28 Neon Tower, New York City, USA</p>
              </div>
            </div>
            <div className={style.info_box}>
              <div className={style.details}>
                <h4>Email</h4>
                <a href='mailto:anyone@example.com'>ecsgh@ecsgh.com</a>
              </div>
            </div>
            <div className='style.info-box'>
              <div className='style.details'>
                <h4>Phone number</h4>
                <p>+1 978 555 5555</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
