function About() {
  return (
    <div className="flex flex-col text-2xl text-center text-black">
      <div className="self-center font-bold max-md:max-w-full">ABOUT US</div>
      <div className="self-center mt-72 font-semibold max-md:mt-10 max-md:max-w-full">
        We are a team of dedicated professionals, and we firmly believe in
        providing sustainable tourism. We aim to provide new services with
        maximum perfection and consistency. We always prioritize customers’
        satisfaction and do our best to achieve it. No matter, what type of
        vacation you need, we have a variety of packages to fulfill your
        requirements. Our holiday packages not only provide local sight-seeing
        but also adventure tourism
        <br />
        <br />
        Our remarkable services have honored us to serve SpiceJet, Bosch and
        Laumb, Accenture, and HCL. Our team always makes sure to provide the
        best ever services to our clients. We continually are adopting new
        technologies to meet the ever-changing demands of the audience.We are
        committed to provide quality services to our customers.
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="flex gap-5 justify-between pr-3 mt-36 max-w-full font-bold w-[1294px] max-md:flex-wrap max-md:mt-10">
        <div>
          99%
          <br />
          of travelers recommend us
          <br /> to friends and family
        </div>
        <div>
          10,000+
          <br />
          Successful tours conducted <br />
          all over the country
        </div>
        <div>
          500+
          <br />
          Premium tour packages available <br />
          for you to choose from
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 flex gap-5 justify-between px-px mt-36 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col px-5 font-semibold">
          <div className="font-extrabold">CONTACT US</div>
          {/* <img src="src\components\assets\images\Vector 3.png" className="w-full"/> */}
          <div className="mt-4">Email:nikraval03@gmail.com</div>
          <div className="mt-4">+91 7043961046</div>
        </div>
        <div className="flex flex-col items-center self-start px-5 font-extrabold max-md:max-w-full">
          <div>WE ACCEPT THE FOLLOWING</div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca47947c852ffb7f2f7510de264acd957cfa16fc8637b32677b12e048e5e3bb3?apiKey=1375a8a048d04ebba4c0ffc74eff8181&"
            className="mt-7 aspect-[9.09] w-[476px] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;