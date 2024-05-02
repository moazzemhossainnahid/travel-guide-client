// import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { Bounce, Zoom } from "react-reveal";
import Fade from "react-reveal/Fade";
import Swing from "react-reveal/Swing";

const ContactDetails = () => {
  const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_dml7lyi",
//         "template_na9m8go",
//         form.current,
//         "wdT4zt6LdX8GyA82Y"
//       )
//       .then(
//         (result) => {
//           swal("Successfull", "You Send an Email!", "success");
//           e.target.reset();
//         },
//         (error) => {
//           swal("OPPSS...", "Email not Send!", "error");
//         }
//       );
//   };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16">
        <div className="lg:flex">
          <div className="xl:w-2/5 lg:w-2/5 bg-primary py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
              <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">
                <Fade left>Get in touch</Fade>
              </h1>
              <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">
                <Bounce right>
                  Got a question about us? Are you interested in partnering with
                  us? Have some suggestions or just want to say Hi? Just contact
                  us. We are here to asset you.
                </Bounce>
              </p>
              <div className="text-left">
                <div className="flex pb-4 items-center">
                  <div aria-label="phone icon" role="img">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg"
                      alt="phone"
                    />
                  </div>
                  <p className="pl-4 text-white text-base">
                    <Swing>+1 (308) 321 321</Swing>
                  </p>
                </div>
                <div className="flex items-center">
                  <div aria-label="email icon" role="img">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg"
                      alt="email"
                    />
                  </div>
                  <p className="pl-4 text-white text-base">
                    <Swing>Info@imerntech.com</Swing>
                  </p>
                </div>

                <p className="text-lg text-white pt-10 tracking-wide">
                  <Zoom top>
                    545, Street 11, Block F
                    <br />
                    Banani, Dhaka, Bangladesh
                  </Zoom>
                </p>
              </div>
            </div>
          </div>
          <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
            <form
              ref={form}
            //   onSubmit={sendEmail}
              id="contact"
              className="bg-white text-left py-4 px-8 rounded-tr rounded-br"
            >
              <h1 className="text-4xl text-gray-800 font-extrabold mb-6">
                Enter Details
              </h1>
              <div className="block xl:flex flex-col w-full space-y-6 flex-wrap justify-between mb-6">
                <div className="w-full lg:w-5/6 mb-6 xl:mb-0">
                  <Fade left>
                    <div className="flex flex-col">
                      <label
                        htmlFor="full_name"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        required
                        id="full_name"
                        name="name"
                        type="text"
                        className=" dark:border-gray-700 focus:outline-none
                         focus:border focus:border-secondary font-normal w-full 
                         h-10 lg:h-12 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder="Full Name"
                        aria-label="enter your full name input"
                      />
                    </div>
                  </Fade>
                </div>
                <div className="w-full lg:w-5/6 mb-6 xl:mb-0">
                  <Fade right>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="text-gray-800 text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Email
                      </label>
                      <input
                        required
                        id="email"
                        name="email"
                        type="email"
                        className=" dark:border-gray-700
                         focus:outline-none focus:border focus:border-secondary font-normal w-full h-10 lg:h-12
                          flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder="example@email.com"
                        aria-label="enter your email input"
                      />
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="flex w-full flex-wrap">
                <div className="w-full lg:w-5/6 mb-6 xl:mb-0">
                  <Fade left>
                    <div className="flex flex-col">
                      <label
                        htmlFor="phone"
                        className="text-gray-800  text-sm font-semibold leading-tight tracking-normal mb-2"
                      >
                        Phone
                      </label>
                      <input
                        required
                        id="phone"
                        name="phone"
                        type="tel"
                        className=" dark:border-gray-700
                         focus:outline-none focus:border focus:border-secondary font-normal w-full h-10 lg:h-12 flex items-center pl-3 text-sm border-gray-300 rounded border"
                        placeholder="+92-12-3456789"
                        aria-label="enter your phone number input"
                      />
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="w-full lg:w-5/6 mt-6">
                <div className="flex flex-col">
                  <label
                    className="text-sm font-semibold text-gray-800  mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    placeholder="Enter Your Message..."
                    name="message"
                    className=" dark:border-gray-700
                     border-gray-300 border mb-4 rounded py-2
                      text-sm outline-none resize-none px-3 focus:border focus:border-secondary"
                    rows="8"
                    id="message"
                    aria-label="enter your message input"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="focus:outline-none bg-secondary transition duration-150 ease-in-out hover:bg-primary rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="container mx-auto py-10 ">
          <div className="flex justify-start py-3">
            {/* Map */}
            <iframe
              title="map"
              className="w-full lg:h-[25rem] rounded-md border p-2 mx-auto"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=daffodilbangladesh&t=&z=13&ie=UTF8& iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
