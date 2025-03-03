import { React, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import ModelForm from "./components/ModelForm/ModelForm";

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [id, setId] = useState("");
  const [arr, setArr] = useState([]);
  const [num, setNum] = useState("");
  const [state, setState] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();
    setArr(body.arr);
    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  // получение GET маршрута с сервера Express, который соответствует GET из server.js
  useEffect(() => {
    callBackendAPI()
      .then((res) => setState(res.express))
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (num) {
      setArr((arr) => [...arr, num]);
      setNum("");
    }
  }

  function removeItemHandler(id) {
    setArr((arr) =>
      arr.filter((a, i) => {
        return i !== id;
      }),
    );
  }

  function editItemHandler(id) {
    setId(id);
  }

  function handleChange(event) {
    setNum(event.target.value);
  }

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <List
          state={modalOpened}
          setState={setModalOpened}
          onEdit={editItemHandler}
          onChange={handleChange}
          num={num}
          setNum={setNum}
          arr={arr}
          setArr={setArr}
          onSubmit={handleSubmit}
          onRemove={removeItemHandler}
        />
        {modalOpened && (
          <ModelForm
            state={modalOpened}
            setState={setModalOpened}
            num={num}
            setNum={setNum}
            id={id}
            arr={arr}
            element={arr[id]}
            setArr={setArr}
            onSubmit={handleSubmit}
            onEdit={editItemHandler}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
