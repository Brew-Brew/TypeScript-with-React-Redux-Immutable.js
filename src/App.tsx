import * as React from 'react';
import Profile from './components/Profile';


class App extends React.Component {
  public render() {
    return (
      <div>
        <Profile
        name="이승규"
        job="풀스택"/>
      </div>
    );
  }
}

export default App;
