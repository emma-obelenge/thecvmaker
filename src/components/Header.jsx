import Nav from "./Nav";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <a href="./index.html" class="logo" aria-label="Home page logo.">
        <h1 aria-hidden="true">
          the<span>CV</span>maker
        </h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
