import { Carousel } from "react-bootstrap";
import { BallTriangle } from 'react-loader-spinner';

const ImageCard = (props) => {
    const { loading, data, index, handleSelect } = props
    return (

        loading ?

            <div className="col-sm-5  circle" >
                <div className="d-flex flex-column justify-content-center align-items-center circle " style={{ height: `500px` }} >
                    <div className="row"><BallTriangle
                        heigth="100"
                        width="100"
                        color="#1e3c72"
                        arialLabel="loading-indicator"
                    /></div>
                    <div className="row"> FETCHING IMAGE .....</div>
                </div>
            </div>
            :
            <div className="col-sm-5">
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    {
                        data.map((x, i) => (
                            <Carousel.Item >
                                <img className="d-block w-100" src={x.url} alt="First slide" />
                                <Carousel.Caption>
                                    <h5>{x.date}</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                        )
                    }
                </Carousel>
            </div>
    );
}

export default ImageCard;