import Navbar from "./componets/navbar/Navbar";
import Banner from "./componets/navbar/Banner";
import MainCategory1 from "./componets/navbar/MainCategory1";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="container mt-8">
        <section>
          <Banner />
        </section>
        <section className="main-category">
          <MainCategory1 />
        </section>
      </div>
    </div>
  );
}

export default App;
