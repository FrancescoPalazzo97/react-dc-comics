import comics from '../assets/comics'
import ComicCard from './ComicCard'

const ListComics = () => {
    return (
        <div className="container">
            <div className="comic-cards">
                <ComicCard img={comics[0].thumb} series={comics[0].series} />
                <ComicCard img={comics[1].thumb} series={comics[1].series} />
                <ComicCard img={comics[2].thumb} series={comics[2].series} />
                <ComicCard img={comics[3].thumb} series={comics[3].series} />
                <ComicCard img={comics[4].thumb} series={comics[4].series} />
                <ComicCard img={comics[5].thumb} series={comics[5].series} />
                <ComicCard img={comics[6].thumb} series={comics[6].series} />
                <ComicCard img={comics[7].thumb} series={comics[7].series} />
                <ComicCard img={comics[8].thumb} series={comics[8].series} />
                <ComicCard img={comics[9].thumb} series={comics[9].series} />
                <ComicCard img={comics[10].thumb} series={comics[10].series} />
                <ComicCard img={comics[11].thumb} series={comics[11].series} />
            </div>
        </div>
    )
}

export default ListComics
