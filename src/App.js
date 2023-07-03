import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './componentes/Header';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import imagen1 from './imagenes/1.jpg';
import imagen2 from './imagenes/2.jpg';
import imagen3 from './imagenes/3.jpg';
import imagen4 from './imagenes/4.jpg';
import imagen5 from './imagenes/5.jpg';
import imagen6 from './imagenes/6.jpg';
import imagen7 from './imagenes/7.jpg';
import imagen8 from './imagenes/8.jpg';
import imagen9 from './imagenes/9.jpg';

function App() {
  return (
    <div className="App">
      <Header title="Galería de Imágenes con React"/>
      <div class="row row-cols-1 row-cols-md-4 g-4 m-0">
      <Card
          imageUrl={imagen1}
          title="Imagen 1"
          description="Descripción de la imagen 1"
        />
         <Card
          imageUrl={imagen2}
          title="Imagen 2"
          description="Descripción de la imagen 2"
        />
         <Card
          imageUrl={imagen3}
          title="Imagen 3"
          description="Descripción de la imagen 3"
        />
         <Card
          imageUrl={imagen4}
          title="Imagen 4"
          description="Descripción de la imagen 4"
        />
         <Card
          imageUrl={imagen5}
          title="Imagen 5"
          description="Descripción de la imagen 5"
        />
         <Card
          imageUrl={imagen6}
          title="Imagen 6"
          description="Descripción de la imagen 6"
        />
         <Card
          imageUrl={imagen7}
          title="Imagen 7"
          description="Descripción de la imagen 7"
        />
         <Card
          imageUrl={imagen8}
          title="Imagen 8"
          description="Descripción de la imagen 8"
        />
         <Card
          imageUrl={imagen9}
          title="Imagen 9"
          description="Descripción de la imagen 9"
        />
       </div>
      <Footer/>
   </div>
 );
}

export default App;
