import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>Smart Refrigerator</h1>
          <p>IoT Monitoring & Control System</p>
        </div>

        <div className="connection">
          <span className="status-dot"></span>
          System Online
        </div>
      </header>

      <main>
        <section className="dashboard-grid">

          <div className="card">
            <h3>Temperature</h3>
            <div className="value">4.5°C</div>
            <p className="normal">Normal</p>
          </div>

          <div className="card">
            <h3>Humidity</h3>
            <div className="value">65%</div>
            <p className="normal">Normal</p>
          </div>

          <div className="card">
            <h3>Door</h3>
            <div className="value">Closed</div>
            <p className="normal">Secure</p>
          </div>

          <div className="card">
            <h3>Food Weight</h3>
            <div className="value">2.4 kg</div>
            <p className="normal">Available</p>
          </div>

        </section>

        <section className="control-section">
          <h2>Sensor Simulation</h2>
          <p>
            Manually change sensor values to simulate refrigerator conditions.
          </p>

          <div className="controls">

            <div className="control">
              <label>Temperature (°C)</label>
              <input type="number" defaultValue="4.5" />
            </div>

            <div className="control">
              <label>Humidity (%)</label>
              <input type="number" defaultValue="65" />
            </div>

            <div className="control">
              <label>Food Weight (kg)</label>
              <input type="number" defaultValue="2.4" />
            </div>

            <div className="control">
              <label>Current (A)</label>
              <input type="number" defaultValue="1.8" />
            </div>

            <div className="control">
              <label>Door</label>

              <select defaultValue="closed">
                <option value="closed">Closed</option>
                <option value="open">Open</option>
              </select>
            </div>

          </div>

          <button className="update-button">
            Update Sensors
          </button>

        </section>
      </main>
    </div>
  );
}

export default App;