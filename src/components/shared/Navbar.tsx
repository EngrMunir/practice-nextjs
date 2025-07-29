
const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-2xl font-bold">
                    Mysite
                </a>
                <div className="space-x-6">
                    <a href="" className="hover:text-gray-200">About us</a>
                    <a href="" className="hover:text-gray-200">Contact us</a>
                    <a href="" className="hover:text-gray-200">Login</a>
                    <a href="" className="hover:text-gray-200">Register</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;