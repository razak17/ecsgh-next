import SEO from "components/SEO";
import Intro from "components/Intro";
import Services from "components/Services";
import Blog from "components/Blog";
import Contact from "components/Contact";

const Home = () => {
  return (
    <div>
      <SEO title="ECSGH Landing Page" />
      <Intro />
      <Services />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
