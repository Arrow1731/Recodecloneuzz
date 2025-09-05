import React, { Component } from 'react'
import K_Door from '../assets/images/K_Eshik.png';
import P_Door from '../assets/images/Door_03.png';
import C_Door from '../assets/images/tijorat.png';

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
              src={C_Door}
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
