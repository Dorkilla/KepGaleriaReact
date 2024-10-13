import Kartya from './Kartya.js';

export default function Jatekter(props){
    return (
        <div className="row">
          {props.KEPEKLISTA.map((elem, index) => {
            return <Kartya key={index} jel={elem} />
          })}
        </div>
      );
        
}