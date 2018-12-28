import React, { Component } from "react";
import Search from "../content/search/Search.js";
import { connect } from "react-redux";

export class Searcher extends Component {
    
  componentDidMount() {
    console.log("checking for working");
  }

  switchToSearchPage = (searchText) => {
    if (window.location.href !== "/category") {
        window.location.replace("/category");
    }
  };

  render() {
    localStorage.setItem("path", this.props.location);
    console.log(this.props);
    const searchValue = "test"//this.props.match.params.search;
    return (
      <div>
        <Search
            {...this.props}
            searchValue={searchValue}
            switchToSearchPage={this.switchToSearchPage}
        />
        {/* this.props.loading ? (
          <Spinner />
        ) : this.props.showEmpty ? (
          <h5 className="tc mt-5 bg-light-gray">
            <i class="fa fa-frown-o" aria-hidden="true" /> Sorry no products
            found !!
          </h5>
        ) : ( this.props.loader ? <Spinner /> :  <HighestProduct location="search" />
        ) */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.loading.loading,
  // items: state.items.items.length,
  search: state.search,
  showEmpty : state.items.showEmpty,
  loader : state.items.loader
});

export default connect(
  mapStateToProps,
  null
)(Searcher);
