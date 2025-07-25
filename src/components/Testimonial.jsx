import ChromaGrid from "./ChromaGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle:
      "Working with Javi Jason was an absolute pleasure! They captured every special moment with such creativity and attention to detail. The photos turned out stunning—natural, vibrant, and full of emotion. I couldn’t be happier with the results. Highly recommended!",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle:
      "5 stars. Javi made magic with the lens. Clean edits, fast delivery, and top-tier quality.",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle:
      "Javi Jason didn’t just take photos—he captured emotions. Every picture from our wedding tells a beautiful story. His calm presence and eye for candid moments made all the difference. We’ll treasure these memories forever",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle:
      "Working with Javi Jason was seamless from start to finish. He understood our brand vibe instantly and delivered high-quality images that elevated our entire campaign. Professional, punctual, and incredibly talented",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle:
      "I’ve never felt comfortable in front of a camera until I met Javi. He knows exactly how to bring out your natural vibe. The shots came out 🔥 and I’m still obsessed with the edits",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle:
      "Javi Jason is a visual storyteller. His attention to lighting, mood, and composition is next level. Every photo feels like a piece of art. Can’t wait to shoot again!",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];

const Testimonial = () => {
  return (
    <div className="py-[2rem]">
      <h1 className="m-5">Testimonial</h1>
      <div style={{ position: "relative" }}>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          className="py-[3rem]"
        />
      </div>
    </div>
  );
};

export default Testimonial;
