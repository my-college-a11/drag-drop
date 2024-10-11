import React from 'react';
import List from './components/List'; // Ensure the path is correct

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["Red", "Blue", "Green", "Purple", "Seagreen", "Lavender", "Navyblue"], // Corrected spelling of "Navyblue"
    };
  }

  render() {
    return (
      <div>
        <List colors={this.state.colors} /> {/* Render the List component */}
      </div>
    );
  }
}

export default App;