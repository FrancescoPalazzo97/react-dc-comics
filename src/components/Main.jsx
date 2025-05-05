import Cards from './Cards'

const Main = () => {
    return (
        <main>
            <div className="content-link">
                <div className="container">
                    <a href="#">
                        <i class="fa-solid fa-arrow-right"></i> Content goes here <i class="fa-solid fa-arrow-left"></i>
                    </a>
                </div>
            </div>
            <Cards />
        </main>
    )
}

export default Main
