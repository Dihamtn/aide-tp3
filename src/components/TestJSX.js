import '../css/TestJSX.css';
import picture from '../pictures/transformers.jpg'

function TestJSX() {
  return (
  <div className="TestJSX">
    <div className='title'>
      <h1>Transformers</h1>
    </div>
      <div className='picture'>
        <img alt='' src={picture} width="300"/>
      </div>
      <div className='description'>
        <h4>
          Une guerre sans merci oppose depuis des temps immémoriaux deux races de robots extraterrestres : les Autobots et les cruels Decepticons. Son enjeu : la maîtrise de l'univers...
          Dans les premières années du 21ème siècle, le conflit s'étend à la Terre, et le jeune Sam Witwicky devient, à son insu, l'ultime espoir de l'humanité. Semblable à des milliers d'adolescents, Sam n'a connu que les soucis de son âge : le lycée, les amis, les voitures, les filles...
          Entraîné avec sa nouvelle copine, Mikaela, au coeur d'un mortel affrontement, il ne tardera pas à comprendre le sens de la devise de la famille Witwicky : "Sans sacrifice, point de victoire !"
        </h4>
      </div>
  </div>
  );
}

export default TestJSX;