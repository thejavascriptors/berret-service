import React from 'react'
import Products from './products.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:4357/relprod')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        products: data
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Product List</h1>
        <Products products={this.state.products}/>
      </div>
    );
  }
}

export default App