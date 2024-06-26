import Ampliyf from 'aws-amplify'
import awsConfig from './aws-exports'
import {AmplifyAuthenticator, AmplifySignOut} from  '@aws-amplify/ui-react'
import './App.css';

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <h1>Welcom to AWS Ampplify Dev</h1>
        <AmplifySignOut/>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;