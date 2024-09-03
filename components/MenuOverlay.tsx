import React from "react";
import NavLink from "./NavLink";

interface LinksProps {
    path: string
    title: string
}

const MenuOverlay = ({links, onClose}: { links: LinksProps[], onClose: () => void }) => {
    return (
        <ul className="flex flex-col py-4 items-center bg-[#f2cc8f]">
            {links.map((link, index) => (
                <li key={index} onClick={onClose}>
                    <NavLink href={link.path} title={link.title}/>
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;