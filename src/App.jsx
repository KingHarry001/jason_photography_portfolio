import "./App.css";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
  VscSend,
} from "react-icons/vsc";
import About from "./components/About";
import Hero from "./components/hero";
import Masonry, { useMeasure, useMedia } from "./components/Masonry";
import Services from "./components/Services";
import RollingGallery from "./components/RollingGallery";
import Dock from "./components/Dock";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Dockitems = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => scrollToSection("home"),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: () => scrollToSection("about"),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Gallery",
      onClick: () => scrollToSection("gallery"),
    },
    {
      icon: <VscSettingsGear size={18} />,
      label: "Services",
      onClick: () => scrollToSection("services"),
    },
    {
      icon: <VscSend size={18} />,
      label: "Contact",
      onClick: () => scrollToSection("contact"),
    },
  ];

  const items = [
    "Item 1",
    <div key="jsx-item-1">Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Item 2",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "Item 4",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Item 5",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "Item 7",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Item 8",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "Item 10",
    <div key="jsx-item-3">Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Item 11",
    <div key="jsx-item-2">Custom JSX Content</div>,
    "Item 13",
    <div key="jsx-item-4">Custom JSX Content</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "Item 14",
    // Add more items as needed
  ];

  const Masonryitems = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 500,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "11",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "12",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col !p-0 !m-0 overflow-x-hidden">
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <Dock
          items={Dockitems}
          panelHeight={60}
          baseItemSize={40}
          magnification={70}
        />
      </div>

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="gallery">
        <Masonry Masonryitems={Masonryitems} />
      </div>

      <div id="services">
        <Services />
      </div>

      <div>
        <RollingGallery autoplay={true} pauseOnHover={true} />
      </div>

      <Testimonial />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
