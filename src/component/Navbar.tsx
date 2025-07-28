import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <nav className="px-5 py-5 bg-gray-100 shadow">
                <ul className="flex justify-center gap-4 list-none">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;