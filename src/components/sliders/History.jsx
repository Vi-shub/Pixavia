import Link from "next/link";
import Data from "@data/sliders/history";

const HistorySlider = () => {
  return (
    <>
      {/* Onovo History */}
      <section id="about" className="onovo-section onovo-section-bg gap-top-110 gap-bottom-140">
        <div className="container">
          
          {/* History Items */}
          <div className="onovo-history-items">
            <div className="onovo-history-item gap-bottom-40">
              <div
                className="image">
                  <img src="/images/intro1.jpg" alt="intro1" />
                </div>

              <div className="desc">
                <div className="subtitle custom-h onovo-text-white">
                  <div>Who We Are</div>
                </div>
                
                <div className="text">
                  <p>
                  Pixavia, we are a cutting-edge design studio passionate about transforming ideas into visual masterpieces. Specializing in video editing, graphic design, branding, 3D modeling, and motion graphics, we bring creativity and precision to every project. Our team combines artistic innovation with a seamless workflow, ensuring that each piece resonates with quality, originality, and purpose. Whether it's crafting a brand identity or creating dynamic visuals, Pixavia is your partner in design excellence.  

                  </p>
                </div>
              </div>
            </div>
            <div className="onovo-history-item gap-bottom-40 gap-top-80">
             
              <div className="desc">
                <div className="subtitle custom-h onovo-text-white">
                  <div>What we do</div>
                </div>
               
                <div className="text">
                  <p>
                  Pixavia offers a comprehensive suite of creative services, including video editing, graphic design, branding, 3D visuals, and motion graphics. We collaborate closely with clients to understand their vision and deliver bespoke solutions that captivate audiences and elevate brands. From compelling animations to striking designs, our work is defined by a meticulous process and a commitment to excellence. At Pixavia, we turn your ideas into engaging, high-quality visuals that leave a lasting impact.
                  </p>
                </div>
              </div>
              <div
                className="image">
                <img src="/images/intro2.jpg" alt="intro2" />
              
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HistorySlider;
