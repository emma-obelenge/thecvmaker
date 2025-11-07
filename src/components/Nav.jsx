import "../styles/nav.css";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li class="flex-item active-button">
          <a href="#" class="navBtn">
            Create CV
          </a>
        </li>
        <li class="flex-item">
          <a href="#" class="navBtn">
            Job Search
          </a>
        </li>
        <li class="flex-item">
          <a href="#" class="navBtn">
            Blog
          </a>
        </li>
        <li class="flex-item">
          <a href="#services" class="navBtn">
            About Us
          </a>
        </li>
        <li id="contact-nav-btn" class="flex-item">
          <a href="#contact" aria-hidden="true">
            Help
          </a>
        </li>
      </ul>
      <i class="fa-solid fa-bars" aria-hidden="true"></i>
    </nav>
  );
};

export default Nav;
