import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-700">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* Company Info */}
        <div className="md:col-span-1 space-y-3">
          <h2 className="font-bold uppercase">SWOO - 1st NYC Tech Online Market</h2>
          <div className="text-gray-400 uppercase text-xs">Hotline 24/7</div>
          <div className="text-[#f26522] text-2xl font-bold">(025) 3686 25 16</div>
          <div className="text-sm text-gray-700">
            257 Thatcher Road St, Brooklyn, Manhattan, NY 10092
          </div>
          <div className="text-sm text-gray-700">contact@Swootechmart.com</div>

          {/* Social Icons */}
          <div className="flex space-x-3 pt-3">
            {[FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 cursor-pointer"
                >
                  <Icon className="text-gray-800 w-4 h-4" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold mb-2">TOP CATEGORIES</h3>
          {[
            "Laptops",
            "PC & Computers",
            "Cell Phones",
            "Tablets",
            "Gaming & VR",
            "Networks",
            "Cameras",
            "Sounds",
            "Office",
          ].map((item) => (
            <div key={item} className="text-gray-600 hover:text-black cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold mb-2">COMPANY</h3>
          {[
            "About Swoo",
            "Contact",
            "Career",
            "Blog",
            "Sitemap",
            "Store Locations",
          ].map((item) => (
            <div key={item} className="text-gray-600 hover:text-black cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold mb-2">HELP CENTER</h3>
          {[
            "Customer Service",
            "Policy",
            "Terms & Conditions",
            "Trach Order",
            "FAQs",
            "My Account",
            "Product Support",
          ].map((item) => (
            <div key={item} className="text-gray-600 hover:text-black cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-bold mb-2">PARTNER</h3>
          {["Become Seller", "Affiliate", "Advertise", "Partnership"].map((item) => (
            <div key={item} className="text-gray-600 hover:text-black cursor-pointer">
              {item}
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div className="md:col-span-1">
          <h3 className="font-bold">
            SUBSCRIBE & GET{" "}
            <span className="text-[#f26522]">10% OFF</span> FOR YOUR FIRST ORDER
          </h3>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border-b border-gray-300 outline-none py-2"
            />
            <button className="text-[#f26522] font-semibold mt-2">SUBSCRIBE</button>
            <p className="text-xs text-gray-500 mt-1">
              By subscribing, you’re accepted the our{" "}
              <span className="underline cursor-pointer">Policy</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-6 pt-6 px-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500">
          © 2024 <span className="font-semibold">Shawonetc3</span>. All Rights Reserved
        </p>

        <div className="flex space-x-4">
          <img src="/paypal.svg" alt="PayPal" className="h-5" />
          <img src="/mastercard.svg" alt="MasterCard" className="h-5" />
          <img src="/visa.svg" alt="Visa" className="h-5" />
          <img src="/stripe.svg" alt="Stripe" className="h-5" />
          <img src="/klarna.svg" alt="Klarna" className="h-5" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center border px-3 py-1 rounded-md gap-2">
            USD <FaChevronDown className="text-xs" />
          </div>
          <div className="flex items-center border px-3 py-1 rounded-md gap-2">
            <img
              src="https://flagcdn.com/us.svg"
              alt="EN"
              className="w-4 h-4 rounded-full"
            />
            Eng <FaChevronDown className="text-xs" />
          </div>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Mobile Site
          </a>
        </div>
      </div>
    </footer>
  );
}
