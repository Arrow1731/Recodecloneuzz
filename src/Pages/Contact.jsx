// // import React, { Component } from 'react'
// // import Contact_link from '../components/Contact_link'

// // export default class Contact extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <div className='container mt-[100px] mb-[100px]'>
// //           <div className="w-[1536px] h-96 relative">
// //             <div className="w-64 h-10 left-[632.50px] top-0 absolute text-center justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Способы связи</div>
// //             <div className="w-96 h-7 left-[576.84px] top-[56px] absolute text-center justify-center text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Выберите удобный для вас способ связи</div>
// //             <div className="w-[480px] h-72 left-[16px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg shadow-[0px_0px_0px_2px_rgba(209,168,75,1.00)] overflow-hidden">
// //               <div className="w-12 h-12 left-[216px] top-[24px] absolute">
// //                 <div className="w-10 h-10 left-[4.22px] top-[4px] absolute outline outline-4 outline-offset-[-2px] outline-orange-400" />
// //               </div>
// //               <div className="w-16 h-4 left-[205.70px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Телефон</div>
// //               <div className="w-20 h-5 left-[203.48px] top-[116px] absolute bg-orange-400/10 rounded-md outline outline-1 outline-offset-[-1px] outline-orange-400/20 overflow-hidden">
// //                 <div className="w-14 h-3 left-[9px] top-[5px] absolute text-center justify-center text-orange-400 text-xs font-normal font-['Inter'] leading-none">Основной</div>
// //               </div>
// //               <div className="w-40 h-7 left-[157.70px] top-[162px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (62) 123-45-67</div>
// //               <div className="w-40 h-7 left-[157.70px] top-[198px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (90) 123-45-67</div>
// //               <div className="w-48 h-6 left-[144.75px] top-[238px] absolute text-center justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Звоните в рабочее время</div>
// //             </div>
// //             <div className="w-[480px] h-72 left-[528px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //               <div className="w-12 h-12 left-[216px] top-[24px] absolute">
// //                 <div className="w-10 h-8 left-[4px] top-[8px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
// //                 <div className="w-10 h-3 left-[4px] top-[14px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
// //               </div>
// //               <div className="w-10 h-4 left-[219.52px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Email</div>
// //               <div className="w-32 h-7 left-[178.92px] top-[134px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">info@redore.uz</div>
// //               <div className="w-32 h-7 left-[172.38px] top-[170px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">sales@redore.uz</div>
// //               <div className="w-52 h-6 left-[139.03px] top-[210px] absolute text-center justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Ответим в течение 2 часов</div>
// //             </div>
// //             <div className="w-[480px] h-72 left-[1040px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //               <div className="w-12 h-12 left-[216px] top-[24px] absolute">
// //                 <div className="w-10 h-10 left-[4px] top-[5.98px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
// //               </div>
// //               <div className="w-16 h-4 left-[204.70px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Telegram</div>
// //               <div className="w-32 h-7 left-[177.47px] top-[134px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">@redore_doors</div>
// //               <div className="w-40 h-7 left-[157.70px] top-[170px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (90) 123-45-67</div>
// //               <div className="w-56 h-6 left-[126.69px] top-[210px] absolute text-center justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Быстрая связь в мессенджере</div>
// //             </div>
// //           </div>


// //           {/* Info of Contacting */}

// //           <div className="w-[1536px] h-[854px] mt-[100px] relative">
// //             <div className="w-[1504px] h-[854px] relative">
// //               <div className="w-44 h-10 left-0 top-0 absolute justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Наш офис</div>
// //               <div className="w-[728px] h-60 left-0 top-[72px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //                 <div className="w-6 h-6 left-[24px] top-[24px] absolute">
// //                   <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1.5 h-1.5 left-[9px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                 </div>
// //                 <div className="w-12 h-4 left-[60px] top-[28px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Адрес</div>
// //                 <div className="w-48 h-7 left-[24px] top-[78px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Республика Узбекистан</div>
// //                 <div className="w-44 h-7 left-[24px] top-[114px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Хорезмская область</div>
// //                 <div className="w-72 h-7 left-[24px] top-[150px] absolute justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">г. Ургенч, ул. Промышленная, 15</div>
// //                 <div className="w-96 h-6 left-[24px] top-[186px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Рядом с промышленной зоной, удобная парковка</div>
// //               </div>
// //               <div className="w-[728px] h-64 left-0 top-[338px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //                 <div className="w-6 h-6 left-[24px] top-[24px] absolute">
// //                   <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                 </div>
// //                 <div className="w-24 h-4 left-[60px] top-[28px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Часы работы</div>
// //                 <div className="w-44 h-6 left-[24px] top-[78px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Понедельник - Пятница</div>
// //                 <div className="w-20 h-6 left-[618.59px] top-[78px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-normal">9:00 - 18:00</div>
// //                 <div className="w-16 h-6 left-[24px] top-[114px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Суббота</div>
// //                 <div className="w-20 h-6 left-[618.59px] top-[114px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-normal">9:00 - 15:00</div>
// //                 <div className="w-24 h-6 left-[24px] top-[150px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Воскресенье</div>
// //                 <div className="w-20 h-6 left-[629.31px] top-[150px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-normal">Выходной</div>
// //                 <div className="w-[680px] h-11 left-[24px] top-[190px] absolute bg-lime-950/10 rounded-lg">
// //                   <div className="w-96 h-5 left-[12px] top-[12px] absolute justify-center text-lime-950 text-sm font-normal font-['Inter'] leading-tight">Экстренные заказы и консультации - круглосуточно по телефону</div>
// //                 </div>
// //               </div>
// //               <div className="w-[728px] h-56 left-0 top-[628px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //                 <div className="w-28 h-4 left-[24px] top-[24px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Как добраться</div>
// //                 <div className="w-6 h-6 left-[24px] top-[74px] absolute">
// //                   <div className="w-5 h-2.5 left-[2px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1 h-1 left-[5px] top-[15px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1.5 h-0 left-[9px] top-[17px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1 h-1 left-[15px] top-[15px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                 </div>
// //                 <div className="w-32 h-6 left-[60px] top-[70px] absolute justify-center text-neutral-950 text-base font-bold font-['Inter'] leading-normal">На автомобиле</div>
// //                 <div className="w-[599.06px] h-8 left-[60px] top-[101px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Из центра Ургенча по ул. Навои до ул. Промышленная, поворот направо. Наш офис в 200м<br />слева.</div>
// //                 <div className="w-6 h-6 left-[24px] top-[158px] absolute">
// //                   <div className="w-0 h-1.5 left-[8px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-0 h-1.5 left-[15px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-5 h-0 left-[2px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-5 h-3 left-[2px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1 h-1 left-[5px] top-[16px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-[5px] h-0 left-[9px] top-[18px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                   <div className="w-1 h-1 left-[14px] top-[16px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
// //                 </div>
// //                 <div className="w-60 h-6 left-[60px] top-[154px] absolute justify-center text-neutral-950 text-base font-bold font-['Inter'] leading-normal">На общественном транспорте</div>
// //                 <div className="w-[572.75px] h-5 left-[60px] top-[182px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Автобус №15, №23 до остановки 'Промышленная'. Пешком 3 минуты до нашего офиса.</div>
// //               </div>
// //               <div className="w-72 h-10 left-[776px] top-0 absolute justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Оставьте заявку</div>
// //               <div className="w-[728px] h-96 left-[776px] top-[72px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
// //                 <div className="w-32 h-4 left-[24px] top-[24px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Оставьте заявку</div>
// //                 <div className="w-64 h-5 left-[24px] top-[46px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Мы свяжемся с вами в ближайшее время</div>
// //                 <div className="w-[680px] h-64 left-[24px] top-[90px] absolute">
// //                   <div className="w-9 h-3.5 left-0 top-[6px] absolute justify-center text-neutral-950 text-xs font-normal font-['Inter'] leading-tight">Имя *</div>
// //                   <div className="w-80 h-10 left-0 top-[28px] absolute bg-orange-50 rounded-md border border-stone-100" />
// //                   <div className="w-16 h-3.5 left-[348px] top-[6px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Телефон *</div>
// //                   <div className="w-80 h-10 left-[348px] top-[28px] absolute bg-orange-50 rounded-md border border-stone-100" />
// //                   <div className="w-20 h-3.5 left-0 top-[92px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Сообщение</div>
// //                   <div className="w-[680px] h-24 left-0 top-[114px] absolute bg-orange-50 rounded-md outline outline-1 outline-offset-[-1px] outline-stone-100 overflow-hidden">
// //                     <div className="w-80 h-6 left-[13px] top-[9px] absolute justify-center text-neutral-950/50 text-base font-normal font-['Inter'] leading-normal">Расскажите о ваших требованиях к двери...</div>
// //                   </div>
// //                   <div className="w-[680px] h-9 left-0 top-[234px] absolute bg-lime-950 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
// //                     <div className="w-28 h-3.5 left-[282.16px] top-[11px] absolute text-center justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Отправить заявку</div>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="w-[728px] h-48 left-[776px] top-[488px] absolute bg-orange-400/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-400/10">
// //                 <div className="w-96 h-7 left-[25px] top-[25px] absolute justify-center text-neutral-950 text-lg font-semibold font-['Manrope'] leading-7">Что происходит после отправки заявки?</div>
// //                 <div className="w-2 h-2 left-[25px] top-[71px] absolute bg-orange-400 rounded-full" />
// //                 <div className="w-64 h-5 left-[41px] top-[65px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Мы свяжемся с вами в течение 30 минут</div>
// //                 <div className="w-2 h-2 left-[25px] top-[99px] absolute bg-orange-400 rounded-full" />
// //                 <div className="w-60 h-5 left-[41px] top-[93px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Проведем бесплатную консультацию</div>
// //                 <div className="w-2 h-2 left-[25px] top-[127px] absolute bg-orange-400 rounded-full" />
// //                 <div className="w-56 h-5 left-[41px] top-[121px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Предложим оптимальное решение</div>
// //                 <div className="w-2 h-2 left-[25px] top-[155px] absolute bg-orange-400 rounded-full" />
// //                 <div className="w-52 h-5 left-[41px] top-[149px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Организуем бесплатный замер</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <Contact_link />
// //       </div>
// //     )
// //   }
// // }



















// import React from 'react';
// import Contact_link from '../components/Contact_link';

// const App = () => {
//   return (
//     <div>
//       {/* Container for the main contact sections */}
//       <div className="container mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
//         {/* Contact Methods Section */}
//         <div className="flex flex-col items-center mb-12 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 font-['Manrope'] mb-2">Способы связи</h2>
//           <p className="text-lg font-normal text-neutral-600 font-['Inter']">Выберите удобный для вас способ связи</p>
//         </div>

//         {/* Contact Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Card 1: Phone */}
//           <div className="bg-stone-50 rounded-xl shadow-lg border-2 border-orange-400 p-8 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-orange-400">
//                 {/* SVG for Phone icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//               </div>
//             </div>
//             <h4 className="text-base font-semibold text-neutral-950 font-['Manrope'] mb-1">Телефон</h4>
//             <div className="bg-orange-400/10 text-orange-400 rounded-md py-1 px-3 text-xs mb-4">
//               Основной
//             </div>
//             <p className="text-base font-normal text-neutral-950 font-['Inter'] mb-1">+998 (62) 123-45-67</p>
//             <p className="text-base font-normal text-neutral-950 font-['Inter'] mb-4">+998 (90) 123-45-67</p>
//             <p className="text-sm font-normal text-neutral-600 font-['Inter']">Звоните в рабочее время</p>
//           </div>

//           {/* Card 2: Email */}
//           <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-lime-950">
//                 {/* SVG for Email icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lime-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2z" />
//                 </svg>
//               </div>
//             </div>
//             <h4 className="text-base font-semibold text-neutral-950 font-['Manrope'] mb-1">Email</h4>
//             <div className="h-6 mb-4"></div> {/* Placeholder to align cards vertically */}
//             <p className="text-lg font-normal text-neutral-950 font-['Inter'] mb-1">info@redore.uz</p>
//             <p className="text-lg font-normal text-neutral-950 font-['Inter'] mb-4">sales@redore.uz</p>
//             <p className="text-sm font-normal text-neutral-600 font-['Inter']">Ответим в течение 2 часов</p>
//           </div>

//           {/* Card 3: Telegram */}
//           <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
//             <div className="mb-4">
//               <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-lime-950">
//                 {/* SVG for Telegram icon */}
//                 <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lime-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 0l4.553-2.276A1 1 0 0015 10m-5 0V8m5 6v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2" />
//                 </svg>
//               </div>
//             </div>
//             <h4 className="text-base font-semibold text-neutral-950 font-['Manrope'] mb-1">Telegram</h4>
//             <div className="h-6 mb-4"></div> {/* Placeholder to align cards vertically */}
//             <p className="text-lg font-normal text-neutral-950 font-['Inter'] mb-1">@redore_doors</p>
//             <p className="text-base font-normal text-neutral-950 font-['Inter'] mb-4">+998 (90) 123-45-67</p>
//             <p className="text-sm font-normal text-neutral-600 font-['Inter']">Быстрая связь в мессенджере</p>
//           </div>
//         </div>

//         {/* Our Office and Location Details Section */}
//         <div className="mt-24">
//           <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 font-['Manrope'] mb-8">Наш офис</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Office Details Column */}
//             <div className="flex flex-col gap-8">
//               {/* Address Card */}
//               <div className="bg-stone-50 rounded-xl shadow-lg p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 border-2 border-orange-400 rounded-lg">
//                     {/* SVG for Address icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                   </div>
//                   <h4 className="text-base font-semibold text-neutral-950 font-['Manrope']">Адрес</h4>
//                 </div>
//                 <p className="text-base font-normal text-neutral-950 font-['Inter'] mb-1">Республика Узбекистан</p>
//                 <p className="text-base font-normal text-neutral-950 font-['Inter'] mb-1">Хорезмская область</p>
//                 <p className="text-lg font-normal text-neutral-950 font-['Inter'] mb-4">г. Ургенч, ул. Промышленная, 15</p>
//                 <p className="text-sm font-normal text-neutral-600 font-['Inter']">Рядом с промышленной зоной, удобная парковка</p>
//               </div>

//               {/* Working Hours Card */}
//               <div className="bg-stone-50 rounded-xl shadow-lg p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 border-2 border-orange-400 rounded-lg">
//                     {/* SVG for Clock icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <h4 className="text-base font-semibold text-neutral-950 font-['Manrope']">Часы работы</h4>
//                 </div>
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="text-base font-normal text-neutral-600 font-['Inter']">Понедельник - Пятница</span>
//                   <span className="text-sm font-normal text-neutral-950 font-['Inter']">9:00 - 18:00</span>
//                 </div>
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="text-base font-normal text-neutral-600 font-['Inter']">Суббота</span>
//                   <span className="text-sm font-normal text-neutral-950 font-['Inter']">9:00 - 15:00</span>
//                 </div>
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-sm font-normal text-neutral-600 font-['Inter']">Воскресенье</span>
//                   <span className="text-base font-normal text-neutral-950 font-['Inter']">Выходной</span>
//                 </div>
//                 <div className="bg-lime-950/10 rounded-lg p-3 text-lime-950 text-sm font-normal font-['Inter']">
//                   Экстренные заказы и консультации - круглосуточно по телефону
//                 </div>
//               </div>

//               {/* How to Get Here Card */}
//               <div className="bg-stone-50 rounded-xl shadow-lg p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 border-2 border-orange-400 rounded-lg">
//                     {/* SVG for Directions icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l6-6-6-6" />
//                     </svg>
//                   </div>
//                   <h4 className="text-base font-semibold text-neutral-950 font-['Manrope']">Как добраться</h4>
//                 </div>
//                 <div className="mb-4">
//                   <div className="flex items-center gap-3 mb-2">
//                     {/* SVG for Car icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12m0-3h-3a3 3 0 01-3-3v-3a3 3 0 013-3h3a3 3 0 013 3v3a3 3 0 01-3 3h-3" />
//                     </svg>
//                     <span className="text-base font-bold text-neutral-950 font-['Inter']">На автомобиле</span>
//                   </div>
//                   <p className="text-sm font-normal text-neutral-600 font-['Inter']">Из центра Ургенча по ул. Навои до ул. Промышленная, поворот направо. Наш офис в 200м слева.</p>
//                 </div>
//                 <div>
//                   <div className="flex items-center gap-3 mb-2">
//                     {/* SVG for Bus icon */}
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2a1 1 0 001 1h16a1 1 0 001-1z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1z" />
//                     </svg>
//                     <span className="text-base font-bold text-neutral-950 font-['Inter']">На общественном транспорте</span>
//                   </div>
//                   <p className="text-sm font-normal text-neutral-600 font-['Inter']">Автобус №15, №23 до остановки 'Промышленная'. Пешком 3 минуты до нашего офиса.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Request Form Column */}
//             <div>
//               <div className="bg-stone-50 rounded-xl shadow-lg p-8">
//                 <h4 className="text-base font-semibold text-neutral-950 font-['Manrope']">Оставьте заявку</h4>
//                 <p className="text-sm font-normal text-neutral-600 font-['Inter'] mb-4">Мы свяжемся с вами в ближайшее время</p>
//                 <form className="flex flex-col gap-4">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-normal text-neutral-950 font-['Inter'] mb-1">Имя *</label>
//                     <input type="text" id="name" className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-normal text-neutral-950 font-['Inter'] mb-1">Телефон *</label>
//                     <input type="text" id="phone" className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
//                   </div>
//                   <div>
//                     <label htmlFor="message" className="block text-sm font-normal text-neutral-950 font-['Inter'] mb-1">Сообщение</label>
//                     <textarea id="message" rows="4" className="w-full px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Расскажите о ваших требованиях к двери..."></textarea>
//                   </div>
//                   <button type="submit" className="w-full py-2 bg-lime-950 rounded-md text-orange-50 font-['Inter'] font-semibold shadow-sm hover:bg-lime-900 transition-colors">
//                     Отправить заявку
//                   </button>
//                 </form>
//               </div>

//               <div className="bg-orange-400/5 rounded-lg border border-orange-400/10 p-6 mt-8">
//                 <h5 className="text-lg font-semibold text-neutral-950 font-['Manrope'] mb-4">Что происходит после отправки заявки?</h5>
//                 <ul className="list-none space-y-2">
//                   <li className="flex items-start gap-2 text-sm text-neutral-600 font-['Inter']">
//                     <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
//                     <span>Мы свяжемся с вами в течение 30 минут</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-sm text-neutral-600 font-['Inter']">
//                     <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
//                     <span>Проведем бесплатную консультацию</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-sm text-neutral-600 font-['Inter']">
//                     <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
//                     <span>Предложим оптимальное решение</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-sm text-neutral-600 font-['Inter']">
//                     <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
//                     <span>Организуем бесплатный замер</span>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Footer component */}
//       <Contact_link />
//     </div>
//   );
// };

// export default App;

























import React from 'react';
import Contact_link from '../components/Contact_link';

const App = () => {
  return (
    <div>
      {/* Container for the main contact sections */}
      <div className="container mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8">
        {/* Contact Methods Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-2">Bog'lanish usullari</h2>
          <p className="text-lg font-normal text-neutral-600">Siz uchun qulay bo'lgan bog'lanish usulini tanlang</p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Phone */}
          <div className="bg-stone-50 rounded-xl shadow-lg border-2 border-orange-400 p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-orange-400">
                {/* SVG for Phone icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Telefon</h4>
            <div className="bg-orange-400/10 text-orange-400 rounded-md py-1 px-3 text-xs mb-4">
              Asosiy
            </div>
            <p className="text-base font-normal text-neutral-950 mb-1"><a href="tel:+998 (62) 123-45-67">+998 (62) 123-45-67</a></p>
            <p className="text-base font-normal text-neutral-950 mb-4"><a href="tel:+998 (90) 123-45-67">+998 (90) 123-45-67</a></p>
            <p className="text-sm font-normal text-neutral-600">Ish vaqtida qo'ng'iroq qiling</p>
          </div>

          {/* Card 2: Email */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-lime-950">
                {/* SVG for Email icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lime-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v2z" />
                </svg>
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Email</h4>
            <div className="h-6 mb-4"></div> {/* Placeholder to align cards vertically */}
            <p className="text-lg font-normal text-neutral-950 mb-1"><a href="mailto:info@redore.uz" target='_blank'>info@redore.uz</a></p>
            <p className="text-lg font-normal text-neutral-950 mb-4"><a href="mailto:sales@redore.uz" target='_blank'>sales@redore.uz</a></p>
            <p className="text-sm font-normal text-neutral-600">2 soat ichida javob beramiz</p>
          </div>

          {/* Card 3: Telegram */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <div className="mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-4 border-lime-950">
                {/* SVG for Telegram icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-lime-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14m-5 0l4.553-2.276A1 1 0 0015 10m-5 0V8m5 6v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2" />
                </svg>
              </div>
            </div>
            <h4 className="text-base font-semibold text-neutral-950 mb-1">Telegram</h4>
            <div className="h-6 mb-4"></div> {/* Placeholder to align cards vertically */}
            <p className="text-lg font-normal text-neutral-950 mb-1"><a href="https://t.me/@redore_doors" target='_blank'>@redore_doors</a></p>
            <p className="text-base font-normal text-neutral-950 mb-4"><a href="https://t.me/+998 (90) 123-45-67">+998 (90) 123-45-67</a></p>
            <p className="text-sm font-normal text-neutral-600">Messangerda tezkor aloqa</p>
          </div>
        </div>

        {/* Our Office and Location Details Section */}
        <div className="mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-950 mb-8">Bizning ofisimiz</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Details Column */}
            <div className="flex flex-col gap-8">
              {/* Address Card */}
              <div className="bg-stone-50 rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-orange-400 rounded-lg">
                    {/* SVG for Address icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-neutral-950 ">Manzil</h4>
                </div>
                <a href="https://maps.app.goo.gl/qUKzVL9hbr7fQ7Xj8" target='_blank'>
                  <p className="text-base font-normal text-neutral-950 mb-1">O'zbekiston Respublikasi</p>
                  <p className="text-base font-normal text-neutral-950 mb-1">Xorazm viloyati</p>
                  <p className="text-lg font-normal text-neutral-950 mb-4">Urganch sh., Sanoat ko'chasi, 15</p>
                  <p className="text-sm font-normal text-neutral-600">Sanoat zonasiga yaqin, qulay avtoturargoh</p>
                </a>
              </div>

              {/* Working Hours Card */}
              <div className="bg-stone-50 rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-orange-400 rounded-lg">
                    {/* SVG for Clock icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-neutral-950">Ish vaqtlari</h4>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base font-normal text-neutral-600">Dushanba - Juma</span>
                  <span className="text-sm font-normal text-neutral-950">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-base font-normal text-neutral-600">Shanba</span>
                  <span className="text-sm font-normal text-neutral-950">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-normal text-neutral-600">Yakshanba</span>
                  <span className="text-base font-normal text-neutral-950">Dam olish kuni</span>
                </div>
                <div className="bg-lime-950/10 rounded-lg p-3 text-lime-950 text-sm font-normal font-['Inter']">
                  Favqulodda buyurtmalar va maslahatlar uchun - telefon orqali 24 soat aloqada
                </div>
              </div>

              {/* How to Get Here Card */}
              <div className="bg-stone-50 rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 border-2 border-orange-400 rounded-lg">
                    {/* SVG for Directions icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19l6-6-6-6" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-neutral-950">Qanday yetib borish mumkin</h4>
                </div>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-2">
                    {/* SVG for Car icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v12m0-3h-3a3 3 0 01-3-3v-3a3 3 0 013-3h3a3 3 0 013 3v3a3 3 0 01-3 3h-3" />
                    </svg>
                    <span className="text-base font-bold text-neutral-950">Avtomobilda</span>
                  </div>
                  <p className="text-sm font-normal text-neutral-600">Urganch markazidan Navoiy ko'chasi bo'ylab Sanoat ko'chasigacha, o'ngga buriling. Ofisimiz chap tomonda 200m uzoqlikda.</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    {/* SVG for Bus icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2a1 1 0 001 1h16a1 1 0 001-1z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11h10a1 1 0 011 1v6a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1z" />
                    </svg>
                    <span className="text-base font-bold text-neutral-950">Jamoat transportida</span>
                  </div>
                  <p className="text-sm font-normal text-neutral-600">15-sonli, 23-sonli avtobus bilan 'Sanoat' bekatigacha. Ofisimizgacha piyoda 3 daqiqa.</p>
                </div>
              </div>
            </div>

            {/* Request Form Column */}
            <div>
              <div className="bg-stone-50 rounded-xl shadow-lg p-8">
                <h4 className="text-base font-semibold text-neutral-950">Ariza qoldiring</h4>
                <p className="text-sm font-normal text-neutral-600 mb-4">Tez orada siz bilan bog'lanamiz</p>
                <form className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-normal text-neutral-950 mb-1">Ism *</label>
                    <input type="text" id="name" className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-normal text-neutral-950 mb-1">Telefon *</label>
                    <input type="text" id="phone" className="w-full h-10 px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-normal text-neutral-950 mb-1">Xabar</label>
                    <textarea id="message" rows="4" className="w-full px-3 py-2 rounded-md border border-stone-100 bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="Eshikka bo'lgan talablaringiz haqida yozing..."></textarea>
                  </div>
                  <button type="submit" className="w-full py-2 bg-lime-950 rounded-md text-orange-50 font-semibold shadow-sm hover:bg-lime-900 transition-colors">
                    Arizani yuborish
                  </button>
                </form>
              </div>

              <div className="bg-orange-400/5 rounded-lg border border-orange-400/10 p-6 mt-8">
                <h5 className="text-lg font-semibold text-neutral-950">Ariza yuborilgandan so'ng nima bo'ladi?</h5>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    <span>Biz siz bilan 30 daqiqa ichida bog'lanamiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    <span>Bepul maslahat beramiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    <span>Optimal yechim taklif qilamiz</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="w-2 h-2 mt-2 bg-orange-400 rounded-full flex-shrink-0"></span>
                    <span>Bepul o'lchovni tashkil qilamiz</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Contact_link />
    </div>
  );
};

export default App;