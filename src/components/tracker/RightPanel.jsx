import Chats from "../../pages/tracker/Chats";
import Table from "../../pages/tracker/Table";
import Tiles from "../../pages/tracker/Tiles";
import UnderConstruction from "../../pages/tracker/UnderConstruction";
import CountryWise from "../../pages/countryWise/CountryWise";

const RightPanel = ({ activeScreen }) => {
  switch (activeScreen) {
    case "chats":
      return <Chats />;

    case "table":
      return <Table />;

    case "tiles":
      return <Tiles />;

    case "country-wise":
      return <CountryWise />

    default:
      return <UnderConstruction />;
  }
};

export default RightPanel;
