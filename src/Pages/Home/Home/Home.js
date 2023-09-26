import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import TicketAvailable from '../../TicketAvailable/TicketAvailable';
import Review from './Review/Review';


const Home = () => {
         
    return (
        <div>
            <Banner/>
            <TicketAvailable />
            <Services/>
            <Review/>
        </div>
    );
};

export default Home;