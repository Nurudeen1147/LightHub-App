import Slideshow from "./slideShow";

const Slide = () => {
    const images = [
        require('./About us Page.png'),
        require('./Collaboration Page.png'),
        require('./Course page.png'),
        require('./Homepage.png'),
        require('./Reading page.png'),
        require('./Registration page.png'),
      // Add more image URLs here
    ];
  
    return (
      <div>
        <Slideshow images={images} interval={3000} />
      </div>
    );
  };
  
  export default Slide;