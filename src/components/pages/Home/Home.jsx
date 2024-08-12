import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import Premieres from '../../Premieres/Premieres'
import Appdownload from '../../AppDownload/Appdownload'

const Home = () => {

    
    return (
        <div>
            <Header />
            <ExploreMenu  />
            <Premieres />
            <Appdownload/>
        </div>
    )
}

export default Home