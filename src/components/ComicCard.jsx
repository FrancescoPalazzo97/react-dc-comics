const ComicCard = ({ img, series }) => {
    return (
        <div className="comic-card">
            <div className="card-image">
                <img src={img} alt="" />
            </div>
            <p>{series}</p>
        </div>
    )
}

export default ComicCard
