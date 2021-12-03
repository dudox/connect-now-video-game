import React, { Component } from 'react'
import { connect } from 'react-redux'
import { feeds } from '../redux/actions/action'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { VideoCard } from '../components/VideoCard'
import Loader from 'react-loader-spinner'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feed: [...this.props.feed],
      loading: true,
      refresh: [...this.props.feed],
    }
  }

  componentDidMount() {
    console.log(this.state)
    setTimeout(() => {
      this.setState({ loading: false }) // showing the app
    }, 2000)
  }

  searchField = (e) => {
    let conditions = e.target.value
    var result = []
    result = this.props.feed.filter((el) => {
      return el.name.toLowerCase().indexOf(conditions.toLowerCase()) >= 0
    })
    this.setState((state) => ({
      feed: result,
    }))
  }

  sortByField = (e) => {
    console.log(e)
    var result = []
    result = this.props.feed.sort(function (a, b) {
      return a[e] == b[e] ? 0 : a[e] < b[e] ? -1 : 1
    })
    console.log(result)
    this.setState((state) => ({
      feed: result,
    }))
  }

  clear = () => {
    this.name = ''
    this.score = ''
    this.setState((state) => ({
      feed: this.state.refresh,
    }))
  }

  render() {
    return (
      <section className="row">
        <section className="col-12 col-lg-3 p-3 search-panel">
          <div className="panel">
            <div className="item pt-3 panel-header">Filter Results</div>
            <div className="item">
              <span>Name (contains)</span>
              <div className="search-field">
                <input
                  ref={(el) => (this.name = el)}
                  type="text"
                  name="name"
                  className="pl-2 pr-2 w-100 search mt-1"
                  onChange={(e) => this.searchField(e)}
                />
              </div>
            </div>

            <div className="item">
              <span>Minimum Score</span>
              <div className="search-field">
                <input
                  ref={(el) => (this.score = el)}
                  type="text"
                  name="rating"
                  className="w-100 search mt-1"
                  onChange={(e) => this.searchField(e)}
                ></input>
              </div>
            </div>
            <div className="item">
              <span>Order By</span>
              <div className="order-by mt-1">
                <div className="sort-direction">
                  <i className="bi bi-arrow-up"></i>
                </div>
                <DropdownButton
                  id="dropdown-basic-button"
                  className="w-100 d-block"
                  title="Select an option"
                  onSelect={(e) => this.sortByField(e)}
                >
                  <Dropdown.Item eventKey="first_release_date">First Release Date</Dropdown.Item>
                  <Dropdown.Item eventKey="rating">Score</Dropdown.Item>
                  <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="item clear">
              <button className="button center" onClick={() => this.clear()}>
                Clear
              </button>
            </div>
          </div>
        </section>
        <section className="col-12 col-lg-9 p-3 videos">
          <div className="content">
            {this.state.loading ? (
              <Loader
                className="center"
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              this.state.feed.map((info, key) => {
                return <VideoCard info={info} key={key} index={key} />
              })
            )}
          </div>
        </section>
      </section>
    )
  }
}
const mapStateToProps = (state) => ({
  feed: state.data.feed,
})

const mapDispatchToProps = (dispatch) => {
  return {
    feeds: () => dispatch(feeds()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
