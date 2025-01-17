import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
      {/* Footer */}
      <footer
        className="onovo-footer footer--dark"
        style={{
          backgroundImage: "url('/images/footerbg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="footer--default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                {/* Description */}
                <div className="onovo-text onovo-text-white">
                  <ul
                    className="footer-links"
                    style={{ fontSize: "1.6rem", margin: 0 }}
                  >
                    <li>
                      <a href="#hero" className="onovo-lnk lnk--white">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#about" className="onovo-lnk lnk--white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#project" className="onovo-lnk lnk--white">
                        Projects
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="onovo-lnk lnk--white">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="/terms" className="onovo-lnk lnk--white">
                        Terms of Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 ">
                <div className="row custom-mrg gap-top-140">
                  <div className="onovo-social-1 onovo-social-active">
                    <ul>
                      {appData.social.map((item, key) => (
                        <li key={`fsocial-item-${key}`}>
                          <a
                            className="onovo-social-link onovo-hover-2"
                            href={item.link}
                            title={item.title}
                            target="_blank"
                          >
                            <i className={item.icon}></i>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                {/* Copyright */}
                <div className="copyright onovo-text-white">
                  <div
                    dangerouslySetInnerHTML={{ __html: appData.footer.copy }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default DefaultFooter;
