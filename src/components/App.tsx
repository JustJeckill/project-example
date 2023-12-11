import classes from './App.module.scss';
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./AboutPage";
import ProfilePage from "./ProfilePage";

const App = () => {
    return (
        <div className={classes.test}>
            <h1 className={classes.test__title}>TRATATATATATA</h1>

            <nav>
                <Link to={'/'}>Home Page</Link>
                <Link to={'/about'}>About Page</Link>
                <Link to={'/profile'}>Profile Page</Link>
            </nav>

            <Routes>
                <Route path={'/about'} element={ <AboutPage /> }/>
                <Route path={'/profile'} element={ <ProfilePage /> }/>
            </Routes>
        </div>
    )
}

export default App;
