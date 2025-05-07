import comics from '../assets/comics'
import Button from './Button'
import ComicCard from './ComicCard'

const ListComics = () => {
    return (
        <div className="container wrap p-relative">
            <span id='series'>current series</span>
            <div className="comic-cards">
                {comics.map(comic => (
                    <ComicCard img={comic.thumb} series={comic.series} />
                ))}
            </div>
            <Button />
        </div>
    )
}

export default ListComics
