import "../scss/layouts/HomeCard.scss";
import Card from "../components/Card";
import author1 from "../assets/author/backnumber.jpg";
import author2 from "../assets/author/kenyozu.jpg";
import album1 from "../assets/album/attena.jpg";
import album2 from "../assets/album/NoIz.jpg";

const SearchCard = () => {
  const categories = [
    { titleName: "Podcast", image_url: album1 },
    {
      titleName: "Live Events",
      image_url: album2,
    },
    {
      titleName: "Made For You",
      image_url: album1,
    },
    {
      titleName: "New Releases",
      image_url: album2,
    },
    { titleName: "Summer", image_url: author1 },
    { titleName: "J-Tracks", image_url: author2 },
    { titleName: "K-pop", image_url: author1 },
    { titleName: "Pop", image_url: author2 },
  ];
  return (
    <>
      <div className="music-items">
        <header className="header-top">
          <h1>
            {/* {title} */}
            Browse all
          </h1>
        </header>
        <ul className="items">
          {categories.map((item, index) => {
            return (
              <Card
                typePage="search"
                key={index}
                titleName={item.titleName}
                image_url={item.image_url}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SearchCard;
