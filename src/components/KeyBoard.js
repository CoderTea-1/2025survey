import { useRef } from "react";

const App = () => {
  const hiddenInputRef = useRef(null);

  const showKeyboard = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };

  return (

    <div className="container lg:hidden center">
      <button onClick={showKeyboard} className="btn ">
        Open Keyboard
      </button>
      <input
        type="text"
        ref={hiddenInputRef}
        style={{ opacity: 0, position: "absolute", left: "-9999px" }}
      />
    </div>
  );
};

export default App;
