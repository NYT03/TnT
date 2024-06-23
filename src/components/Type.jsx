import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center text-3xl leading-6 text-black">
      <div className="max-md:max-w-full">Choose a payment option</div>
      <div className="flex gap-5 px-4 py-6 mt-24 max-w-full rounded-xl bg-zinc-300 w-[703px] max-md:flex-wrap max-md:mt-10">
        <div className="flex-auto">Online UPI</div>
        <div className="shrink-0 rounded-full border border-black border-solid h-[25px] stroke-[1px] w-[25px]" />
      </div>
      <div className="flex gap-5 justify-between px-4 py-6 mt-24 max-w-full whitespace-nowrap rounded-xl bg-zinc-300 w-[703px] max-md:flex-wrap max-md:mt-10">
        <div>Card</div>
        <div className="shrink-0 rounded-full border border-black border-solid h-[25px] stroke-[1px] w-[25px]" />
      </div>
      <div className="flex gap-5 justify-between px-4 py-6 mt-24 max-w-full whitespace-nowrap rounded-xl bg-zinc-300 w-[703px] max-md:flex-wrap max-md:mt-10">
        <div>Cash</div>
        <div className="shrink-0 rounded-full border border-black border-solid h-[25px] stroke-[1px] w-[25px]" />
      </div>
      <div className="flex gap-5 justify-between self-stretch mt-24 w-full text-4xl leading-10 text-center whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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


