import classes from './App.module.scss';
import {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./AboutPageAsync";
import {ProfilePageAsync} from "./ProfilePageAsync";

const App = () => {
    return (
        <div className={classes.test}>
            <h1 className={classes.test__title}>TRATATATATATA</h1>

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
        </div>
    )
}

export default App;
