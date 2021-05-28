const fsPromise = require('fs/promises');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

console.log(renderToStaticMarkup(Hello()));
