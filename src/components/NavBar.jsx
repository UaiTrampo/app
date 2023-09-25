import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";


export default function NavBar() {
    return (
        <div className="bg-gradient-to-b from-laranjaclaro to-laranja ">
            <nav className="flex justify-between items-center px-5 py-2">
                <div className="flex gap-5">
                    <Link href="https://www.instagram.com/uaitrampo/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className="text-branco h-8 hover:scale-110 transition-all duration-300"/>
                    </Link>
                    <Link href="https://www.facebook.com/uaitrampo" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className="text-branco h-8 hover:scale-110 transition-all duration-300" />
                    </Link>
                </div>
                <div>
                    <Link href="https://wa.me/5535984265018" 
                    target="_blank"
                    className="text-branco h-8">
                        <p className="hover:scale-110 transition-all duration-300">(35)984265018</p>
                    </Link>
                </div>
            </nav>
        </div>
    )
}