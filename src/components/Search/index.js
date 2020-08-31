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
          value: "",
          selected: true
        },
        {
          type: "Movies",
          id: 2,
          value: "movie",
          selected: false
        },
        {
          type: "Series",
          id: 3,
          value: "series",
          selected: false
        },
        {
          type: "Episodes",
          id: 4,
          value: "episode",
          selected: false
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

  handleClickOutside = event => {
    if (
      this.menuRef &&
      this.menuRef.current &&
      !this.menuRef.current.contains(event.target)
    ) {
      this.setState({
        showMenu: false
      });
    }
  };

  render() {
    let { items, showMenu } = this.state;
    let {
      handleSearch,
      searchTerm,
      setSelectedType,
      handleSearchClick
    } = this.props;
    return (
      <div className="search-container">
        <div className="search-input-container">
          <input
            type="text"
            value={searchTerm}
            className="search-input"
            onChange={handleSearch}
          />
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
                return (
                  <div
                    className={"search-dropdown-item"}
                    key={it.id}
                    onClick={e => {
                      let items = [...this.state.items];
                      items.forEach(it => (it.selected = false));
                      let itemClicked = items.find(item => it.id === item.id);
                      itemClicked.selected = !itemClicked.selected;
                      setSelectedType(it);
                      this.setState({
                        showMenu: false,
                        items
                      });
                    }}
                    style={
                      it.selected
                        ? { background: "#009ae0", color: "white" }
                        : {}
                    }
                  >
                    {it.type}
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div
          className="search-button"
          onClick={() => {
            handleSearchClick();
          }}
        >
          Search
        </div>
      </div>
    );
  }
}
