const ExponentFour = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.count}⁴</p>
    <p className="exponent-result">{props.count} * {props.count} * {props.count} * {props.count} = <span className="total">{props.count * props.count * props.count * props.count}</span></p>
  </div>
);

export default ExponentFour;