import { useContext } from "react";
import About from "./About";
import ActiveContext from "./ActivePageContext";
import Book from "./Book";
import Home from "./Home";
import Navbar from "./Navbar";
import Upcomingtrip from "./Upcomingtrip";
function Page() {
  const ActiveBar = useContext(ActiveContext);
  const { activebar } = ActiveBar;
  const renderContent = (activebar) => {
  switch (activebar) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "UpcomingTrip":
      return <Upcomingtrip />;
    case "Book":
      return <Book />;
    default:
      return <Home />;
  }}
  const content = renderContent(activebar);
  return (
    <>
    <div>
<div>
  <Navbar/>
</div>
      {content}
    </div>
    </>
  );
}

export default Page;
