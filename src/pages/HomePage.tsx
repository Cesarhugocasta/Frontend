// src/pages/HomePage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import fashionImage from '../img/fashion.png';
import img from '../img/img.png';
import '../css/HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="header">
        <img src={logo} alt="FashionGuru Logo" className="logo" />
        <h1>Bienvenido al mundo de la moda personalizada</h1>
      </header>
      <section className="description">
        <p>
          Únase a nuestra comunidad de moda y experimente la última tecnología en compras y asesoramiento de moda.
          En FashionGuru, nuestra misión es proporcionar una experiencia de compra en línea sin problemas y altamente personalizada
          que se adapte perfectamente a su estilo y preferencias de moda.
        </p>
        <img src={fashionImage} alt="Fashion" className="fashion-image" />
      </section>
      <section className="services">
        <h2>Servicios que ofrecemos</h2>
        <ul>
          <li><strong>Asesoramiento Personalizado:</strong> Nuestros estilistas profesionales lo ayudarán a crear un guardarropa que refleje su personalidad y estilo únicos.</li>
          <li><strong>Virtualización de prueba:</strong> Nuestra tecnología de prueba virtual le permite ver cómo se verá una prenda en usted antes de hacer una compra.</li>
          <li><strong>Comunidad de Estilo:</strong> Únase a nuestra comunidad de estilo en línea y conéctese con otros entusiastas de la moda para compartir ideas, inspiración y consejos.</li>
          <li><strong>Compras en línea personalizadas:</strong> Nuestra innovadora plataforma de comercio electrónico personalizada le ayuda a encontrar fácilmente las prendas que mejor se adaptan a sus necesidades y preferencias únicas.</li>
        </ul>
        <img src={img} alt="img" className="fashion-image" />
      </section>
      <footer className="footer">
        <Link to="/cliente">Iniciar sesión como Cliente</Link>
        <br />
        <Link to="/asesor">Iniciar sesión como Asesor</Link>
      </footer>
    </div>
  );
};

export default HomePage;
