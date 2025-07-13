import Stack from "./StackImages";

const Services = () => {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];

  return (
    <div className="m-h-[80vh] w-full py-3">
      <aside className="md:float-left justify-center align-middle flex h-full md:p-16">
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 200, height: 300 }}
          cardsData={images}
        />
      </aside>
      <section className="p-5 md:p-16">
        <h1 className="text-xl">📷 What I Offer</h1>
        <p>
          I provide high-quality photography services tailored to your needs.
          Whether you're looking to capture a milestone, enhance your brand, or
          simply freeze a beautiful moment in time — I’ve got you covered.
          <br />
          <br />
          <b className="block">🔹 Portrait Photography</b>
          Perfect for individuals, couples, and families. Includes creative
          direction, location scouting, and retouching.
          <br />
          <br />
          <b>🔹 Event Coverage</b>
          <br />
          From birthdays to corporate events, I document your special day with a
          mix of candid and staged shots.
          <br />
          <br />
          <b>🔹 Brand & Product Shoots</b>
          <br />
          Clean, professional visuals for businesses, products, or personal
          branding — ideal for social media and websites.
          <br />
          <br />
          <b>🔹 Weddings & Engagements</b>
          <br />
          Capturing the emotions and stories behind your most important day.
          Packages include pre-wedding and ceremony coverage.
        </p>
      </section>
    </div>
  );
};

export default Services;
