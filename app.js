// The array that is storing the information we want to display:
const Names = [
    {first: 'Bob', last: 'Smith'},
    {first: 'Sam', last: 'Spade'},
    {first: 'Carol', last: 'Alexander'},
    {first: 'Sarah', last: 'Jones'}
  ]
  
  // Our child component that will display our names:
  const Child = React.createClass({
    render: function() {
      return (
        <div>
          <p>{this.props.first} {this.props.last}</p>
        </div>
      );
    }
  });
  
  
  const Parent = React.createClass({
    getInitialState: function() {
      return {names: Names};
    },
    render: function() {
      const names = this.state.names.map((name, i) => {
        return (
          <Child
            key={i}
            first={name.first}
            last={name.last}
          />
        );
      });
     return (
      <div>
         {names}
      </div>
     );
    }
  });
  
  ReactDOM.render(<Parent />, document.getElementById('app'));