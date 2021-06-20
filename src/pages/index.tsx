import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Header } from "../components/Header";
import styles from './home.module.scss';
import { Input } from '../components/Input';
import { Button } from "../components/Button";
import useWindowDimensions from "../hooks/window";
import { Footer } from "../components/Footer";
import { useHome } from "../contexts/home";
import { useAppError } from "../contexts/AppError";
import { SEO } from "../components/SEO";
import { ToastTypes, useToast } from "../contexts/toast";


const sendEmailSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('E-mail is required').email('Invalid E-mail'),
});

interface SendEmail {
  name: string;
  email: string;
}

const defaultValues = {
  name: '',
  email: '',
}

export default function Home() {
  const { width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(false);
  const { sendEmail } = useHome();
  const { showToast } = useToast();
  const { validError } = useAppError();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(sendEmailSchema),
  })
  const { errors } = formState;

  const handleSendEmail: SubmitHandler<SendEmail> = async (values, e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await sendEmail(values);
      setIsLoading(false);
      showToast({
        message: 'Email has sended successfully',
        type: ToastTypes.SUCCESS,
      });
      reset(defaultValues);
    } catch (e) {
      validError(e);
      setIsLoading(false);
    }
  }

  return (
    <>
      <SEO title="Home" description="Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare." />
      <Header />
      <div className={styles.container}>
        <section className={styles.infoSection}>
          <div>
            <h2>
              Share your home,nanny and costs
            </h2>
            <p>
              You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#!"><u>Hapu means tribe</u></a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
            </p>
            <a>
              <u>
                <br />
                <br />
                Ready to get started?
              </u>
            </a>
          </div>
          <div>
            <img src="./images/ImageSection1.png" alt="Section" />
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.contactSection}>
          <h3>
            Are you a parent without a nanny and looking to share?
          </h3>
          <p>
            Leave us your name and email and we’ll update you as soon as a share becomes available in your area!
          </p>

          <div>
            <form onSubmit={handleSubmit(handleSendEmail)}>
              <Input name="name" type="text" placeholder={errors.name ? errors.name.message : "Your name"} {...register('name')} error={errors.name} />
              <Input name="email" type="email" placeholder={errors.email ? errors.email.message : "Your emaiil"} {...register('email')} error={errors.email} />
              <Button type="submit" id="button-test" disabled={isLoading}>
                {isLoading ? (
                  <i className="fa fa-circle-o-notch fa-spin" />
                ) : (
                  <span>Send</span>
                )}
                
              </Button>
            </form>
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.paymentSharedSection}>
          <img src="./images/ImageSection3.png" alt="Section" />

          <div>
            <h2>
              Shared payments made simple
            </h2>
            <p>
              Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
            </p>
            <br />
            <a href="#!">
              <u>
                Read how Bridget’s share (without Hapu) ended over $15
              </u>
            </a>
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.paymetInfoSection}>
          <h2>
            A framework built for the long term
          </h2>
          <p>
            Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
          </p>
          <a href="#!">
            <u>
              Read how Hapu’s tribal background defines our app
            </u>
          </a>
          {width > 720 && <img src="./images/ImageSection4.png" alt="Section" />}
        </section>

        <div className={styles.separator} />

        <section className={styles.finalSection}>
          <img src="./images/ImageSection5.png" alt="Section" />
          <h2>
            Coming soon: Nanny Share Daily Diary!
          </h2>
          <p>
            With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}
