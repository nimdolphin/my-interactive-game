import ContactForm from "@/components/contactForm/ContactForm";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const FormPage = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default FormPage;
