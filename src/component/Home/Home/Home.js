import React from 'react';
import Header from '../Header/Header';
import Services from './../Services/Services';
import Child from './../Child/Child';

const Home = () => {
    return (
        <div>
            <Header></Header>           
            <Services></Services>
            <Child></Child>
        </div>
    );
};

export default Home;