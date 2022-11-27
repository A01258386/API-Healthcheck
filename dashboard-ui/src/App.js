import logo from './logo.png';
import './App.css';

import EndpointAudit from './components/EndpointAudit'
import AppStats from './components/AppStats'
import EndpointHealth from './components/EndpointHealth';


function App() {

    const endpoints = ["audit-drive", "audit-fly"]

    const rendered_endpoints = endpoints.map((endpoint) => {
        return <EndpointAudit key={endpoint} endpoint={endpoint}/>
    })

    const rendered_health = endpoints.map((endpoint) => {
        return <EndpointHealth key={endpoint} endpoint={endpoint}/>
    })


    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" height="150px" width="400px"/>
            <div>
                <AppStats/>
                <h1>Audit Endpoints</h1>
                {rendered_endpoints}
            </div>
            <div>
                <h1>Health Endpoints</h1>
                {rendered_health[0]}
            </div>
        </div>
    );

}



export default App;
