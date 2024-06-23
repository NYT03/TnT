

function Upi() {
  return (
    <div className="flex flex-col bg-white">
      <div className="self-end pb-9 max-w-full w-[1177px] max-md:pl-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d87f0e04d05666aac0c95adf7aa4b5f0627536b4cb82778c10f95ba6078cd55c?apiKey=1375a8a048d04ebba4c0ffc74eff8181&"
              className="grow mt-9 w-full border-black border-solid aspect-[0.93] border-[3px] max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl leading-10 text-black max-md:max-w-full">
                Scan the QR code to pay through UPI
              </div>
              <div className="flex flex-col justify-center mt-5 bg-black rounded-xl max-md:max-w-full">
                <div className="flex flex-col rounded border border-white border-solid bg-neutral-700 bg-opacity-40 max-md:max-w-full">
                  <div className="pr-20 bg-white bg-opacity-0 max-md:pr-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="grow justify-center self-stretch px-3 py-8 w-full text-3xl font-semibold leading-10 text-white whitespace-nowrap border-t border-l border-white border-solid bg-white bg-opacity-0">
                          Price
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="grow justify-center self-stretch px-3 py-2.5 w-full text-3xl font-semibold leading-10 text-white border-t border-l border-white border-solid bg-white bg-opacity-0">
                          No of people
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="grow justify-center self-stretch px-3 py-2.5 w-full text-3xl font-semibold leading-10 text-white border-t border-l border-white border-solid bg-white bg-opacity-0">
                          Total Price
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-0 pr-20 text-xl leading-7 text-white whitespace-nowrap rounded-xl bg-white bg-opacity-0 max-md:flex-wrap max-md:pr-5">
                    <div className="flex-1 justify-center px-3 py-2.5 bg-amber-700 border-t border-l border-white border-solid">
                      ₹1000
                    </div>
                    <div className="flex-1 justify-center px-3 py-2.5 bg-amber-700 border-t border-l border-white border-solid">
                      4
                    </div>
                    <div className="flex-1 justify-center px-3 py-2.5 bg-amber-700 border-t border-l border-white border-solid">
                      ₹4000
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-36 w-full text-4xl leading-10 text-center text-black whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="justify-center px-3 py-2.5 bg-amber-800 rounded-3xl mix-blend-multiply max-md:px-5">
          Back
        </div>
        <div className="justify-center px-3 py-2.5 bg-amber-800 rounded-3xl mix-blend-multiply max-md:px-5">
          NEXT
        </div>
      </div>
    </div>
  );
}
export default Upi;