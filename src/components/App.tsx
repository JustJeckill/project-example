import '../styles/index.scss';
import classes from './App.module.scss';
import {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./AboutPageAsync";
import {ProfilePageAsync} from "./ProfilePageAsync";
import {Theme, ThemeContext} from "../theme/ThemeContext";

const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
    }

    return (
        <div className={`${classes.test} app ${theme}`}>
            <h1 className={`${classes.test__title} title`}>TRATATATATATA</h1>

            <nav>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/about'}>About Page</Link>
                <Link to={'/profile'}>Profile Page</Link>
            </nav>

            <Suspense fallback={'Loading...'}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/profile'} element={<ProfilePageAsync/>}/>
                </Routes>
            </Suspense>

            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default App;
