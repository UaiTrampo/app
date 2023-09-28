import Image from "next/image";
import uaitrampo from "../../public/uaiTrampo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (

        <div className="px-20 xl:px-44 mt-20 py-10 bg-amareliclaro flex flex-col xl:flex-row justify-between gap-20">
            <div className="xl:w-96 flex justify-center items-center">
                <Image src={uaitrampo} alt="logo uai trampo" className="w-44 drop-shadow-dark" />
            </div> 
            <div className="flex flex-col justify-center items-center">
                <h2 className=" font-bold text-xl pb-5">
                    Redes Sociais
                </h2>
                <div className="flex gap-5">
                    <Link href="https://www.instagram.com/uaitrampo/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} className=" h-8 hover:scale-110 transition-all duration-300" />
                    </Link>
                    <Link href="https://www.facebook.com/uaitrampo" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} className=" h-8 hover:scale-110 transition-all duration-300" />
                    </Link>
                </div>
                <div className="py-5">
                    <Link href="#" className=" h-8 ">
                        <p className="hover:scale-110 transition-all duration-300">(35)984265018</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}