const Card = () => {
    return (
        <div className="card-container">
            <div className="img-container">{/* <img src="" alt="" /> */}</div>
            <div className="info-container">
                <h3>TITLE</h3>
                <p>DESCRIPTION</p>
                <div className="tag-continer"></div>
            </div>
        </div>
    );
};

export default Card;
