import React from "react";
import "./CardGrid.css";

// Import local images
import img1 from "../CardGridImg/c1.jpg";
import img2 from "../CardGridImg/c2.png";
import img3 from "../CardGridImg/c3.jpg";
import img4 from "../CardGridImg/c1.jpg";
import img5 from "../CardGridImg/c2.png";
import img6 from "../CardGridImg/c3.jpg";
import img7 from "../CardGridImg/c1.jpg";
import img8 from "../CardGridImg/c2.png";
import img9 from "../CardGridImg/c3.jpg";
import img10 from "../CardGridImg/c1.jpg";
import img11 from "../CardGridImg/c2.png";
import img12 from "../CardGridImg/c3.jpg";
import img13 from "../CardGridImg/c1.jpg";
import img14 from "../CardGridImg/c2.png";
import img15 from "../CardGridImg/c3.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
];

const cards = images.map((img, i) => ({
  id: i + 1,
  title: `Image ${i + 1}`,
  imageUrl: img,
  fileUrl: img, // for download
}));

const CardGrid = () => {
  return (
    <div className="card-grid-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} />
          <h3>{card.title}</h3>
          <a href={card.fileUrl} download className="download-btn">
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
