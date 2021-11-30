import React from 'react';
import Footer from './Footer';

function Home(props) {
    return (
        <div>
            <div className="home">
            <main>
            <h1>Country App</h1>
            <div className="mapImage">
            <p>I'm so happy you have found your way to my Country App, I hope you enjoy your stay!</p>
            <p>At current times when traveling is not as easy, it is fun to gain some new knowledge about other countries.</p>
            </div>
            </main>
            </div>
            <Footer />
        </div>
    );
}

export default Home;