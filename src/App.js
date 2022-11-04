import React from 'react';
import {Suspense} from 'react';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";
import { ThemeProvider } from "@mui/material/styles";
import {CssBaseline, CircularProgress, Grid } from "@mui/material";
import routes from './routes';
import { store } from './store/store';
import './App.css';
import { themeBackground } from './consts/style';
import Post from './components/Pages/Post/Post';

function App() {
  return (
    <div className="App">
      <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <BrowserRouter>
            <SWRConfig
                value={{
                    errorRetryCount: 0,
                    revalidateOnFocus: false                        
                }}
            >
              <ThemeProvider theme={themeBackground}>
                  <CssBaseline />
                  <Route path={'/'}> 
                    <Post />
                  </Route>

                  {/* <Route path={'/app/login'}>
                      <Login/>
                  </Route>

                  <Route path={'/app/register'}>
                      <Signup/>
                  </Route> */}

                  <Suspense fallback={
                      <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justifyContent="center"
                          style={{ minHeight: '100vh' }}
                      >
                          <Grid item xs={3}>
                              <CircularProgress color="inherit" />
                          </Grid>
                      </Grid>
                  }>
                      <Switch>
                          {routes.map(({component, path, exact}, index) => (
                              <ProtectedRoute
                                  key={index}
                                  path={path}
                                  component={component}
                                  exact={exact}
                              />
                          ))}
                      </Switch>
                  </Suspense>
              </ThemeProvider>
            </SWRConfig>

            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar
                style={{ fontSize: 14, fontWeight: 'bold' }}
                limit={1}
            />
          </BrowserRouter>
        </Provider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
