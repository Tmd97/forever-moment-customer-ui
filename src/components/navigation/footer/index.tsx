import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {

  const categories = [
    "Anniversary",
    "Birthdays",
    "Decorations",
    "Candlelight Dinner",
    "Corporate Events",
    "Festivals",
  ];

  const quickLinks = [
    "About Us",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  return (

    <footer className="bg-orange-50 border-t">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>

          <h2 className="
            text-2xl font-bold
            bg-gradient-to-r from-orange-500 to-pink-500
            bg-clip-text text-transparent
            mb-3
          ">
            ForeverMoment
          </h2>

          <p className="text-gray-600 text-sm">

            We provide premium decoration and event services
            for birthdays, anniversaries, weddings and special occasions.

          </p>

          {/* Social */}
          <div className="flex gap-4 mt-4">

            <Instagram className="cursor-pointer text-orange-600 hover:scale-110 transition" />

            <Facebook className="cursor-pointer text-orange-600 hover:scale-110 transition" />

            <Youtube className="cursor-pointer text-orange-600 hover:scale-110 transition" />

          </div>

        </div>



        {/* Categories */}
        <div>

          <h3 className="font-semibold mb-3">Categories</h3>

          <div className="space-y-2">

            {categories.map((cat) => (

              <Link
                key={cat}
                to="/"
                className="block text-gray-600 hover:text-orange-600 text-sm"
              >
                {cat}
              </Link>

            ))}

          </div>

        </div>



        {/* Quick Links */}
        <div>

          <h3 className="font-semibold mb-3">Quick Links</h3>

          <div className="space-y-2">

            {quickLinks.map((link) => (

              <Link
                key={link}
                to="/"
                className="block text-gray-600 hover:text-orange-600 text-sm"
              >
                {link}
              </Link>

            ))}

          </div>

        </div>



        {/* Contact */}
        <div>

          <h3 className="font-semibold mb-3">Contact</h3>

          <div className="space-y-3 text-sm text-gray-600">

            <div className="flex gap-2 items-center">
              <Phone size={16} className="text-orange-600" />
              +91 65223651230
            </div>

            <div className="flex gap-2 items-center">
              <Mail size={16} className="text-orange-600" />
              support@forevermoment.com
            </div>

            <div className="flex gap-2 items-center">
              <MapPin size={16} className="text-orange-600" />
              Mumbai, India
            </div>

          </div>

        </div>

      </div>



      {/* Bottom */}
      <div className="
        border-t
        text-center
        py-4
        text-sm
        text-gray-500
      ">

        © 2026 ForeverMoment. All rights reserved.

      </div>

    </footer>

  );

}
