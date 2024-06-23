import HomeImages from "./HomeImages";  
import HomeText from "./HomeText";
const imagePaths = [
  "./assets/Images2/download.jpg",
  "./assets/Images2/Angkor-Wat-temple-complex-Camb.jpg",
  "./assets/Images2/Guide-to-Visiting-Candi-Prambanan-960x540.jpg",
  "./assets/Images2/Brihadeeswarar-Temple-Thanjavur-Tamil-Nadu-1.jpg",
];
const imagePaths2 = [
  "./assets/Images2/7867_group tour.jpg",
  "./assets/Images2/81484_OldAgePension.jpg",
  "./assets/Images2/87919_special-tours-in-india-jpg.jpg",
  "./assets/Images2/elderly-travellers-boarding-barnes-tour-bus-henley-on-thames-oxfordshire-AFB40M.jpg",
];
const templeData = [
  { title: "Kailashnath Temple", description: "Located in India, the Kailashnath Temple is a cave temple that is carved out of a single rock. It is dedicated to the god Shiva and is considered to be one of the most sacred Hindu temples in the world." },
  { title: "Angkor Wat", description: "Located in Cambodia, Angkor Wat is the largest Hindu temple in the world. It was built in the 12th century by the Khmer Empire and is dedicated to the god Vishnu." },{
    title:"Prambanan Temple",description:"Located in Indonesia, the Prambanan Temple is the largest Hindu temple complex in Indonesia. It was built in the 9th century by the Mataram Kingdom and is dedicated to the Trimurti (Brahma, Vishnu, and Shiva)."
  },{
    title:"Brihadeeswarar Temple",description:"Located in the southern Indian state of Tamil Nadu, the Brihadeeswarar Temple is an example of Chola Dynasty architecture. Dedicated to Lord Shiva, the temple is known for its towering vimana (tower) that is 216 feet tall. The temple complex is also home to a number of beautiful sculptures and murals."
  },{
    title: "Lingaraja Temple",
    description:"Located in the eastern Indian state of Odisha, the Lingaraja Temple is a UNESCO World Heritage Site. Dedicated to Lord Shiva, the temple is built in the Kalinga architectural style. The temple complex is spread over 5 acres and is home to a number of smaller shrines and monuments."
  }];
const Home = () => {
  return (
    <div>
      <div >
        <img src="src\components\assets\images\Vector 2.png" alt="image" className="w-full absolute"/>
      </div>
      <div className=" flex flex-row space-x-3.5">
        <HomeImages imagePaths={imagePaths} />
        <HomeText templeData={templeData} />
      </div>
      <div>
        <div className="m-5 relative grid grid-cols-2">
          <div className="m-5 shadow-2xl rounded px-5 md:px-5 bg-gray-100">
          <h1 className="ml-5 mt-2 text-5xl">OUR GOALS</h1>
          <p className="m-5 text-left text-lg">
          At our travel company, our mission is crystal clear: to make travel accessible and enjoyable for everyone, regardless of age or budget constraints. We are driven by the belief that memorable experiences shouldn &apos  t come with a hefty price tag. Our goal is to provide exceptional services at the most competitive prices in the industry. From providing comfortable lodging and delicious meals to ensuring refreshing bathing facilities, we prioritize the comfort and satisfaction of our travelers above all else. Additionally, as a token of appreciation for choosing us, we delight our customers with complimentary gifts, further enhancing their journey. Our dedicated team is committed to realizing this vision, ensuring that every traveler who embarks on a journey with us experiences the perfect blend of affordability, comfort, and unforgettable moments.
          </p>
          </div>
          <div >
          <HomeImages imagePaths={imagePaths2} margin={"m-4"}/>
          </div>
        </div>
      </div>
      <img src="src\components\assets\images\Vector 3.png" className="w-full"/>
    </div>
  );
};
export default Home;