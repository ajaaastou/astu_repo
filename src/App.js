// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import ImageUrl from './components/imageUrl';
import Name from './components/name';
import Price from './components/price';
import Description from './components/description';

const App = () => {
  const firstName = "Ajaa"; // Remplacez par votre prénom ou laissez vide

  return (

    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>

        <ImageUrl />
          <Name />
          <Price />
          <Description />
          

        </Card.Body>
      </Card>
      <h3>
        Bonjour{firstName ? `, ${firstName}` : ' !'}
      </h3>
      {firstName && <img src="https://via.placeholder.com/100" alt="Votre avatar" />}
    </div>
  );
};

export default App;