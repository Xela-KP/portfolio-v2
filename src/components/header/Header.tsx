import HeaderContent from "./HeaderContent";
import Navigation from "./Navigation";
import Socials from "./Socials";

const Header = () => (
  <header className="lg:sticky top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
    <HeaderContent />
    <Navigation />
    <Socials />
  </header>
);
export default Header;
