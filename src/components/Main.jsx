import Cards from './Cards'
import ListComics from './ListComics'
import Jumbo from './Jumbo'

const Main = () => {
    return (
        <main>
            <Jumbo />
            <div className="content-link">
                <ListComics />
            </div>
            <Cards />
        </main>
    )
}

export default Main
