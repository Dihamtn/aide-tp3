import '../css/AffichageBoucle.css';

let fruit = ['Une fraise', 'Un melon', 'Une pastèque','Un kiwi']

function AffichageBoucle() {
    return (
        <div className="AffichageBoucle">
            {fruit.map((fruit, index) => (
        <div>
            Je vous propose le fruit suivant : {fruit} 
        </div>
    ))}
    </div>
)}


export default AffichageBoucle;