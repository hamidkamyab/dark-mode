import * as IO5 from "react-icons/io5";

function App() {
  return (
    <div className="App vh-100 d-flex flex-column justify-content-between">
      <div className="header" >
        <div className="container d-flex align-items-center justify-content-between py-3">
          <ul className="p-0 m-0 list-unstyled d-flex gap-4">
            <li><a href="#">خانه</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">تماس با ما</a></li>
          </ul>

          <div className="modeBox d-flex align-items-center gap-2">
            <IO5.IoSunny className="text-white" />
            <label className="switch rounded-5 position-relative light" role="button">
              <input type="checkbox" name="" className="d-none" />
              <span className="switch-btn rounded-circle position-absolute"></span>
            </label>
            <IO5.IoMoon className="text-white"/>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="container d-flex align-items-center flex-column">
          <h5>لایت مود فعال است!</h5>
          <p>این پروژه دارک مود و لایت مود است!</p>

          <div className="col-12 d-flex">
            <div className="col-4 p-2">
              <div className="cart border border-1 d-flex flex-column align-items-center p-2 gap-3">
                <div className="imgBox">
                  <img src="./imgs/boots.jpg" alt="" srcset="" />
                </div>
                <div className="cart-body">
                  <h6 className="text-center">کارت اول</h6>
                  <span className="text-center">این کارت اول است</span>
                </div>
              </div>
            </div>
            <div className="col-4 p-2">
              <div className="cart border border-1 d-flex flex-column align-items-center p-2 gap-3">
                <div className="imgBox">
                  <img src="./imgs/headphones.jpg" alt="" srcset="" />
                </div>
                <div className="cart-body">
                  <h6 className="text-center">کارت دوم</h6>
                  <span className="text-center">این کارت دوم است</span>
                </div>
              </div>
            </div>
            <div className="col-4 p-2">
              <div className="cart border border-1 d-flex flex-column align-items-center p-2 gap-3">
                <div className="imgBox">
                  <img src="./imgs/ball.jpg" alt="" srcset="" />
                </div>
                <div className="cart-body">
                  <h6 className="text-center">کارت سوم</h6>
                  <span  className="text-center">این کارت سوم است</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer text-center py-3">
        <small> طراحی شده توسط <a href="https://hamidkamyab.ir/" target="_blank" className="text-muted">حمید کامیاب</a></small>
      </div>
    </div>
  );
}

export default App;
