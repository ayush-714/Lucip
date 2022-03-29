import './App.css';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import Application from "./Application";
import Home from './home'
import User from './user';
function App() {
  // const [page, setPage] = useState('login');
  var page = 'login';
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    // console.log(data);
    page = data.email;
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
    // localStorage.removeItem('loginData');
    // setLoginData(null);


  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };
  if (page === 'login')
    return (
      <div className="App">

            <div class="topnav">
          
              <button onClick={handleLogout}>Log out</button>
              <center>
                    <h1>
                      Lucid
                    </h1>
              </center>
            </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div >
          <center>
          {loginData ? (
            loginData.email === '19ucs006@lnmiit.ac.in' ? (
              <div>
                <Home/>
                
              </div>
            ) : (
              <div>
                  <Application/>
              </div>
            )
          ) : (
            <GoogleLogin
              clientId={'744022124117-jsh7bo0agomo81eeftv34nm2p3568iuk.apps.googleusercontent.com'}
              buttonText="Log in"
              onSuccess={handleLogin}
              onFailure={handleFailure}
              cookiePolicy={'single_host_origin'}
            ></GoogleLogin>
          )}
          </center>
        </div>

      </div>
    );

}

export default App;
