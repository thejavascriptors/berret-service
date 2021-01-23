import React from 'react'
import Products from './productList/productList.jsx'
import styles from './app.modules.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      lastId: '0',
      firstId: '0',
      page: 1,
      pages: 1
    }
    this.nextPage = this.nextPage.bind(this)
    this.prevPage = this.prevPage.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:4357/relprod')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        products: data.docs,
        lastId: data.docs[4].prodNum,
        pages: data.total / 5
      })
    })
  }

  nextPage() {
    if(this.state.page === this.state.pages) {
      return
    }
    let that = this
    let id = this.state.lastId
    fetch(`http://localhost:4357/relprod/next/${id}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        products: data,
        lastId: data[4].prodNum,
        firstId: data[0].prodNum,
        page: that.state.page + 1
      })
    })
  }

  prevPage() {
    if(this.state.page === 1) {
      return
    }
    let that = this
    let id = this.state.firstId - 6
    fetch(`http://localhost:4357/relprod/prev/${id}`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        products: data,
        lastId: data[4].prodNum,
        firstId: data[0].prodNum,
        page: that.state.page - 1
      })
    })
  }

  render() {
    return (
      <div>
        <div className={styles.titlecontainer}>
          <h1 className={styles.title}>Products related to this item</h1>
          <span className={styles.pages}>Page {this.state.page} of {this.state.pages}</span>
        </div>
        <Products products={this.state.products} next={this.nextPage} prev={this.prevPage}/>
      </div>
    );
  }
}

export default App