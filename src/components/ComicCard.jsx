const ComicCard = ({ img, series }) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <p>{series}</p>
        </div>
    )
}

export default ComicCard
