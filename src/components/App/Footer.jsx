import Link from "next/link";
import Community from "./Community";
const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains("dropdown-toggle")
      ? event.target
      : event.target.querySelector(".dropdown-toggle");
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add("show");
    dropDownMenu?.classList?.add("show");
  };

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains("dropdown")
      ? event.target
      : event.target.closest(".dropdown");
    const dropDownToggler = dropdown.querySelector(".dropdown-toggle");
    const dropDownMenu = dropdown.querySelector(".dropdown-menu");

    dropDownToggler?.classList?.remove("show");
    dropDownMenu?.classList?.remove("show");
  };

  return (
    <footer
      className={`style-4 ${noWave ? "mt-0 pt-50" : ""}`}
      data-scroll-index="8"
    >
      <div className="container">
        <div className="row">
          {" "}
          <Community />
        </div>
        <div className="foot ">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <img src="assets/img/logo_lgr.png" alt="" />
              </div>
            </div>
            <div className="col-lg-8">
              <ul className="links">
                <li>
                  <Link href="/home-app-landing">
                    <a className="active">{rtl ? "الرئيسية" : "Home"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-about-5">
                    <a>{rtl ? "من نحن" : "about"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-product-5">
                    <a>{rtl ? "المنتجات" : "product"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-portfolio-5">
                    <a>{rtl ? "المشاريع" : "portfolio"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-services-5">
                    <a>{rtl ? "الخدمات" : "services"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-shop-5">
                    <a>{rtl ? "المتجر" : "shop"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-blog-5">
                    <a>{rtl ? "الاخبار" : "blog"}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-contact-5">
                    <a>{rtl ? "اتصل بنا" : "contact"}</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              {rtl ? (
                <div
                  className="dropdown"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="assets/img/lang.png" alt="" className="me-2" />
                    <small>العربية</small>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <div
                  className="dropdown"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className="icon-25 dropdown-toggle p-0 border-0 bg-transparent rounded-circle img-cover"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src="assets/img/lang.png" alt="" className="me-2" />
                    <small>English</small>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="copywrite text-center">
          <small className="small">
            {rtl ? "© 2022 حقوق التأليف والنشر" : "© 2022 Copyrights by"}{" "}
            <a href="#" className="fw-bold text-decoration-underline">
              Iteck Co.
            </a>{" "}
            {rtl
              ? "كل الحقوق محفوظة. صمم بواسطة"
              : "All Rights Reserved. Designed by"}{" "}
            <a
              href="https://themeforest.net/user/themescamp"
              className="fw-bold text-decoration-underline"
            >
              ThemesCamp
            </a>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
