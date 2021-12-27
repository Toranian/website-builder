import Card from './components/Card';

function App() {
  return (
    <div>

      <div className="container-full">
        <nav className="navbar container-medium">

          <div className="navbar-brand">
            Large Title
          </div>
          <ul className="navbar-elements">
            <a>
              Home
            </a>
            <a>
              About
            </a>
            <a>
              Contact
            </a>
          </ul>
        </nav>

      </div>
      <div className="center-container">
        <div className="action-button-large">
          Button!
        </div>
        <div className="action-button-medium">
          Button!
        </div>
        <div className="action-button-small">
          Button!
        </div>
        <div className="secondary-button-large">
          Button!
        </div>
        <div className="secondary-button-medium">
          Button!
        </div>
        <div className="secondary-button-small">
          Button!
        </div>
        {/* <div className="card">
          <div className="card-container">
            <img className="card-img" src="https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80" />
            <div className="text-large primary-text font-bold">
              Card Header
            </div>
            <div className="text-medium secondary-text">
              lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="secondary-button">View</div>
          </div>
        </div> */}
        <Card/>
      </div>
    </div>
  );
}

export default App;
