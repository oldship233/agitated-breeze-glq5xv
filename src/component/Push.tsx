import { useRef, useEffect, useCallback, useState } from "react";
import "./styles.css";
const Push = () => {
  const [show, setShow] = useState(true);
  const clickHandler = () => {
    setShow(!show)
  };

  return (
    <div>
      {
        show && (
          <div>
            <div className="push-container">
              <div className="zeroPrice">123</div>
              <div className="showPrice">
                <div className="showPriceLine" />
                456
              </div>
              <div className="marketPrice">
                789
              </div>
            </div>
            <div className="push-container2">
              <div style={{ display: 'inline-block' }} className="zeroPrice">123</div>
              <div style={{ display: 'inline-block' }} className="showPrice">
                <div className="showPriceLine" />
                456
              </div>
              <div style={{ display: 'inline-block' }} className="marketPrice">
                789
              </div>
            </div>
            {/* <div
              className="push-container"
              style={{
                display: 'flex',
                alignItems: 'flex-end'
              }}
            >
              <div className="line1">123</div>
              <div className="line2">456</div>
              <div className="line3">789</div>
            </div> */}
          </div>
        )
      }
      <button onClick={clickHandler}></button>
    </div>
  );
};

export default Push;

