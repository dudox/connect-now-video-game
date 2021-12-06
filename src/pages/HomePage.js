import React, { Component } from 'react'
import { connect } from 'react-redux'
import { feeds } from '../redux/actions/action'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { VideoCard } from '../components/VideoCard'
import Loader from 'react-loader-spinner'
import { filtered, sortasc, ucfirst, range } from '../utils'

const initialState = {
  title: 'Choose an option',
  name: '',
  score: '',
  sort: '',
  icon: 'bi bi-arrow-up',
  loading: true,
}

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...initialState,
    }
  }

  componentDidMount() {
    this.props.feeds()
    setTimeout(() => {
      this.setState({ loading: false })
    }, 2000)
  }

  searchField = (data, key, value) => {
    return filtered(data, key, value)
  }

  searchRange = (data, key, value) => {
    return range(data, key, value)
  }

  sortByField = (data, value) => {
    return sortasc(data, value)
  }

  clear = () => {
    // reset state
    this.setState({ ...initialState, filteredData: this.props.feed })
  }

  render() {
    
    let { name, loading, score, sort, icon } = this.state
    let filteredData = Object.values(this.props.feed)
    if (name) {
      filteredData = this.searchField(filteredData, 'name', name)
    }
    if (score) {
      filteredData = this.searchRange(filteredData, 'score', score)
    }
    if (sort) {
      filteredData = this.sortByField(filteredData, sort)
    }

    return (
      <section className="row">
        <section className="col-12 col-lg-3 p-3 search-panel">
          <div className="panel">
            <div className="item pt-3 panel-header">Filter Results</div>
            <div className="item">
              <span>Name (contains)</span>
              <div className="search-field">
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="pl-2 pr-2 w-100 search mt-1"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
            </div>

            <div className="item">
              <span>Minimum Score</span>
              <div className="search-field">
                <input
                  type="text"
                  name="rating"
                  className="pl-2 pr-2 w-100 search mt-1"
                  value={this.state.score}
                  onChange={(e) => this.setState({ score: e.target.value })}
                ></input>
              </div>
            </div>
            <div className="item">
              <span>Order By</span>
              <div className="order-by mt-1">
                <div className="sort-direction">
                  <i className={`${icon}`}></i>
                </div>
                <DropdownButton
                  id="dropdown-basic-button"
                  className="w-100 d-block"
                  title={this.state.title}
                  onSelect={(e) => this.setState({ sort: e, title: ucfirst(e) })}
                  onToggle={(e) =>
                    e
                      ? this.setState({ icon: 'bi bi-arrow-down' })
                      : this.setState({ icon: 'bi bi-arrow-up' })
                  }
                >
                  <Dropdown.Item eventKey="first_release_date">First Release Date</Dropdown.Item>
                  <Dropdown.Item eventKey="rating">Score</Dropdown.Item>
                  <Dropdown.Item eventKey="name">Name</Dropdown.Item>
                </DropdownButton>
              </div>
            </div>
            <div className="item clear">
              <button type="reset" className="button center" onClick={() => this.clear()}>
                Clear
              </button>
            </div>
          </div>
        </section>
        <section className="col-12 col-lg-9 p-3 videos">
          <div className="content">
            {loading ? (
              <Loader
                className="center"
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : filteredData ? (
              filteredData.map((info, key) => {
                return <VideoCard info={info} key={key} index={key} />
              })
            ) : null}
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
