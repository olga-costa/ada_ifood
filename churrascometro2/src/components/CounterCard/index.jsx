import "./styles.css";
export const CounterCard = ({ title, onIncrement, onDecrement, value }) => {
  return (
    <div className="counter_card">
      <div className="card_header">
        <h1>{title}</h1>
      </div>
      <div className="counter">
        <div onClick={onDecrement}>-</div>
        <h1>{value}</h1>
        <div onClick={onIncrement}>+</div>
      </div>
    </div>
  );
};
