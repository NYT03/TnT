import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import MongoDB from "../MongoDB";

function Posts() {
  const navigator=useNavigate();
  const data=MongoDB.database;
  const[count,setCount]=useState(0);
  function countplus() {
    setCount(count+1)
  }
  function countminus() {
    setCount(count+1)
  }
  return (
    <div className=" justify-center px-3 py-2.5 bg-white rounded-xl">
      <div className="max-md:max-w-1/3">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex justify-center max-h-min w-2/6">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c088eee7cbea19818b6f317f74c0ec7bba1a7198b64446089bcc886f9c2aff0?apiKey=1375a8a048d04ebba4c0ffc74eff8181&"
              className="border-2 border-black rounded-lg shadow-lg shadow-rose-950 m-10 h-[35rem] aspect-[0.74]"
            />
          </div>
          <div className="p-8 flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full bg-gradient-to-bl from-[#B49179] via-[#D79D76] to-[#BA672E] rounded-2xl shadow-lg shadow-slate-700">
            <div className="flex flex-col grow w-full text-base font-bold rounded-2xl max-md:mt-5 max-md:max-w-full">
              <div className="flex flex-col text-white max-md:max-w-full">
                <div className="mx-4 mb-9 text-2xl text-center text-black max-md:mr-2.5 max-md:max-w-full">
                  Journey to Amarnath Cave Temple
                </div>
                <div className="mt-2.4 max-md:max-w-full text-orange-700">ROUTE:</div>
                <div className="max-md:max-w-full">
                  Commencing from Jammu, our journey will lead us through the
                  picturesque landscapes of Patnitop, Anantnag, and Pahalgam,
                  onwards to Chandanwari. From Chandanwari, we will trek through
                  Pissu Top and Sheshnag, finally reaching Panchtarni, our
                  gateway to the sacred Amarnath Cave Temple.
                </div>
              </div>
              <div className="self-start mt-3.5 text-orange-700">DATES:</div>
              <div className="flex gap-5 self-start mt-2 text-white whitespace-nowrap">
                <div className="flex gap-1.5">
                  <div>From:</div>
                  <div>01/01/2000</div>
                </div>
                <div className="flex gap-0">
                  <div>To:</div>
                  <div>07/01/2000</div>
                </div>
              </div>
              <div className="mt-7 text-orange-700 max-md:max-w-full">
                FOOD SERVICES:
              </div>
              <div className="text-white max-md:max-w-full">
                Breakfast: Start your day with a refreshing cup of tea or coffee
                accompanied by samosa or Poha.
                <br />
                Lunch: Enjoy a hearty meal in the afternoon consisting of 2
                sabjis, 5 rotis, dal-rice, and a refreshing glass of buttermilk.
                <br />
                Dinner: Conclude your day with a fulfilling dinner of Dal Bati.
              </div>
              <div className="mt-2 text-orange-700 max-md:max-w-full">
                OTHER SERVICES:
              </div>
              <div className="text-white max-md:max-w-full">
                Accommodation: Experience comfort during our journey with a
                2-day hotel stay along the route.
              </div>
              <div className="flex gap-5 pr-20 pb-1.5 mt-5 text-slate-800 max-md:flex-wrap max-md:pr-5">
                <div className="flex gap-0 self-start">
                  <div className="text-orange-700">Price :</div>
                  <div> 10000/person</div>
                </div>
                <div className="flex gap-0">
                  <div className="text-orange-700">Total Seats:</div>
                  <div>60</div>
                </div>
                <div className="flex gap-1">
                  <div className="text-orange-700">Available Seats:</div>
                  <div>10</div>
                </div>
              </div>
              <div className="grid grid-cols-2 w-full gap-96 mt-5 justify-center">
                <div className="flex flex-col gap-5 my-auto">
                  <div className="text-orange-700">Count:</div>
                  <div className="flex flex-col justify-center self-start px-1 py-1.5 text-black rounded-lg bg-zinc-300">
                    <div className="flex gap-5">
                      <button onClick={countminus}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/28749006eb7b3b1b7a257531fe4d4f5f663665e18a3c6995f42044149b25e781?apiKey=1375a8a048d04ebba4c0ffc74eff8181&"
                        className="shrink-0 my-auto w-3.5 aspect-[7.14] fill-black"
                        />
                        </button>
                      <div id="count">{count}</div>
                      <button onClick={countplus}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcebb8af293d14c140e96fcb5414aa241f981c58f6b5ebb7f756759e60877108?apiKey=1375a8a048d04ebba4c0ffc74eff8181&"
                        className="shrink-0 aspect-[1.08] fill-black w-[15px]"
                        />
                        </button>
                    </div>
                  </div>
                </div>
                  <button onClick={()=>{navigator.useNavigate('/booking')}}>
                <div className="justify-center hover:bg-amber-700 mt-20 p-2.5 text-black bg-white rounded-lg max-w-[15rem] whitespace-nowrap">
                  Go to the booking page
                </div>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Posts;