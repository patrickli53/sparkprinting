import './styles.css'

const Banner = ({ images, speed = 9000 }) => {
    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="image1" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="image1" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img className="image1" src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
export default Banner;