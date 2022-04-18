import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Footer/Footer';
import Feedbacks from '../Feedbacks/Feedbacks';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feedbacks></Feedbacks>
            <Footer></Footer>
        </div>

    );
};

export default Home;