// import React, { Component } from 'react'

// export default class
//     extends Component {
//     render() {
//         return (
//             <div className='container font-lato'>
//                 <div className="inline-flex justify-center items-start gap-5">
//                     <div data-layer="Background+Shadow" className="BackgroundShadow flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
//                         <img data-layer="Входные двери для дома" className="w-full h-96 max-w-[480px] relative" src="https://placehold.co/480x360" />
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start gap-1.5">
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Входные двери для дома" className="self-stretch justify-center text-neutral-950 text-base font-semibold leading-none">Uy uchun kirish eshiklari</div>
//                             </div>
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Надёжная защита и элегантный дизайн для вашего дома" className="self-stretch justify-center text-neutral-600 text-base font-normal leading-normal">Uyingiz uchun ishonchli himoya va oqlangan <br /> dizayn</div>
//                             </div>
//                         </div>
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start">
//                             <div data-layer="Link → Button" className="LinkButton h-9 px-44 py-2 bg-white/0 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center">
//                                 <div data-layer="Подробнее" className="text-center justify-center text-neutral-950 text-sm font-normal leading-tight">Batafsil ma'lumot</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div data-layer="Background+Shadow" className="BackgroundShadow flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
//                         <img data-layer="Коммерческие двери" className="w-full h-96 max-w-[480px] relative" src="https://placehold.co/480x360" />
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start gap-1.5">
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Коммерческие двери" className="self-stretch justify-center text-neutral-950 text-base font-semibold leading-none">Tijorat eshiklari</div>
//                             </div>
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Усиленные двери для офисов и коммерческих помещений" className="self-stretch justify-center text-neutral-600 text-base font-normal leading-normal">Ofis va tijorat uchun mustahkamlangan eshiklar<br />binolar</div>
//                             </div>
//                         </div>
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start">
//                             <div data-layer="Link → Button" className="LinkButton h-9 px-44 py-2 bg-white/0 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center">
//                                 <div data-layer="Подробнее" className="text-center justify-center text-neutral-950 text-sm font-normal leading-tight">Batafsil ma'lumot</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div data-layer="Background+Shadow" className="BackgroundShadow flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
//                         <img data-layer="Противопожарные двери" className="w-full h-96 max-w-[480px] relative" src="https://placehold.co/480x360" />
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start gap-1.5">
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Противопожарные двери" className="self-stretch justify-center text-neutral-950 text-base font-semibold leading-none">Yong'in eshiklari</div>
//                             </div>
//                             <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start">
//                                 <div data-layer="Сертифицированные двери с огнестойкими свойствами" className="self-stretch justify-center text-neutral-600 text-base font-normal leading-normal">Olovga chidamli xususiyatlarga ega sertifikatlangan eshiklar</div>
//                             </div>
//                         </div>
//                         <div data-layer="Container" className="Container self-stretch px-6 flex flex-col justify-start items-start">
//                             <div data-layer="Link → Button" className="LinkButton h-9 px-44 py-2 bg-white/0 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center">
//                                 <div data-layer="Подробнее" className="text-center justify-center text-neutral-950 text-sm font-normal leading-tight">Batafsil ma'lumot</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }















import React, { Component } from 'react'
import K_Door from '../assets/images/K_Eshik.png';
import P_Door from '../assets/images/Door_03.png';

export default class DoorsSection extends Component {
  render() {
    return (
      <div className="container mx-auto px-4 font-lato">
        {/* grid вместо inline-flex */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Card 1 */}
          <div className="BackgroundShadow py-6 bg-stone-50 rounded-xl shadow-lg flex flex-col justify-start items-start gap-6 overflow-hidden">
            <img
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-t-xl"
              src={K_Door}
              alt="Uy uchun kirish eshiklari"
            />
            <div className="px-6 flex flex-col justify-start items-start gap-2">
              <h3 className="text-neutral-950 text-lg font-semibold">
                Uy uchun kirish eshiklari
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                Uyingiz uchun ishonchli himoya va oqlangan <br /> dizayn
              </p>
            </div>
            <div className="px-6 w-full">
              <a href="Catalog">
                <button className="w-full h-10 bg-white rounded-md shadow outline outline-1 outline-zinc-300 text-neutral-950 text-sm font-medium">
                  Batafsil ma'lumot
                </button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="BackgroundShadow py-6 bg-stone-50 rounded-xl shadow-lg flex flex-col justify-start items-start gap-6 overflow-hidden">
            <img
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-t-xl"
              src="https://placehold.co/480x360"
              alt="Tijorat eshiklari"
            />
            <div className="px-6 flex flex-col justify-start items-start gap-2">
              <h3 className="text-neutral-950 text-lg font-semibold">
                Tijorat eshiklari
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                Ofis va tijorat uchun mustahkamlangan eshiklar<br />binolar
              </p>
            </div>
            <div className="px-6 w-full">
              <a href="Catalog">
                <button className="w-full h-10 bg-white rounded-md shadow outline outline-1 outline-zinc-300 text-neutral-950 text-sm font-medium">
                  Batafsil ma'lumot
                </button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="BackgroundShadow py-6 bg-stone-50 rounded-xl shadow-lg flex flex-col justify-start items-start gap-6 overflow-hidden">
            <img
              className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-t-xl"
              src={P_Door}
              alt="Yong'in eshiklari"
            />
            <div className="px-6 flex flex-col justify-start items-start gap-2">
              <h3 className="text-neutral-950 text-lg font-semibold">
                Yong'in eshiklari
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base">
                Olovga chidamli xususiyatlarga ega sertifikatlangan eshiklar
              </p>
            </div>
            <div className="px-6 w-full">
              <a href="Catalog">
                <button className="w-full h-10 bg-white rounded-md shadow outline outline-1 outline-zinc-300 text-neutral-950 text-sm font-medium">
                  Batafsil ma'lumot
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}