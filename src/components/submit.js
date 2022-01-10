import { Button } from "react-bootstrap";

const Submit = (props) => {
    const { getData, numValue } = props
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center mt-2 mb-2">
                <Button className="btn btn-block btn-warning shadow-none" onClick={() => getData(numValue)} >Check Out New Images  <i class="fa fa-location-arrow"></i></Button>
            </div>
        </>
    );
}

export default Submit;