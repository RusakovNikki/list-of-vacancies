import type { Metadata } from "next";
import "../globals.scss";
import FooterRequestForm from "@/components/FooterRequestForm";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function VacancyLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        <header className="header">
          <h1 className="title header__title rubik-light">List of vacancies</h1>
        </header>
        {modal}
        {children}
        <footer className="footer">
          <div className="footer__title title rubik-light">Leave a request</div>
          <div className="footer__flex-container">
            <div className="footer__flex-item footer__flex-item--margin">
              <FooterRequestForm />
              <div className="footer__confirm-message rubik-regular">
                By clicking &quot;Send&quot; you confirm your consent to the{" "}
                <a href="#" className="footer__link">
                  processing of personal data
                </a>
              </div>
            </div>
            <div className="footer__flex-item">
              <div className="about-company rubik-regular">
                <div className="about-company__message">
                  We will advise you and help you start a new project
                </div>
                <div className="about-company__phone">
                  <a href="tel:+74993916669">+7 499 391-66-69</a>
                </div>
                <div className="about-company__mail">
                  <a href="mailto:mail@greensight.ru">mail@greensight.ru</a>
                </div>
                <div className="about-company__adres">
                  Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor
                </div>
                <div className="about-company__route">
                  <a
                    href="https://goo.gl/maps/N2EVxAnkKmJN4Uj87"
                    target="_blank"
                  >
                    How to get
                  </a>
                  there?
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
