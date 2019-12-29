import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./Routes";
import BottomNavbar from './components/BottomNavbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <header><AppHeader /></header> */}
        <main>
          <Routes></Routes>
        </main>
        <div>
          <BottomNavbar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
