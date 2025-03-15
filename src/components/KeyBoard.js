import { useRef } from "react";
import "../scss/keyboard.scss";

const App = () => {
  const hiddenInputRef = useRef(null);

  const showKeyboard = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.focus();
    }
  };

  return (

    <div className="container sm:hidden center">
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
