const FollowUs = () => {
    return (
        <div id="follow-us" className="d-flex">
            <div className="col-30 d-flex align-items-center">
                <span>follow us</span>
            </div>
            <div className="col-70">
                <ul className="d-flex">
                    <li>
                        <img src="/img/footer-facebook.png" alt="" className="img-fluid" />
                    </li>
                    <li>
                        <img src="/img/footer-twitter.png" alt="" className="img-fluid" />
                    </li>
                    <li>
                        <img src="/img/footer-youtube.png" alt="" className="img-fluid" />
                    </li>
                    <li>
                        <img src="/img/footer-pinterest.png" alt="" className="img-fluid" />
                    </li>
                    <li>
                        <img src="/img/footer-periscope.png" alt="" className="img-fluid" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FollowUs
