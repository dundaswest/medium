import React from 'react';
import clap from '../clap.svg';
import twitter from '../twitter.svg';
import bookmark from '../bookmark-white.svg';
import facebook from '../facebook.svg';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sideBar">
        <div>
          <div id="clapNum">
            300
          </div>
        <img src={clap} id="clap" />
        </div>
        <div>
        <img src={twitter} id="twitter" />
        </div>
        <div>
        <img src={bookmark} id="bookmark" />
        </div>
        <div>
        <img src={facebook} id="facebook" />
        </div>

      </div>
    );
  }
}

export default Sidebar;
