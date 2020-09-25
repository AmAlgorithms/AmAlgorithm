import React, { Component } from 'react';
import createGraph from '../graph-builder/graph-builder';
import dijkstra from '../algorithms/graph-algorithms/dijkstra';
class GraphAlgorithms extends Component {
  adjList;
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
      stop: false,
      nodePath: [],
    };
    this.adjList = {
      a: [
        [3, 'g'],
        [5, 'i'],
        [7, 'c'],
        [6, 'f'],
        [10, 'b'],
        [8, 'd'],
      ],
      b: [
        [10, 'a'],
        [8, 'f'],
        [11, 'e'],
        [4, 's'],
        [8, 'j'],
        [8, 'l'],
        [9, 'b'],
      ],
      c: [
        [5, 'k'],
        [2, 'h'],
        [9, 'e'],
        [7, 'f'],
        [7, 'a'],
      ],
      d: [
        [5, 'q'],
        [10, 'i'],
        [8, 'a'],
        [9, 'b'],
        [9, 'l'],
        [6, 't'],
      ],
      e: [
        [6, 'm'],
        [10, 'j'],
        [9, 's'],
        [11, 'b'],
        [6, 'f'],
        [9, 'c'],
        [10, 'k'],
      ],
      f: [
        [6, 'a'],
        [7, 'c'],
        [6, 'e'],
        [8, 'b'],
      ],
      g: [
        [3, 'h'],
        [10, 'k'],
        [4, 'i'],
        [3, 'a'],
      ],
      h: [
        [2, 'c'],
        [3, 'g'],
      ],
      i: [
        [8, 'q'],
        [10, 'd'],
        [5, 'a'],
        [4, 'g'],
        [14, 'k'],
        [7, 'n'],
      ],
      j: [
        [6, 'o'],
        [10, 'l'],
        [8, 'b'],
        [3, 's'],
        [10, 'e'],
        [11, 'm'],
        [15, 'target'],
      ],
      k: [
        [6, 'n'],
        [14, 'i'],
        [10, 'g'],
        [5, 'c'],
        [10, 'e'],
        [8, 'm'],
        [6, 'p'],
      ],
      l: [
        [4, 't'],
        [9, 'd'],
        [8, 'b'],
        [10, 'j'],
        [5, 'o'],
      ],
      m: [
        [8, 'k'],
        [6, 'e'],
        [11, 'j'],
        [6, 'target'],
        [7, 'p'],
      ],
      n: [
        [6, 'k'],
        [7, 'i'],
      ],
      o: [
        [5, 'l'],
        [6, 'j'],
      ],
      p: [
        [6, 'k'],
        [7, 'm'],
        [9, 'target'],
      ],
      q: [
        [3, 'source'],
        [8, 'i'],
        [5, 'd'],
      ],
      s: [
        [9, 'e'],
        [4, 'b'],
        [3, 'j'],
      ],
      t: [
        [6, 'd'],
        [4, 'l'],
      ],
      source: [[3, 'q']],
      target: [
        [9, 'p'],
        [6, 'm'],
        [15, 'j'],
      ],
    };
  }
  componentDidMount() {
    createGraph();
  }
  getPauseStatus = () => this.state.pause;
  getStopStatus = () => this.state.stop;

  reset = () => {
    Object.keys(this.adjList).forEach((e) => {
      let nodeElement = document.getElementById(e);
      nodeElement.classList.remove('node-visited');
      // let linkElement = document.getElementById(e + 'link');
      // if (linkElement) {
      //   linkElement.classList.remove('link-traversed');
      // }
    });
    // this.outputEl.removeChild(document.getElementById('nodeHistory'));
    // resetTraversalList(this.outputEl);
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ pause: false, stop: false });
            dijkstra(
              this.adjList,
              'source',
              'target',
              this.getPauseStatus,
              this.getStopStatus
            );
          }}
        >
          Dijkstra!
        </button>
        <button
          onClick={() => {
            this.setState({ pause: false, stop: true });
            this.reset();
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            this.setState({ pause: !this.state.pause });
          }}
        >
          {this.state.pause ? 'UnPause' : 'Pause'}
        </button>
      </div>
    );
  }
}

export default GraphAlgorithms;
