import React, { useEffect, useState, useContext, useRef } from "react";
import { Card,  Button, Modal} from "react-bootstrap";
// import Model1 from "../../../images/WhatPeoplesay/MitchCrites.jpeg";
// import Model22 from "../../../images/WhatPeoplesay/Gayatri.jpeg";
// import Model4 from "../../../images/WhatPeoplesay/model4.jpg";
import bgCorp from "../../../images/WhatPeoplesay/bgcorporate2.jpg";
// import { addImage } from "../../services/user-service";
import ReviewContext from "../../../context/reviews/ReviewContext";
import Slider from "react-slick";
// import bgCorp1 from '../../../images/WhatPeoplesay/bgcorporate.jpg'
// import EnjoyLife from '../../../images/wellness/happyguy.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BASE_URL } from "../../services/helper";

const Whatpeoplesay = () => {
  const { reviews, getreviews } = useContext(ReviewContext);
  const [show, setShow] = useState(false);
  const [addshow, setAddshow] = useState(false);
  const [data, setData] = useState({
    name:'',
    designation:'',
    review:'',
    image_location:'',
  });

  const ref = useRef(null);
  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setData(data)
    // ref.current.click()
    setShow(true);
  }
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    speed: 500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

  useEffect(() => {
    getreviews();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="d-flex"
      style={{
        backgroundImage: `url(${bgCorp})`,
        backgroundAttachment: "fixed",
        justifyContent: "center",
      }}
    >
      <div className="container m-0 p-4">
        <h1 className="mt-3 text-center">WHAT PEOPLE SAY</h1>
        {/* <CardGroup className='rounded' > */}
        <Modal size="md" dialogClassName="modal-90w" show={show} ref={ref} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Card
              className="shadow-lg mx-3 rounded-4"
              style={{ backgroundColor: "#86b9d1" }}
            >
              <Card.Img
                variant=""
                src={BASE_URL+'/uploads/' + data.image_location}
                className="opacity-50 rounded-circle  p-4 w-lg-40vw w-md-80vw"
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-4 fw-bold text-center">
                  {data.name}
                </Card.Title>
                <Card.Subtitle className="text-center fs-5">
                  {data.designation}
                </Card.Subtitle>
                <Card.Text
                  className="fs-6 p-3"
                  style={{ overflowY: "auto", overflowX: "hidden" }}
                >
                {data.review}
                </Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
        <Slider {...settings}>
          {reviews.map((data) => (
            <div key={data.name}>
              <Card
                key={data.name}
                className="shadow-lg mx-3 rounded-4"
                style={{ backgroundColor: "#86b9d1" }}
              >
                <Card.Img
                  variant="bottom"
                  src={BASE_URL+"/uploads/"+data.image_location}
                  className="opacity-50 p-2"
                  style={{ objectFit: "contain", borderRadius: "50%" }}
                />
                <Card.Body>
                  <Card.Title className="fs-4 fw-bold text-center">
                    {data.name}
                    <p></p>
                  </Card.Title>
                  <Card.Subtitle className="text-center fs-5">
                    {data.designation}
                  </Card.Subtitle>
                  <Card.Text
                    className="fs-6 p-3"
                    style={{ contain: "content", justifyContent: "center" }}
                  >
                    {data.review.toString().length > 200 ? (
                      <>
                        {data.review.toString().substring(0, 200) + " ...\n"}
                        <Button
                          variant="outline-dark"
                          size="sm"
                          onClick={()=>handleShow(data)}
                        >
                          Read more
                        </Button>
                      </>
                    ) : (
                      data.review
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
          {/* <div>
                    <Card className='shadow-lg mx-3 rounded-4' style={{ backgroundColor: '#86b9d1' }}>
                        <Card.Img variant="" src={Model22} className='opacity-50 rounded-circle  p-4' style={{ objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-bold text-center'>Gayatri</Card.Title>
                            <Card.Subtitle className='text-center fs-5'>Head, Air India Operations, Myanmar</Card.Subtitle>
                            <Card.Text className='fs-6 p-3' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                                " In this long memorable Journey from a couch potato to a svelte image it has been no mean feat.
                                Only a good coach will show you the way and guide you and definitely not youtube tutorials.
                                The results  speaks volumes about the good guidance and a strong belief in what we are doing "
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card className='shadow-lg mx-3 rounded-4' style={{ backgroundColor: '#86b9d1' }}>
                        <Card.Img variant="top" src={Model1} className='opacity-50 rounded-circle  p-4' style={{ objectFit: 'cover' }} />
                        <Card.Body>
                            <Card.Title className='fs-4 fw-bold text-center'>Mitch Crites</Card.Title>
                            <Card.Subtitle className='text-center fs-5'>IT employee</Card.Subtitle>
                            <Card.Text className='fs-6 p-3 text-justify' style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                                I am an overweight American man, 79 years of age, who has never done much sport or exercise throughout my whole life.  
                                Fortunately, I was introduced to Vikas Rathi, an expert and sensitive trainer in Delhi who specializes in working with the older generation. Vikas has completely changed my life.  For the last twenty years I’ve walked with a cane for balance and stability and I’ve thrown the cane away!  I now walk straight and confidently and far greater distances than before.  I am also more flexible and have greater mobility.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div> */}
        </Slider>
        {/* </CardGroup> */}
      </div>
    </div>
  );
};

export default Whatpeoplesay;
