import React, { Component } from 'react'
import Heaer_img from '../assets/images/header_right_img.png';
import Ustalar from '../assets/images/Usta.png';
import Main_sec from '../components/Main_sec';
import Footer from '../components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='container font-lato'>
          <div className='flex justify-between items-center pt-[40px]'>
            <div className='flex flex-col gap-[20px]'>
              <h2 className='font-bold text-[60px]'>Har bir eshikda sifat va xavfsizlik</h2>
              <p className='font-eregular text-[19px]'>"Redore" kompaniyasi zamonaviy texnologiyalardan foydalangan holda yuqori sifatli temir eshiklarni ishlab chiqaradi va barcha mahsulotlari uchun kafolat beradi.</p>
              <div>
                <button className='bg-[#D1A84B] text-white rounded-[8px] px-[20px] py-[10px]'>
                  <a href="#">Eshiklarni ko'rish</a>
                </button>
                <button className='border border-[#D1A84B] text-[#D1A84B] rounded-[8px] px-[20px] py-[10px] ml-[20px]'>
                  <a href="#">Bog'lanish</a>
                </button>
              </div>
            </div>
            <div className=''>
              <img src={Heaer_img} alt="" />
            </div>
          </div>

          {/* MAIN */}

          <main>
            <section>
              <div className='text-center mt-[100px] mb-[100px]'>
                <h3 className='text-[36px]'>Nima uchun Qayta ishlashni tanlaysiz?</h3>
                <p className='font-regular text-[19px]'>Biz ishonchli va chiroyli eshiklarni yaratish uchun an'anaviy hunarmandchilikni <br /> zamonaviy texnologiyalar bilan birlashtiramiz</p>
              </div>

              {/* 3 CARDS */}

              <div className="self-stretch inline-flex justify-center items-start gap-8">
                <div className="flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                  <div className="self-stretch px-6 flex flex-col justify-start items-center gap-1.5">
                    <div className="w-12 h-16 pb-4 flex flex-col justify-start items-center">
                      <div data-svg-wrapper data-variant="1" className="relative">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40 26.5C40 36.5 33 41.5 24.68 44.4C24.2443 44.5477 23.7711 44.5406 23.34 44.38C15 41.5 8 36.5 8 26.5V12.5C8 11.9696 8.21071 11.4609 8.58579 11.0858C8.96086 10.7108 9.46957 10.5 10 10.5C14 10.5 19 8.10004 22.48 5.06004C22.9037 4.69804 23.4427 4.49915 24 4.49915C24.5573 4.49915 25.0963 4.69804 25.52 5.06004C29.02 8.12004 34 10.5 38 10.5C38.5304 10.5 39.0391 10.7108 39.4142 11.0858C39.7893 11.4609 40 11.9696 40 12.5V26.5Z" stroke="#D1A84B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-950 text-base font-semibold leading-none">Yuqori sifatli</div>
                    </div>
                  </div>
                  <div className="self-stretch px-6 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-600 text-sm font-normal leading-normal">Har bir eshik tajribali tomonidan amalga oshiriladi<br />mutaxassislar tomonidan yuqori sifatli<br />materiallar va zamonaviy texnologiyalar</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                  <div className="self-stretch px-6 flex flex-col justify-start items-center gap-1.5">
                    <div className="w-12 h-16 pb-4 flex flex-col justify-start items-center">
                      <div data-svg-wrapper data-variant="2" className="relative">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M30.954 26.28L33.984 43.332C34.0179 43.5328 33.9898 43.7392 33.9032 43.9235C33.8167 44.1079 33.676 44.2614 33.4999 44.3636C33.3237 44.4658 33.1206 44.5118 32.9176 44.4954C32.7146 44.4791 32.5215 44.4011 32.364 44.272L25.204 38.898C24.8583 38.6398 24.4385 38.5003 24.007 38.5003C23.5755 38.5003 23.1556 38.6398 22.81 38.898L15.638 44.27C15.4806 44.3989 15.2877 44.4767 15.085 44.4931C14.8823 44.5095 14.6793 44.4637 14.5033 44.3618C14.3273 44.2598 14.1866 44.1067 14.0998 43.9227C14.0131 43.7387 13.9846 43.5327 14.018 43.332L17.046 26.28" stroke="#072A00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M24 28.5C30.6274 28.5 36 23.1274 36 16.5C36 9.87258 30.6274 4.5 24 4.5C17.3726 4.5 12 9.87258 12 16.5C12 23.1274 17.3726 28.5 24 28.5Z" stroke="#072A00" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-950 text-base font-semibold leading-none">Ishonchlilik kafolati</div>
                    </div>
                  </div>
                  <div className="self-stretch px-6 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-600 text-sm font-normal leading-normal">Biz barcha mahsulotlarimizga rasmiy kafolat beramiz.<br />mahsulotlar va har bir eshikning chidamliligini ta'minlaydi</div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 self-stretch py-6 bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                  <div className="self-stretch px-6 flex flex-col justify-start items-center gap-1.5">
                    <div className="w-12 h-16 pb-4 flex flex-col justify-start items-center">
                      <div data-svg-wrapper data-variant="3" className="relative">
                        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 44.5C35.0457 44.5 44 35.5457 44 24.5C44 13.4543 35.0457 4.5 24 4.5C12.9543 4.5 4 13.4543 4 24.5C4 35.5457 12.9543 44.5 24 44.5Z" stroke="#D1A84B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M24 12.5V24.5L32 28.5" stroke="#D1A84B" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-950 text-base font-semibold leading-none">Zamonaviy texnologiyalar</div>
                    </div>
                  </div>
                  <div className="self-stretch px-6 flex flex-col justify-start items-start">
                    <div className="self-stretch flex flex-col justify-start items-center">
                      <div className="self-stretch text-center justify-center text-neutral-600 text-base font-normal leading-normal">Biz ilg'or va innovatsion uskunalardan foydalanamiz<br />mukammal eshiklarni yaratish uchun ishlab chiqarish usullari</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Products */}

            <section>
              <div className='text-center mt-[100px] mb-[100px]'>
                <h3 className='text-[36px]'>Bizning mahsulotlarimiz</h3>
                <p className='font-regular text-[19px]'>Uy va biznes uchun temir eshiklarning keng assortimenti</p>
              </div>
              <Main_sec />
            </section>
          </main>
        </div>

        <div className='mt-[100px]'>
          <div className="Section w-full px-52 py-20 bg-[#D1A84B] inline-flex flex-col justify-start items-start">
            <div data-layer="Container" className="container self-stretch inline-flex justify-center items-center gap-12">
              <div className="container flex-1 inline-flex flex-col justify-start items-start gap-3">
                <div data-layer="Heading 2" className="Heading2 self-stretch flex flex-col justify-start items-start">
                  <div data-layer="Наши гарантии и обязательства" className="self-stretch justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Bizning kafolatlarimiz va majburiyatlarimiz</div>
                </div>
                <div data-layer="Container" className="Container self-stretch flex flex-col justify-start items-start gap-4">
                  <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center">
                    <div data-layer="SVG:margin" className="SvgMargin w-9 h-6 pr-3 inline-flex flex-col justify-start items-start">
                      <div data-layer="SVG" className="Svg size-6 flex flex-col justify-center items-start overflow-hidden">
                        <div data-svg-wrapper data-layer="Component 1" data-variant="8" className="Component1 relative">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11L12 14L22 4" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                      <div data-layer="Официальная гарантия на все изделия" className="justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">Barcha mahsulotlar uchun rasmiy kafolat</div>
                    </div>
                  </div>
                  <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center">
                    <div data-layer="SVG:margin" className="SvgMargin w-9 h-6 pr-3 inline-flex flex-col justify-start items-start">
                      <div data-layer="SVG" className="Svg size-6 flex flex-col justify-center items-start overflow-hidden">
                        <div data-svg-wrapper data-layer="Component 1" data-variant="8" className="Component1 relative">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11L12 14L22 4" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                      <div data-layer="Качественные материалы и комплектующие" className="justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Yuqori sifatli materiallar va komponentlar</div>
                    </div>
                  </div>
                  <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center">
                    <div data-layer="SVG:margin" className="SvgMargin w-9 h-6 pr-3 inline-flex flex-col justify-start items-start">
                      <div data-layer="SVG" className="Svg size-6 flex flex-col justify-center items-start overflow-hidden">
                        <div data-svg-wrapper data-layer="Component 1" data-variant="8" className="Component1 relative">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11L12 14L22 4" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                      <div data-layer="Профессиональная установка" className="justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">Professional o'rnatish</div>
                    </div>
                  </div>
                  <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center">
                    <div data-layer="SVG:margin" className="SvgMargin w-9 h-6 pr-3 inline-flex flex-col justify-start items-start">
                      <div data-layer="SVG" className="Svg size-6 flex flex-col justify-center items-start overflow-hidden">
                        <div data-svg-wrapper data-layer="Component 1" data-variant="8" className="Component1 relative">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11L12 14L22 4" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                      <div data-layer="Послегарантийное обслуживание" className="justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Kafolatdan keyingi xizmat</div>
                    </div>
                  </div>
                  <div data-layer="Container" className="Container self-stretch inline-flex justify-start items-center">
                    <div data-layer="SVG:margin" className="SvgMargin w-9 h-6 pr-3 inline-flex flex-col justify-start items-start">
                      <div data-layer="SVG" className="Svg size-6 flex flex-col justify-center items-start overflow-hidden">
                        <div data-svg-wrapper data-layer="Component 1" data-variant="8" className="Component1 relative">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8788 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.36428 21.6424C7.15795 21.0389 5.22517 19.6974 3.88825 17.8414C2.55134 15.9854 1.8911 13.7272 2.01764 11.4434C2.14418 9.15952 3.04986 6.98808 4.58363 5.29116C6.1174 3.59424 8.18656 2.47442 10.446 2.11844C12.7055 1.76247 15.0188 2.19185 17 3.33499" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 11L12 14L22 4" stroke="#072A00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div data-layer="Container" className="Container size- inline-flex flex-col justify-start items-start">
                      <div data-layer="Индивидуальный подход к каждому клиенту" className="justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Har bir mijozga individual yondashuv</div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-layer="Container" className="Container flex-1 inline-flex flex-col justify-start items-start">
                <img data-layer="Профессиональная установка дверей" className="size-[728px] max-w-[728px] relative rounded-lg" src={Ustalar} />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}
