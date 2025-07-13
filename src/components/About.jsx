import ProfileCard from "./ProfileCard";
import avatar from "/avatar.png";

const About = () => {
  return (
    <div className="m-h-[80vh] w-full py-[3rem]">
      <aside className="md:float-left justify-center align-middle flex h-full md:p-16">
        <ProfileCard
          name="Javi Jason"
          title="Photographer"
          handle="javisnaps"
          status="Online"
          contactText="Contact Me"
          avatarUrl={avatar}
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() =>
            window.open(
              "https://wa.me/2349038163213?text=Hi%20Nexus%20Design%2C%20I%20just%20checked%20out%20your%20demo%20portfolio%20and%20wanted%20to%20test%20the%20contact%20feature.%20Looks%20great!",
              "_blank",
            )
          }
        />
      </aside>
      <section className="p-5 md:p-16">
        <h1>About Me</h1>
        <p>
          Hi, I’m Jason — a passionate portrait and lifestyle photographer based
          in London.
          <br />
          <br />
          Photography, for me, is more than just taking pictures; it’s about
          capturing real moments, telling stories, and freezing emotions in
          time. With over 15 years of experience behind the lens, I specialize
          in creating timeless images that feel natural, authentic, and full of
          life.
          <br />
          <br />
          Whether it’s the quiet joy of a candid smile, the elegance of a posed
          portrait, or the raw emotion of a wedding day, I strive to document
          life as it truly is. I work closely with every client to ensure their
          vision comes to life — whether it’s a personal shoot, a brand
          campaign, or a once-in-a-lifetime celebration.
          <br />
          <br />
          When I’m not photographing people, you’ll find me exploring new
          places, studying light and composition, or experimenting with new
          editing styles to keep my work fresh and meaningful.
          <br />
          <br />
          Let’s create something beautiful together.
        </p>
      </section>
    </div>
  );
};

export default About;
