import React from 'react';
import Footer from './Footer';

function Home(props) {
    return (
        <div>
            <div className="home">
            <main>
            <h1>Welcome to the Country App</h1>
            <p>Have a great time learning about different countries</p>
            </main>
            <div className="herobanner">
            <img src="./world-map-brown.png" />
        </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;