import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

class Html extends Component {
  render() {
    const { assets, component } = this.props;
    const content = component ? renderToString(component) : '';

    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8" />
          <title>YARIS</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* styles (will be present only in production with webpack extract text plugin) */}
          {Object.keys(assets.styles).map((style, key) =>
            <link
              key={key}
              href={assets.styles[style]}
              media="screen, projection"
              rel="stylesheet"
              type="text/css"
            />
          )}
        </head>

        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          {Object.keys(assets.javascript).map((script, key) =>
            <script src={assets.javascript[script]} key={key} />
          )}
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  assets: PropTypes.object,
  component: PropTypes.object,
};

export default Html;
