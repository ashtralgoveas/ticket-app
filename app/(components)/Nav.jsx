import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4 gap-4">
        <Link href="/">
          <div className="flex gap-2">
            <FontAwesomeIcon
              icon={faHome}
              className="icon"
              width={18}
              height={14}
            />
            <h4 className="text-default-text">Home</h4>
          </div>
        </Link>
        <Link href="/TicketPage/new">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={faTicket} className="icon" />
            <h4 className="text-default-text">Create</h4>
          </div>
        </Link>
      </div>
      <div>
        <p className="text-default-text">ashtralgoveas@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
