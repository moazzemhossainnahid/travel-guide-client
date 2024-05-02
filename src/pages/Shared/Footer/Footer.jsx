
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {

  
  return (
    <div className=''>
    <div className="bg-gray-700 ">
      <div className="container mx-auto">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 p-5 w-full mx-auto text-base-100">
          <div className="p-3 space-y-2">
            <span className="footer-title">Discover</span>
            <div className="flex items-center gap-5">
              <div className="flex flex-col space-y-2">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Terms</a>
                <a className="link link-hover">Talent & Culture</a>
              </div>
              <div className="flex flex-col space-y-2">
                <a className="link link-hover">Refund Policy</a>
                <a className="link link-hover">EMI Policy</a>
                <a className="link link-hover">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="p-3 space-y-2">
            <div className="lg:flex justify-center">
              <div className="space-y-2">
                <p className="footer-title">Payment Method</p>
                <div className="gird grid-cols-4 gap-2">
                  <div className="flex gap-2 py-1">
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-footer-visa.0cc68109.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-footer-amex.a8ead788.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-footer-mastercard.afdd5b7f.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-payment-dbbl.0975a769.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="flex gap-2 py-1">
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-footer-bkash.a929cde0.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-payment-nagad.2e467251.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-payment-upay.fbd2acc5.svg"
                        alt=""
                      />
                    </a>
                    <a className="link link-hover">
                      <img
                        className=""
                        src="https://www.gozayaan.com/img/icon-payment-union.d875933a.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <a className="link link-hover">
                    <img
                      className=""
                      src="https://www.gozayaan.com/img/icon-payment-tap.dcf016e9.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="lg:float-right">
              <div className="space-y-2">
                <p className="footer-title">Need Help ?</p>
                <div className="flex flex-col">
                  <a className="link -py-2 link-hover">
                    We are Always here for you! Knock us
                  </a>
                  <a className="link -py-2 link-hover">
                    on Messenger anytime or Call our
                  </a>
                  <a className="link -py-2 link-hover">
                    Hotline (10AM - 10PM).
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="lg:float-right">
              <div className="space-y-2">
                <p className="footer-title">Contact</p>
                <div className="space-y-2">
                  <p className="link link-hover">info@travelguide.com</p>
                  <p className="link link-hover">+880-1234-567890</p>
                </div>
                <div className="flex gap-2">
                  <FaFacebook
                    className="w-10 h-10 p-2 text-2xl bg-gray-400 hover:bg-black cursor-pointer rounded-full"
                  />
                  <FaYoutube
                    className="w-10 h-10 p-2 text-2xl bg-gray-400 hover:bg-black cursor-pointer rounded-full"
                  />
                  <FaInstagram
                    className="w-10 h-10 p-2 text-2xl bg-gray-400 hover:bg-black cursor-pointer rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="border-t bg-gray-800">
        <div className="container mx-auto ">
          <footer className="text-center px-3 md:px-7 md:flex lg:flex justify-between py-5 text-base-100 border-base-300">
            <div className="flex justify-center">
              <p className="flex items-center gap-2 text-2xl font-semibold">
                <img
                  className="w-10"
                  src="https://cdn-icons-png.flaticon.com/512/5029/5029158.png"
                  alt=""
                />{" "}
                Travel Guide
              </p>
            </div>
            <div className="md:place-self-center pt-4 lg:pt-0 md:justify-self-end">
              &copy; Copyright || Travel Guide
            </div>
          </footer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;