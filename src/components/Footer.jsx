import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-gray-400 py-6 text-center pb-[110px]">
      <div className="mb-3 flex justify-center gap-5 text-xl">
        <a
          href="https://www.instagram.com/nexusdesignsorg?igsh=Y2cyN2pzZnVxNnlv"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/NyxAsura?t=jN-MFkHYfbCph8bDJk4MRQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/harrison-k-a-a5b118278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/KingHarry001"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub />
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Nexus Dynasty Studio. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
