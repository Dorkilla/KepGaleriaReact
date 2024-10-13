export default function Kartya(props){
    return (
        <div className="card col-lg-4">
          <img src={props.jel.kep} alt={props.jel.cim} />
          <p>{props.jel.cim}</p>
        </div>
      );
}