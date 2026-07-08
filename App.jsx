import { Link } from "react-router";
import routes from "./routes";

const styles = {
  gridContainer: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '16px',
  },
}

export default function App() {
  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>React Practice Calendar</h2>
      <div style={styles.gridContainer}>
        {Object.keys(routes).map(path => (
          <Link key={path} to={path} className="card">
            <div className="card-body">
              <div className="card-subtitle">
                {routes[path].title}
              </div>
              <div className="card-text">
                {routes[path].appName}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
