import { Button } from "react-bootstrap";
import { Circles } from 'react-loader-spinner';

const Description = (props) => {
    const { loading, data, index, handleLikes, handleNext, handleRandom } = props
    return (
        loading ?

            <div className="col-sm-7  circle" >
                <div className="d-flex flex-column justify-content-center align-items-center circle " style={{height: `500px`}} >
                    <div className="row"> FINDING INFO .....</div>
                    <div className="row"><Circles arialLabel="loading-indicator" color="#c3073f"/></div>
                    <div className="row">PLEASE WAIT</div>
                </div>
            </div>
            :

            <div className="col-sm-7" >
                <div className="card-body">
                    <h5 className="card-title ti" style={{color:`#9a1750`}}>{data[index].title}</h5>
                    <p clasNames="card-title tex" style={{color:`#5d001e`}}>{data[index].explanation}</p>
                </div>
                <div className="fx ">
                    <div class="row">
                        <div className="col ">
                            <Button className="btn btn-block btn-danger shadow-none " onClick={() => handleLikes(index)}>
                                {/* Like Rendering  */}
                                {data[index].like === 0 ? <>Like </> : <>Liked  <i class="fa fa-heart"></i> </>}
                            </Button>
                        </div>
                        <div className="col">
                            <Button className="btn btn-block btn-info shadow-none" onClick={() => handleNext(index)}>Next <i class="fa fa-chevron-circle-right"></i> </Button>
                        </div>
                        <div className="col">
                            <Button className="btn btn-block btn-dark shadow-none" onClick={() => handleRandom()}>Random <i class="fa fa-random"></i> </Button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Description;