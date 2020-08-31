import React from "react";
import "./search.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          type: "All",
          id: 1,
          value: ""
        },
        {
          type: "Movies",
          id: 2,
          value: "movie"
        },
        {
          type: "Series",
          id: 3,
          value: "series"
        },
        {
          type: "Episodes",
          id: 4,
          value: "episode"
        }
      ],
      searchTerm: "Lord",
      showMenu: false
    };
    this.menuRef = React.createRef();
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = () => {
    this.setState({
      showMenu: false
    });
  };

  render() {
    let { searchTerm, items, showMenu } = this.state;
    return (
      <div className="search-container">
        <div className="search-input-container">
          <input type="text" value={searchTerm} className="search-input" />
          <div
            className="search-dropdown"
            onClick={() => {
              this.setState(prevState => {
                return {
                  showMenu: !prevState.showMenu
                };
              });
            }}
          >
            dropdown
          </div>
          {showMenu ? (
            <div className="search-dropdown-menu" ref={this.menuRef}>
              {items.map(it => {
                return <div className="search-dropdown-item">{it.type}</div>;
              })}
            </div>
          ) : null}
        </div>
        <div className="search-button">Search</div>
      </div>
    );
  }
}
