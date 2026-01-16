// src/components/navbar/SubNavbar.tsx
import { Link } from "react-router-dom";
import { SUB_MENUS, type MainMenuKey } from "../../types/navbar.config";

type Props = {
    activeMenu: MainMenuKey | null;
    onClose: () => void;
};

export const SubNavbar = ({ activeMenu, onClose }: Props) => {
    if (!activeMenu) return null;

    return (
        <div
            className="
        absolute left-0 top-[80px]
        z-40
        hidden md:block
        w-full 
        bg-black
        transition-all duration-200
      "
        >
            <div className="mx-auto flex h-12 max-w-7xl justify-center items-center gap-10 px-6">
                {SUB_MENUS[activeMenu].map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className="text-sm text-white hover:text-gray-400"
                        onClick={onClose}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};
