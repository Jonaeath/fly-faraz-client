import Banner from '../Banner/Banner';
import Services from '../../Services/Services';
import TicketAvailable from '../../TicketAvailable/TicketAvailable';


const Home = () => {
         
    return (
        <div>
            <Banner/>
            <TicketAvailable />
            <Services/>
        </div>
    );
};

export default Home;