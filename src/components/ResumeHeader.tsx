import "./ResumeHeader.css";

export const ResumeHeader: React.FC = () => (
  <header>
    <section className="header-title-area">
      <h1 className="name">Kai Yao</h1>
      <p className="job-title">Senior Software Engineer</p>
    </section>
    <section className="contact-info">
      <p className="email">
        <a href="mailto:kai.b.yao@gmail.com">kai.b.yao@gmail.com</a>
      </p>
      <p className="phone">
        <a href="tel:630-788-0424">630.788.0424</a>
      </p>
    </section>
  </header>
);
