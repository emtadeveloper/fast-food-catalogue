import { useEffect, useState } from "react";
import mitt from "mitt";

// در جاهای دیگه باید استفاده بکنیم
export const emmiter = mitt();

// کامپوننت جدا
export const ParentComponent = () => {
  return (
    <>
      <Buttons />
      <Counter />
    </>
  );
};

// کامپوننت جدا
export const Buttons = () => {
  const onIncrementCounter = () => {
    emmiter.emit("inc");
  };
  const onIDerementCounter = () => {
    emmiter.emit("dec");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>+</button>
      <button onClick={onIDerementCounter}>_</button>
    </div>
  );
};

// کامپوننت جدا
export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };
    const onDecrement = () => {
      setCount((count) => count - 1);
    };
    emmiter.on("inc", onIncrement);
    emmiter.on("dec", onDecrement);

    return () => {
      emmiter.off("inc", onIncrement);
      emmiter.off("dec", onDecrement);
    };
  }, []);

  return <div># : {count}</div>;
};

const Test = (props) => {
  return <ParentComponent />;
};

export default Test;
