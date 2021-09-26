import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import react, {useState} from 'react';
import Alert from './component/Alert';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light"); //weather dark mode enable or not

    // const [darkMode, setDarkMode] = useState("dark"); 

    const [thememode, setthemeMode] = useState("light"); 

    const [alert, setAlert] = useState(null);
    
    const hidelement = ()=> {
        // setthemeMode({
        //     //hide: document.body.style.display = "none",    
        //     //hide: getElementById("id").style.display = "none",
        // //hide: document.thememode.hidelement(),
        // })
        if(mode === 'dark'){
            console.log("light mode is activated");
            //document.body.div.className("common-hide").hidelement;
        }
        else{
            console.log("dark mode is activated");
        }
    }
    const showAlert = (message, type)=> {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
    
    const toggleModeBtn = ()=> {
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor = "gray";
            showAlert("Dark mode has been enabled","success");
           // document.getElementByClass("element").style.display = "none";
           document.title = "Textutils - Dark mode";
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled","success");
            document.title = "Textutils - Light mode";
        }
    }

    const toggleThemeDanger = ()=> {
        if(thememode === "light" || thememode ==="dark" || thememode==="success"){
            setthemeMode("danger");
            document.body.style.backgroundColor = "#dc3545";
        }
        else{
            //setMode("light");
            document.body.style.backgroundColor = "white";
        }
    }

    const toggleThemeGreen = ()=> {
        if(thememode === "light" || thememode ==="dark" || thememode==="danger") {
            setthemeMode("success");
            document.body.style.backgroundColor = "#198754";
        }
        else{
            //setMode("light");
            document.body.style.backgroundColor = "white";
        }
    }


    return (
        <>
        <Router>
            {/* <Navbar title="TextUtils" aboutText="AboutText Utils"/> */}
            {/* <Navbar /> */}
            <Navbar title="TextUtils" mode={mode} toggleModeBtn={toggleModeBtn} toggleThemeDanger={toggleThemeDanger} toggleThemeGreen={toggleThemeGreen}/>
            <Alert alert={alert}/>
            <div className="container my-3" >
                <Switch>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/">
                        <TextForm heading="Enter the text to analyze"  thememode={thememode} showAlert={showAlert} />
                    </Route>
                </Switch>
            </div>
        </Router>
        </>
    )
}

export default App;