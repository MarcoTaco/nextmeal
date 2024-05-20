import '../styles/navBar.scss';

function NavBar(){
    return(
        <>
            <div className="nav-bar">
                <div className="nav-menu">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Food Menu</li>
                        {/* i can add more if i think of anything */}
                    </ul>
                </div>
                <div className="nav-logo">
                    <h1>Next Meal</h1> 
                    {/* maybe create a logo someday since i have an ipad */}
                </div>
                <div className="nav-login">
                    <p>Login</p>
                    {/*
                        i want to put a login page sometime in the future if i get to it
                    */}
                </div>
            </div>
        </>
    )
}

export default NavBar;