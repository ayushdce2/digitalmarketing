import "./Footer.css";

const Footer = ()=>{
    return(
        <>
            <div className="mt-5 text-white text-center">
            <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "rgb(0, 137, 179)"}}
          >

    <div className="container p-4 pb-0">

      <section className="">

        <div className="row">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              WebSavvy
            </h6>
            <p>
            We are passionate about helping businesses grow and thrive in the digital age. With years of experience in the industry, we specialize in delivering tailored digital marketing solutions that drive measurable results.
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Menu</h6>
            <p>
              <a className="text-white">Our Services</a>
            </p>
            <p>
              <a className="text-white">About Us</a>
            </p>
            <p>
              <a className="text-white">Our Achievements</a>
            </p>
            <p>
              <a className="text-white">Why Choose us</a>
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Services
            </h6>
            <p>
              <a className="text-white">SEO</a>
            </p>
            <p>
              <a className="text-white">SMM</a>
            </p>
            <p>
              <a className="text-white">PPC</a>
            </p>
            <p>
              <a className="text-white">SMO</a>
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> India, Delhi 110012</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 91 9192939495</p>
            <p><i className="fas fa-print mr-3"></i> + 91 9492949398</p>
          </div>

        </div>

      </section>


      <hr className="my-3"/>


      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-7 col-lg-8 text-center text-md-start">

            <div className="p-3">
              © 2024 Copyright:
              WebSavvy
            </div>

          </div>



          

        </div>
      </section>

    </div>

  </footer>
            </div>
        </>
    )
}

export default Footer;