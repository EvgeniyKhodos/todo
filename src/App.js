import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: [
                {id: 0, title: 'Create todo-react app', done: false},
              {id: 1, title: 'Learn JavaScript', done: true},
              {id: 2, title: 'Find a good job', done: false}
            ]
        };
    }

    render() {
      const { tasks } = this.state; //


      return(
          <div className="App">
            <h1 className="top">Active tasks: {}</h1>
          </div>
      )
    }
}

export default App;
