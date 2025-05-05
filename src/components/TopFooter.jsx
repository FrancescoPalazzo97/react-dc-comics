import DcComicsList from './DcComicsList'
import ShopList from './ShopList'
import DcList from './DcList'
import SitesList from './SitesList'

const TopFooter = () => {
    return (
        <div id="top-footer">
            <div className="container">
                <div className="col-50 d-flex py-30">
                    <div className="col-25">
                        <DcComicsList />
                        <ShopList />
                    </div>
                    <div className="col-25">
                        <DcList />
                    </div>
                    <div className="col-25">
                        <SitesList />
                    </div>
                </div>
                <div className="col-50">
                    <div id="logo-stamp">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFooter
