import Link from "next/link";
import Data from "@data/sliders/history";

const HistorySlider = () => {
  return (
    <>
      {/* Onovo History */}
      <section id="about" className="onovo-section onovo-section-bg gap-top-140 gap-bottom-140">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
              {/* Heading */}
              <div className="onovo-heading gap-bottom-80">
                <h2 className="onovo-title-2">
                  <span dangerouslySetInnerHTML={{ __html: Data.title }} />
                </h2>
              </div>
            </div>
          </div>

          {/* History Items */}
          <div className="onovo-history-items">
            <div className="onovo-history-item gap-bottom-40">
              <div
                className="image"
                style={{ backgroundImage: `url("/images/post1-1000x667.jpg")` }}
                data-onovo-overlay
              />
              <div className="desc">
                <div className="subtitle custom-h onovo-text-white">
                  <div>What we do</div>
                </div>
                <h5 className="title">
                  <span>With a Passion for Creation Brands</span>
                </h5>
                <div className="text">
                  <p>
                    The creative agency studio was founded in 1998 by a group of
                    graphic designers with a passion for creating bold,
                    innovative designs that push boundaries
                  </p>
                </div>
              </div>
            </div>
            <div className="onovo-history-item gap-bottom-40">
             
              <div className="desc">
                <div className="subtitle custom-h onovo-text-white">
                  <div>What we do</div>
                </div>
                <h5 className="title">
                  <span>With a Passion for Creation Brands</span>
                </h5>
                <div className="text">
                  <p>
                    The creative agency studio was founded in 1998 by a group of
                    graphic designers with a passion for creating bold,
                    innovative designs that push boundaries
                  </p>
                </div>
              </div>
              <div
                className="image"
                style={{ backgroundImage: `url("/images/post1-1000x667.jpg")` }}
                data-onovo-overlay
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistorySlider;
