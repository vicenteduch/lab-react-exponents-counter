const ExponentTwo = (props) => (
  
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}²</p>
    <p className="exponent-result">{props.count} * {props.count} = <span className="total">{props.count * props.count}</span></p>
  </div>
);

export default ExponentTwo;