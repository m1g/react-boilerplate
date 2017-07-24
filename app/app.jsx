var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style-loader!css-loader!applicationStyles')

// This allows react to render in the browser. It's attached to the Id 'app' in the index
  ReactDOM.render(
    // history: Tells React we want a # followed by the path to maintain routes for the app
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Weather}/>
        <Route path="about" component={About}/>
        <Route path="examples" component={Examples}/>
      </Route>
    </Router>, // References the Main class
    document.getElementById('app')
  );
