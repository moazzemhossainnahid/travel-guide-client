// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper/modules';


// const TestimonialSlider = ({ Data }) => {

//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//           return '<span class="' + className + '">' + (index + 1) + '</span>';
//         },
//       };

//   return (
//     // <div>
//     //   {Data?.map((data,index) => (
//     //     <Slider {...sliderSettings}  key={index}>
//     //       <div
//     //         className="flex h-full lg:h-60 bg-white rounded-lg border shadow-md  dark:border-gray-700
//     //          dark:bg-gray-800 dark:hover:bg-gray-700"
//     //       >
//     //         <div className="columns-1 lg:m-5">
//     //           <div className="w-20 h-20 lg:w-28 mt-3 ml-1 lg:h-28">
//     //             <img
//     //               className="rounded-full border-4 border-[#33D687]"
//     //               src={data?.img}
//     //               alt="avater"
//     //             />
//     //           </div>
//     //           <div className="flex justify-end  lg:ml-4 -mt-7">
//     //             <p className="w-12 h-12 lg:w-14 lg:h-14 bg-[#33D687] p-3 lg:p-4 rounded-full">
//     //               <FaQuoteLeft className="text-xl text-white lg:text-2xl" />
//     //             </p>
//     //           </div>
//     //         </div>
//     //         <div className="columns-6 p-2 flex flex-col lg:justify-around leading-normal">
//     //           <div>
//     //             <p className="mb-3 lg:text-xl text-gray-400 dark:text-gray-400">
//     //               {data?.description}
//     //             </p>
//     //           </div>
//     //           <div>
//     //             <h2 className="text-xl lg:text-2xl font-bold">{data?.name}</h2>
//     //             <p className="text-gray-400">Guest from {data?.area}</p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </Slider>
//     //   ))}
//     // </div>
//     <>
//     <Swiper
//       pagination={pagination}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       <SwiperSlide>Slide 5</SwiperSlide>
//       <SwiperSlide>Slide 6</SwiperSlide>
//       <SwiperSlide>Slide 7</SwiperSlide>
//       <SwiperSlide>Slide 8</SwiperSlide>
//       <SwiperSlide>Slide 9</SwiperSlide>
//     </Swiper>
//   </>
//   );
// };

// export default TestimonialSlider;
