import React, { Component } from 'react'
import Contact_link from '../components/Contact_link'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className='container mt-[100px] mb-[100px]'>
          <div className="w-[1536px] h-96 relative">
            <div className="w-64 h-10 left-[632.50px] top-0 absolute text-center justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Способы связи</div>
            <div className="w-96 h-7 left-[576.84px] top-[56px] absolute text-center justify-center text-neutral-600 text-lg font-normal font-['Inter'] leading-7">Выберите удобный для вас способ связи</div>
            <div className="w-[480px] h-72 left-[16px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg shadow-[0px_0px_0px_2px_rgba(209,168,75,1.00)] overflow-hidden">
              <div className="w-12 h-12 left-[216px] top-[24px] absolute">
                <div className="w-10 h-10 left-[4.22px] top-[4px] absolute outline outline-4 outline-offset-[-2px] outline-orange-400" />
              </div>
              <div className="w-16 h-4 left-[205.70px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Телефон</div>
              <div className="w-20 h-5 left-[203.48px] top-[116px] absolute bg-orange-400/10 rounded-md outline outline-1 outline-offset-[-1px] outline-orange-400/20 overflow-hidden">
                <div className="w-14 h-3 left-[9px] top-[5px] absolute text-center justify-center text-orange-400 text-xs font-normal font-['Inter'] leading-none">Основной</div>
              </div>
              <div className="w-40 h-7 left-[157.70px] top-[162px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (62) 123-45-67</div>
              <div className="w-40 h-7 left-[157.70px] top-[198px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (90) 123-45-67</div>
              <div className="w-48 h-6 left-[144.75px] top-[238px] absolute text-center justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Звоните в рабочее время</div>
            </div>
            <div className="w-[480px] h-72 left-[528px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
              <div className="w-12 h-12 left-[216px] top-[24px] absolute">
                <div className="w-10 h-8 left-[4px] top-[8px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
                <div className="w-10 h-3 left-[4px] top-[14px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
              </div>
              <div className="w-10 h-4 left-[219.52px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Email</div>
              <div className="w-32 h-7 left-[178.92px] top-[134px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">info@redore.uz</div>
              <div className="w-32 h-7 left-[172.38px] top-[170px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">sales@redore.uz</div>
              <div className="w-52 h-6 left-[139.03px] top-[210px] absolute text-center justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Ответим в течение 2 часов</div>
            </div>
            <div className="w-[480px] h-72 left-[1040px] top-[132px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
              <div className="w-12 h-12 left-[216px] top-[24px] absolute">
                <div className="w-10 h-10 left-[4px] top-[5.98px] absolute outline outline-4 outline-offset-[-2px] outline-lime-950" />
              </div>
              <div className="w-16 h-4 left-[204.70px] top-[94px] absolute text-center justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Telegram</div>
              <div className="w-32 h-7 left-[177.47px] top-[134px] absolute text-center justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">@redore_doors</div>
              <div className="w-40 h-7 left-[157.70px] top-[170px] absolute text-center justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">+998 (90) 123-45-67</div>
              <div className="w-56 h-6 left-[126.69px] top-[210px] absolute text-center justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Быстрая связь в мессенджере</div>
            </div>
          </div>


          {/* Info of Contacting */}

          <div className="w-[1536px] h-[854px] mt-[100px] relative">
            <div className="w-[1504px] h-[854px] relative">
              <div className="w-44 h-10 left-0 top-0 absolute justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Наш офис</div>
              <div className="w-[728px] h-60 left-0 top-[72px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
                <div className="w-6 h-6 left-[24px] top-[24px] absolute">
                  <div className="w-4 h-5 left-[4px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1.5 h-1.5 left-[9px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                </div>
                <div className="w-12 h-4 left-[60px] top-[28px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Адрес</div>
                <div className="w-48 h-7 left-[24px] top-[78px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Республика Узбекистан</div>
                <div className="w-44 h-7 left-[24px] top-[114px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-7">Хорезмская область</div>
                <div className="w-72 h-7 left-[24px] top-[150px] absolute justify-center text-neutral-950 text-lg font-normal font-['Inter'] leading-7">г. Ургенч, ул. Промышленная, 15</div>
                <div className="w-96 h-6 left-[24px] top-[186px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Рядом с промышленной зоной, удобная парковка</div>
              </div>
              <div className="w-[728px] h-64 left-0 top-[338px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
                <div className="w-6 h-6 left-[24px] top-[24px] absolute">
                  <div className="w-5 h-5 left-[2px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1 h-2 left-[12px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                </div>
                <div className="w-24 h-4 left-[60px] top-[28px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Часы работы</div>
                <div className="w-44 h-6 left-[24px] top-[78px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Понедельник - Пятница</div>
                <div className="w-20 h-6 left-[618.59px] top-[78px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-normal">9:00 - 18:00</div>
                <div className="w-16 h-6 left-[24px] top-[114px] absolute justify-center text-neutral-600 text-base font-normal font-['Inter'] leading-normal">Суббота</div>
                <div className="w-20 h-6 left-[618.59px] top-[114px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-normal">9:00 - 15:00</div>
                <div className="w-24 h-6 left-[24px] top-[150px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-normal">Воскресенье</div>
                <div className="w-20 h-6 left-[629.31px] top-[150px] absolute justify-center text-neutral-950 text-base font-normal font-['Inter'] leading-normal">Выходной</div>
                <div className="w-[680px] h-11 left-[24px] top-[190px] absolute bg-lime-950/10 rounded-lg">
                  <div className="w-96 h-5 left-[12px] top-[12px] absolute justify-center text-lime-950 text-sm font-normal font-['Inter'] leading-tight">Экстренные заказы и консультации - круглосуточно по телефону</div>
                </div>
              </div>
              <div className="w-[728px] h-56 left-0 top-[628px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
                <div className="w-28 h-4 left-[24px] top-[24px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Как добраться</div>
                <div className="w-6 h-6 left-[24px] top-[74px] absolute">
                  <div className="w-5 h-2.5 left-[2px] top-[7px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1 h-1 left-[5px] top-[15px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1.5 h-0 left-[9px] top-[17px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1 h-1 left-[15px] top-[15px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                </div>
                <div className="w-32 h-6 left-[60px] top-[70px] absolute justify-center text-neutral-950 text-base font-bold font-['Inter'] leading-normal">На автомобиле</div>
                <div className="w-[599.06px] h-8 left-[60px] top-[101px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Из центра Ургенча по ул. Навои до ул. Промышленная, поворот направо. Наш офис в 200м<br />слева.</div>
                <div className="w-6 h-6 left-[24px] top-[158px] absolute">
                  <div className="w-0 h-1.5 left-[8px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-0 h-1.5 left-[15px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-5 h-0 left-[2px] top-[12px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-5 h-3 left-[2px] top-[6px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1 h-1 left-[5px] top-[16px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-[5px] h-0 left-[9px] top-[18px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                  <div className="w-1 h-1 left-[14px] top-[16px] absolute outline outline-2 outline-offset-[-1px] outline-orange-400" />
                </div>
                <div className="w-60 h-6 left-[60px] top-[154px] absolute justify-center text-neutral-950 text-base font-bold font-['Inter'] leading-normal">На общественном транспорте</div>
                <div className="w-[572.75px] h-5 left-[60px] top-[182px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Автобус №15, №23 до остановки 'Промышленная'. Пешком 3 минуты до нашего офиса.</div>
              </div>
              <div className="w-72 h-10 left-[776px] top-0 absolute justify-center text-neutral-950 text-4xl font-bold font-['Manrope'] leading-10">Оставьте заявку</div>
              <div className="w-[728px] h-96 left-[776px] top-[72px] absolute bg-stone-50 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg overflow-hidden">
                <div className="w-32 h-4 left-[24px] top-[24px] absolute justify-center text-neutral-950 text-base font-semibold font-['Manrope'] leading-none">Оставьте заявку</div>
                <div className="w-64 h-5 left-[24px] top-[46px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Мы свяжемся с вами в ближайшее время</div>
                <div className="w-[680px] h-64 left-[24px] top-[90px] absolute">
                  <div className="w-9 h-3.5 left-0 top-[6px] absolute justify-center text-neutral-950 text-xs font-normal font-['Inter'] leading-tight">Имя *</div>
                  <div className="w-80 h-10 left-0 top-[28px] absolute bg-orange-50 rounded-md border border-stone-100" />
                  <div className="w-16 h-3.5 left-[348px] top-[6px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Телефон *</div>
                  <div className="w-80 h-10 left-[348px] top-[28px] absolute bg-orange-50 rounded-md border border-stone-100" />
                  <div className="w-20 h-3.5 left-0 top-[92px] absolute justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Сообщение</div>
                  <div className="w-[680px] h-24 left-0 top-[114px] absolute bg-orange-50 rounded-md outline outline-1 outline-offset-[-1px] outline-stone-100 overflow-hidden">
                    <div className="w-80 h-6 left-[13px] top-[9px] absolute justify-center text-neutral-950/50 text-base font-normal font-['Inter'] leading-normal">Расскажите о ваших требованиях к двери...</div>
                  </div>
                  <div className="w-[680px] h-9 left-0 top-[234px] absolute bg-lime-950 rounded-md shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
                    <div className="w-28 h-3.5 left-[282.16px] top-[11px] absolute text-center justify-center text-neutral-950 text-sm font-normal font-['Inter'] leading-tight">Отправить заявку</div>
                  </div>
                </div>
              </div>
              <div className="w-[728px] h-48 left-[776px] top-[488px] absolute bg-orange-400/5 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-400/10">
                <div className="w-96 h-7 left-[25px] top-[25px] absolute justify-center text-neutral-950 text-lg font-semibold font-['Manrope'] leading-7">Что происходит после отправки заявки?</div>
                <div className="w-2 h-2 left-[25px] top-[71px] absolute bg-orange-400 rounded-full" />
                <div className="w-64 h-5 left-[41px] top-[65px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Мы свяжемся с вами в течение 30 минут</div>
                <div className="w-2 h-2 left-[25px] top-[99px] absolute bg-orange-400 rounded-full" />
                <div className="w-60 h-5 left-[41px] top-[93px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Проведем бесплатную консультацию</div>
                <div className="w-2 h-2 left-[25px] top-[127px] absolute bg-orange-400 rounded-full" />
                <div className="w-56 h-5 left-[41px] top-[121px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Предложим оптимальное решение</div>
                <div className="w-2 h-2 left-[25px] top-[155px] absolute bg-orange-400 rounded-full" />
                <div className="w-52 h-5 left-[41px] top-[149px] absolute justify-center text-neutral-600 text-sm font-normal font-['Inter'] leading-tight">Организуем бесплатный замер</div>
              </div>
            </div>
          </div>
        </div>
        <Contact_link />
      </div>
    )
  }
}
