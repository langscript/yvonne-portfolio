import Link from "next/link";

const NavLink = ({href, title}: {href: string,title: string}) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-[#000000] sm:text-xl rounded md:p-0 hover:text-[#e07a5f] hover:underline"
        >
            {title}
        </Link>
    )
}

export default NavLink;