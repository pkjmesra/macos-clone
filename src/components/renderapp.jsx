import React, { lazy, Suspense } from 'react';
import Frame from 'react-frame-component';
import InProgress from './inprogress';

// eslint-disable-next-line import/no-unresolved
const Portfolio = lazy(() => import('PORTFOLIO/Portfolio'));
// eslint-disable-next-line import/no-unresolved
const VSCode = lazy(() => import('VSCODE/VSCODE'));
// eslint-disable-next-line import/no-unresolved
const Insta = lazy(() => import('INSTA/Insta'));
// eslint-disable-next-line import/no-unresolved
const Iterm = lazy(() => import('ITERM/Iterm'));

const renderApp = (app) => {
  switch (app) {
    case 'app':
      return <h1>{app}</h1>;
    case 'finder':
      // eslint-disable-next-line no-case-declarations
      let devCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="http://localhost:8080/portfolio.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <style>
      html::-webkit-scrollbar{
        display:none;}</style>
      </head><body><div></div></body></html>`;

      // eslint-disable-next-line no-case-declarations
      let prodCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
      <link rel="stylesheet" type="text/css" href="https://strek.netlify.app/portfolio.css">
      <style>
      html::-webkit-scrollbar{
        display:none;}</style>
      </head><body><div></div></body></html>`;
      return (
        <Frame
          className="portfolio-frame"
          initialContent={process.env ? devCss : prodCss}
          style={{ height: '100%', width: '100%', border: 'none' }}
        >
          <Suspense
            fallback={(
              <center>
                <h1>Loading portfolio</h1>
              </center>
            )}
          >
            <Portfolio insideBigSur />
          </Suspense>
        </Frame>
      );
    case 'vscode':
      return (
        <Suspense
          fallback={(
            <center>
              <h1>Loading vscode</h1>
            </center>
          )}
        >
          <VSCode />
        </Suspense>
      );
    case 'insta':
      // eslint-disable-next-line no-case-declarations
      devCss = `<!DOCTYPE html>
      <html>
      <head>
      <link rel="stylesheet" type="text/css" href="http://localhost:8081/styles.css">
      <style>
      .frame-content{
        width : 100vw;
      }
      </style>
      </head><body><div></div></body></html>`;

      // eslint-disable-next-line no-case-declarations
      prodCss = `<!DOCTYPE html>
      <html>
      <head>
      <style>
      .frame-content{
        width : 100vw;
      }
      </style>
      <link rel="stylesheet" type="text/css" href="https://strek-insta.netlify.app/styles.css">
      </head><body><div></div></body></html>`;
      return (
        <Frame
          initialContent={process.env ? devCss : prodCss}
          style={{ height: '100%', width: '100%', border: 'none' }}
        >
          <Suspense
            fallback={(
              <center>
                <h1>Loading InstaClone</h1>
              </center>
            )}
          >
            <Insta insideBigSur />
          </Suspense>
        </Frame>
      );
    case 'iterm':
      return (
        <Suspense
          fallback={(
            <center>
              <h1>Loading Iterm</h1>
            </center>
          )}
        >
          <Iterm />
        </Suspense>
      );
    default:
      return <InProgress app={app} />;
  }
};
export default renderApp;
