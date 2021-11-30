import React from 'react';
import Footer from './Footer';

const About = () => {
    return (
        <div className="about">
            <main>
            <h2>About the Country App</h2>
            <p>Building this app has been a part of my Full Stack Developer -studies at Business College Helsinki.</p>
            <p>The main object of this project has been learning to use several APIs at the same time and how to display the data.</p>
            <p>However, at the same time I wanted to create an interactive app for anyone wishing to learn more about countries all over the world.</p>
            </main>
            <Footer />
        </div>
    );
};

export default About;