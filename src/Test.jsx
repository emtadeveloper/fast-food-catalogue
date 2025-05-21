// ======================================================================================================================

// import React, { useState } from "react";

// export default function Test() {
//   const [count, setCount] = useState(0);

//   const handleClickWithBug = () => {
//     // استفاده از count (ممکنه مقدار قدیمی باشه)
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//   };

//   const handleClickCorrect = () => {
//     // استفاده از prev => prev + 1
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Count: {count}</h2>

//       <button onClick={handleClickWithBug}>افزایش ۳ تایی (با باگ)</button>

//       <button onClick={handleClickCorrect} style={{ marginLeft: 10 }}>
//         افزایش ۳ تایی (درست)
//       </button>
//     </div>
//   );
// }

// ======================================================================================================================

// import React, { useRef, useState } from "react";

// function Test() {
//   const [count, setCount] = useState(0);
//   const timerId = useRef(null);

//   const startTimer = () => {
//     if (!timerId.current) {
//       timerId.current = setInterval(() => setCount((prev) => prev + 1), 1000);
//     }
//   };

//   const stopTimer = () => {
//     clearInterval(timerId.current);
//     timerId.current = null;
//   };

//   return (
//     <div>
//       <h1>Count : {count}</h1>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//     </div>
//   );
// }

// export default Test;

// =======================================================================================================================

// import React, { useEffect, useRef, useState } from "react";

// function Test() {
//   const [count, setCount] = useState(0);
//   const preCount = useRef(null);

//   useEffect(() => {
//     preCount.current = count;
//   }, [count]);

//   return (
//     <div>
//       <h1>current Count : {count}</h1>
//       <h1>Previous Count : {preCount.current}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Test;

// =======================================================================================================================

// import React, { useRef, useState } from "react";

// function Test() {
//   const [count, setCount] = useState(0);
//   const preCount = useRef(null);

//   useEffect(() => {
//     preCount.current = count;
//   }, []);

//   return (
//     <div>
//       <h1>current Count : {count}</h1>
//       <h1>Previous Count : {preCount.current}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Test;

// =======================================================================================================================
// =======================================================================================================================

// debounce with useRef

// import { useState, useRef } from "react";

// function App() {
//   const [value, setValue] = useState("");
//   const timeoutRef = useRef(null);

//   const handleChange = (e) => {
//     const inputValue = e.target.value;

//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     timeoutRef.current = setTimeout(() => {
//       setValue(inputValue);
//     }, 500);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <p>debounced value : {value}</p>
//     </div>
//   );
// }

// export default App;
// =======================================================================================================================

// Scroll with Ref

// import { useRef } from "react";

// function App() {
//   const sectionRef = useRef(null);

//   const scrollToSection = () => {
//     sectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div>
//       <button onClick={scrollToSection}> Scroll into Section </button>
//       <div style={{ height: "100vh", background: "red" }}>Space</div>
//       <div ref={sectionRef} style={{ height: "100vh", background: "blue" }}>
//         Target Section
//       </div>
//     </div>
//   );
// }

// export default App;

// =======================================================================================================================

// import React, { useState, useMemo } from "react";

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
//   const [value, setValue] = useState("");

//   const total = useMemo(() => {
//     console.log("init");
//     return numbers.reduce((acc, numbers) => acc + numbers, 0);
//   }, [numbers]);

//   return (
//     <div>
//       <h2>total sum : {total}</h2>
//       <button onClick={() => setValue("value")}> Set Value </button>
//       <button onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 10)])}> Add random number</button>
//     </div>
//   );
// }

// export default App;

// =======================================================================================================================

// import React, { useMemo } from "react";

// function App({ apiData }) {
//   const processedData = useMemo(() => {
//     return apiData.map((item) => ({
//       ...item,
//       fullName: `${item.firstName} ${item.lastName}`, // اصلاح شد
//     }));
//   }, [apiData]);

//   return (
//     <div>
//       <h2>Processed Data:</h2>
//       <ul>
//         {processedData.map((item, index) => (
//           <li key={index}>{item.fullName}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// // =======================================================================================================================

// import { useCallback, useEffect, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   const handleKeyPress = useCallback((event) => {
//     console.log("handleKeyPress");
//     if (event.key === "Enter") {
//       setCount((prev) => prev + 1);
//     }
//   }, []);

//   console.log("handleKeyPress");

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyPress);
//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [handleKeyPress]);

//   return (
//     <div>
//       <h1>Press Enter to Increment : {count}</h1>
//       <h1>Number : {number}</h1>
//       <button onClick={() => setNumber(number + 1)}>Click</button>
//     </div>
//   );
// }

// export default App;

// // // =======================================================================================================================

// import { useCallback, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [factor, setFactor] = useState(2);

//   const calculateProduct = useCallback(() => {
//     return count * factor;
//   }, [count, factor]);

//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <h1>factor : {factor}</h1>
//       <h2>Product : {calculateProduct()}</h2>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
//       <button onClick={() => setFactor((prev) => prev - 1)}>Increment Factor</button>
//     </div>
//   );
// }

// export default App;

// =======================================================================================================================

// import { useCallback, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [factor, setFactor] = useState(2);

//   const calculateProduct = useCallback(() => {
//     return count * factor;
//   }, [count, factor]);

//   return (
//     <div>
//       <h1>count : {count}</h1>
//       <h1>factor : {factor}</h1>
//       <h2>Product : {calculateProduct()}</h2>
//       <button onClick={() => setCount((prev) => prev + 1)}>Increment Count</button>
//       <button onClick={() => setFactor((prev) => prev - 1)}>Increment Factor</button>
//     </div>
//   );
// }

// export default App;

// // =======================================================================================================================

// import React, { useCallback, useState } from "react";

// const ExpensiveComponent = React.memo(({ calculateSum }) => {
//   return (
//     <div>
//       <button onClick={calculateSum}>Calculate Me</button>
//     </div>
//   );
// });

// function App() {
//   const [numbers, setNumbers] = useState([1, 2, 3]);
//   const variable = Math.floor(Math.random() * 10);

//   const calculateSum = useCallback(() => {
//     const sum = numbers.reduce((total, num) => total + num, 0);
//     alert(sum);
//   }, [numbers]);

//   return (
//     <div>
//       <h1>NUMBERS : {numbers.join(", ")}</h1>
//       <ExpensiveComponent calculateSum={calculateSum} />
//       <button onClick={() => setNumbers((prev) => [...prev, variable])}>Add Random Number</button>
//     </div>
//   );
// }

// export default App;

// =======================================================================================================================

// import React, { useCallback, useMemo, useState } from "react";

// function App() {
//   const [items, setItems] = useState([4, 2, 42, 5, 7, 1, 3, 2, , 56, 575, 43, 334, , 6, 234, 654]);

//   const [filter, setFilter] = useState(1);

//   const variable = Math.floor(Math.random() * 10);

//   const filteredItems = useMemo(() => {
//     return items.filter((item) => item > filter);
//   });

//   const addItem = useCallback(() => {
//     setItems((prev) => [...prev, variable]);
//   });

//   return (
//     <div>
//       <h1>Items : {filteredItems.join(", ")}</h1>
//       <h1>Filter : {filter}</h1>
//       <button onClick={addItem}>Add Item </button>
//       <button onClick={() => setFilter((prev) => prev + 1)}>SET Filter</button>
//     </div>
//   );
// }

// export default App;

// // =======================================================================================================================

// import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from "react";

// function App() {
//   const [width, setWidth] = useState(100);

//   useLayoutEffect(() => {
//     const element = document.getElementById("resizeable-box");
//     if (element) {
//       element.style.width = `${width}px`;
//     }
//   }, [width]);

//   return (
//     <div>
//       <div id="resizeable-box" style={{ backgroundColor: "red", height: "50px" }}>
//         Box
//       </div>
//       <button onClick={() => setWidth(width + 10)}>Increase Width</button>
//     </div>
//   );
// }

// export default App;

// =======================================================================================================================

import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (event) => {
    const value = event.target.value;
    setInput(value);

    startTransition(() => {
      const results = Array(10000)
        .fill()
        .map((_, i) => `Result for "${value}"  ${i + 1}`);
      setSearchResults(results);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleSearch} placeholder="search ...." />
      {isPending ? (
        <p>pending results ...</p>
      ) : (
        <ul>
          {searchResults.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
