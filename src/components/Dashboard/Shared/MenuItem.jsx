import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ label, address }) => {
  const pathname = usePathname();
  const isActive = pathname === address;

  return (
    <Link
      href={address}
      className={`flex items-center px-4 py-1 my-1 rounded-md transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700 ${
        isActive ? "bg-white text-[#050504] font-semibold" : "text-[#707066] "
      }`}>
      <span>
        <Image
          src={`${
            !isActive
              ? "/assets/icons/Icon-Favorite(1).svg"
              : "/assets/icons/Icon-Favorite.svg"
          }`}
          width={20}
          height={20}
          alt='StarIcon'
        />
      </span>
      <span className='mx-4 font-medium'>{label}</span>
    </Link>
  );
};
MenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  };
export default MenuItem;
