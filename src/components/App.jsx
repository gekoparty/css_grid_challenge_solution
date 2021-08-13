import '../styles/index.scss';
import React from 'react';
import Recipes from './Recipes';
import sword from '../images/swc-sword.png';
import swordSvg from '../images/sword.svg';

const App = () => {
    return (
        <>
            <section className="hero"></section>
            <main>
                <section>
                    <h1>Hi there react webpck</h1>
                </section>
                <img src={sword} alt="sword" width="250"></img>
                <img src={swordSvg} alt="sword" width="250"></img>
                <Recipes></Recipes>
            </main>
            
        </>
    )
}

export default App;