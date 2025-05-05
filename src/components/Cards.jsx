const Cards = () => {
    return (
        <div id="cards">
            <div className="container">
                <ul>
                    {/* card 1 */}
                    <li className="card">
                        <a href="#">
                            <div className="image">
                                <img src="img/buy-comics-digital-comics.png" alt="" />
                            </div>
                            <span>digital comics</span>
                        </a>
                    </li>
                    {/* card 2 */}
                    <li className="card">
                        <a href="#">
                            <div className="image">
                                <img src="img/buy-comics-merchandise.png" alt="" />
                            </div>
                            <span>dc merchandise</span>
                        </a>
                    </li>
                    {/* card 3 */}
                    <li className="card">
                        <a href="#">
                            <div className="image">
                                <img src="img/buy-comics-subscriptions.png" alt="" />
                            </div>
                            <span>subscription</span>
                        </a>
                    </li>
                    {/* card 4 */}
                    <li className="card">
                        <a href="#">
                            <div className="image">
                                <img src="img/buy-comics-shop-locator.png" alt="" />
                            </div>
                            <span>comic shop locator</span>
                        </a>
                    </li>
                    {/* card 5 */}
                    <li className="card">
                        <a href="#">
                            <div className="image">
                                <img src="img/buy-dc-power-visa.svg" alt="" />
                            </div>
                            <span>dc power visa</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Cards
