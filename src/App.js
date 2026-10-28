import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="headerMain">
        <div className="header-left">
          <a>Shop</a>
          <a>Products</a>
          <a>Fertilizer</a>
          <a>Guide</a>
        </div>
        <div className="header-mid">
          <img src="./images/header-icon.png" />
        </div>
        <div className="header-right">
          <img src="./images/header-search.png" />

          <img src="./images/header-user.png" />

          <img src="./images/header-buy.png" />
        </div>
      </header>
      <div className="main-box">
        <div className="main-left">
        <span>Happiness blooms from within</span>
        <br></br>
        <span>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</span>
                <br></br>

        <button>Shop now</button>
        </div>
        <div className="main-right"></div>
      </div>
    </div>
  );
}

export default App;
