
import photoTwo from "../assets/photo-2.jpg";
import photoThree from "../assets/photo-3.jpg";

function Gallery() {
  return (
    <section className="gallery" aria-label="Photo gallery">
      <figure className="gallery-item">
        <img src={photoTwo} alt="12" />
      </figure>
      <figure className="gallery-item">
        <img src={photoThree} alt="13" />
      </figure>
    </section>
  );
}

export default Gallery;
