class Header{

    navbar(){
        let navbar = `<header class="container">
        <nav class="navbar navbar-expand-lg bg-white navbar-light">
            <a href="#" class="navbar-brand">
                <p class="logo-text">Beliin Aja!</p>
            </a>
            <button class="navbar-toggler navbar-toggle-right" type="button" data-toggle="collapse" data-target="#navMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav items-nav ml-auto">
                    <li class="nav-item mr-3">
                        <a href="#" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a href="#" class="nav-link">Product</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a href="#" class="nav-link">Testimonial</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a href="#" class="nav-link">Chart</a>
                    </li>
                    <li class="nav-item mr-3">
                        <a href="#" class="nav-link">Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>`
        return navbar;
    }
}
export default Header;