import { useState } from "react";

const Quantity = () => {
  const [addButton, setButton] = useState(1);

  return (
    <>
      <button
        type="button"
        className={"add-button " + (addButton ? "active" : null)}
        onClick={() => setButton(0)}
      >
        ADD+
      </button>
      <div className={"quantity " + (addButton ? null : "active")}>
        <button type="button" className="decrease">
          -
        </button>
        <input type="number" className="quantity" />
        <button type="button" className="increase">
          +
        </button>
      </div>
    </>
  );
};

export default Quantity;
