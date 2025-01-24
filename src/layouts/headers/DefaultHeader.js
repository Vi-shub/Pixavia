import Link from "next/link";
import { useState, useEffect } from "react";
import appData from "@data/app.json";
import { headerSticky } from "@common/utilits";
import Image from "next/image";
const DefaultHeader = ({ darkHeader, cartButton }) => {
  const navItems = [];

  appData.header.menu.forEach((item, index) => {
    let s_class1 = "dropdown-link";

    if (item.children != 0) {
      s_class1 += "menu-item-has-children";
    }
    let newobj = Object.assign({}, item, { classes: s_class1 });
    navItems.push(newobj);
  });

  const [desktopMenu, desktopMenuToggle] = useState(false);

  const clickedDesktopMenu = (e) => {
    e.preventDefault();
    desktopMenuToggle(!desktopMenu);

    const menuPopup = document.querySelector(".onovo-menu-popup");
    const menuContainer = document.querySelector(".onovo-menu-container");
    const menuBody = document.querySelector("body");
    const menuHeader = document.querySelector(".onovo-header");
    const menuButton = document.querySelector(".onovo-menu-btn");

    if (desktopMenu) {
      menuBody.classList.remove("onovo--noscroll");
      menuHeader.classList.remove("header--active");
      menuPopup.classList.remove("menu--ready");
      menuContainer.classList.add("onovo--noscroll");
      menuButton.parentNode.classList.add("onovo--notouch");
      let timer1 = setTimeout(function () {
        menuPopup.classList.remove("menu--open");
      }, 300);
      let timer2 = setTimeout(function () {
        menuButton.parentNode.classList.remove("onovo--notouch");
        menuPopup.classList.remove("menu--visible");
      }, 1600);
    } else {
      menuBody.classList.add("onovo--noscroll");
      menuHeader.classList.add("header--active");
      menuPopup.classList.add("menu--visible");
      menuPopup.classList.add("menu--open");
      menuButton.parentNode.classList.add("onovo--notouch");
      let timer3 = setTimeout(function () {
        menuButton.parentNode.classList.remove("onovo--notouch");
        menuContainer.classList.remove("onovo--noscroll");
        menuPopup.classList.add("menu--ready");
      }, 600);
    }
  };
  const clickedMobileMenuItemParent = (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("opened");
  };

  useEffect(() => {
    headerSticky();
  }, []);

  return (
    <>
      {/* Header */}
      <header
        className={darkHeader ? "onovo-header" : "onovo-header header--white"}
      >
        <div className="header--builder">
          <div className="">
            <div className="">
              <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-3 align-self-center">
                {/* Logo */}
                <div className="onovo-logo-image">
                  <Link href="/">
                    <img
                      src={appData.header.logo.image}
                      alt={appData.header.logo.alt}
                    />
                    <img
                      className="logo--white"
                      src={appData.header.logo.image_white}
                      alt={appData.header.logo.alt}
                    />
                  </Link>
                </div>
                <style jsx>{`
                  .onovo-logo-image {
                    max-width: 60px;
                  }

                  @media (max-width: 767px) {
                    .onovo-logo-image {
                      max-width: 40px;
                    }
                  }
                `}</style>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default DefaultHeader;
