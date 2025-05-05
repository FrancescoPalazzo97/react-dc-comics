import DcComicsList from './DcComicsList'
import ShopList from './ShopList'
import DcList from './DcList'

const TopFooter = () => {
    return (
        <div id="top-footer">
            <div className="container">
                <div className="col-50 d-flex">
                    <div className="col-25">
                        <DcComicsList />
                        <ShopList />
                    </div>
                    <div className="col-25">
                        <DcList />
                    </div>
                    <div className="col-25">

                    </div>
                </div>
                <div className="col-50"></div>
            </div>
        </div>
    )
}

export default TopFooter
