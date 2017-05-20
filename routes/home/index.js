import { h, Component } from "preact";
import style from "./style";

import Tweet from "../../components/tweet";
import {
  computeFrequencies,
  sortTermFrequencies
} from "../../services/transformer";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * created_at, text, user.screen_name
       */
      tweets: [],
      freq: {}
    };
    props.socket.on("tweet", data => {
      this.setState({
        tweets: [this._transformTweet(data)].concat(this.state.tweets),
        freq: computeFrequencies(this.state.freq, data)
      });
    });
  }

  render() {
    return (
      <div class={style.content}>
        <div class={style.tweets}>
          <h1>Tweets</h1>
          {this.state.tweets.map(t => <Tweet data={t} />)}
        </div>
        <div class={style.frequencies}>
          <h1>Freq</h1>
          <ul>
            {sortTermFrequencies(this.state.freq).map(arr => {
              return (
                <li key={arr[0]}>
                  <span class={style.badge}>{arr[1]}</span>
                  {arr[0]}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  _transformTweet(data) {
    return {
      created_at: data.created_at,
      text: data.text,
      user: data.user.screen_name
    };
  }
}
