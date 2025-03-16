import "../scss/layouts/HomeCard.scss";
import Card from "../components/Card";
import author1 from "../assets/author/backnumber.jpg";
import author2 from "../assets/author/kenyozu.jpg";
import album1 from "../assets/album/attena.jpg";
import album2 from "../assets/album/NoIz.jpg";

const HomeCard = () => {
  const items = {
    Popular_Artists: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: author2,
      },
      {
        name: "back number",
        type: "Artist",
        image_url: author1,
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: author2,
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: author1,
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: author2,
      },
      {
        name: "Yanbi",
        type: "Artist",
        image_url: author1,
      },
    ],
    Popular_Albums: [
      {
        musicName: "ANTENNA",
        artist: "Mrs. GREEN APPLE",
        image_url: album1,
      },
      {
        musicName: "No.0 ~ring~",
        artist: "Number_j",
        image_url: album2,
      },
      {
        musicName: "strobo",
        artist: "Vaundy",
        image_url: album1,
      },
      {
        musicName: "Happy Ending",
        artist: "Yorushika",
        image_url: album2,
      },
      {
        musicName: "SUPER REAL ME",
        artist: "ILLIT",
        image_url: album1,
      },
      {
        musicName: "REAL ME",
        artist: "ranbi",
        image_url: album2,
      },
    ],
    Popular_Radio: [
      {
        name: "Mrs. GREEN APPLE",
        type: "Artist",
        image_url: album1,
      },
      {
        name: "back number",
        type: "Artist",
        image_url: album2,
      },
      {
        name: "Vaundy",
        type: "Artist",
        image_url: album1,
      },
      {
        name: "Yorushika",
        type: "Artist",
        image_url: album2,
      },
      {
        name: "YOASOBI",
        type: "Artist",
        image_url: album1,
      },
      {
        name: "YO",
        type: "Artist",
        image_url: album2,
      },
    ],
  };
  return (
    <>
      {Object.entries(items).map(([title, info]) => (
        <div className="music-items" key={title}>
          <header className="header-top">
            <h1>
              <a href="#">{title.replace(/_/g, " ")}</a>
            </h1>

            <span>
              <a href="">Show all</a>
            </span>
          </header>
          <ul className="items">
            {info.map((item, index) => {
              return (
                <Card
                  typePage="home"
                  title={title}
                  key={index}
                  musicName={item.musicName}
                  name={item.name}
                  artist={item.artist}
                  image_url={item.image_url}
                  type={item.type}
                />
              );
            })}
          </ul>
        </div>
      ))}
    </>
  );
};

export default HomeCard;
