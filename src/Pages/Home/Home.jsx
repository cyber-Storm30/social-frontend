import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Post from "../../Components/Post/Post";
import { pixToRem } from "../../Utils/pixToRem";
import image1 from "../../Assets/1.jpg";
import image2 from "../../Assets/2.jpg";
import image3 from "../../Assets/3.jpg";
import image4 from "../../Assets/4.jpg";
import image5 from "../../Assets/5.png";

const Home = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "beige",
        paddingTop: "20px",
        gap: pixToRem(20),
      }}
    >
      <Post
        title="Ranajit Mukherkee"
        subtitle="KIIT|CSSE"
        time="12h. Edited"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        voluptatem ullam vel quia blanditiis. Exercitationem molestias cum
        eum, explicabo hic delectus debitis harum? Adipisci velit corrupti
        deserunt amet eius doloremque?"
        image={image1}
        likes="125"
        comments="600"
      />
      <Post
        title="User 2"
        subtitle="KIIT|CSSE"
        time="16h. Edited"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        voluptatem ullam vel quia blanditiis. Exercitationem molestias cum
        eum, explicabo hic delectus debitis harum? Adipisci velit corrupti
        deserunt amet eius doloremque?"
        image={image2}
        likes="105"
        comments="500"
      />
      <Post
        title="User 3"
        subtitle="KIIT|CSSE"
        time="16h. Edited"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        voluptatem ullam vel quia blanditiis. Exercitationem molestias cum
        eum, explicabo hic delectus debitis harum? Adipisci velit corrupti
        deserunt amet eius doloremque?"
        image={image3}
        likes="500"
        comments="1600"
      />
      <Post
        title="User 4"
        subtitle="KIIT|CSSE"
        time="16h. Edited"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        voluptatem ullam vel quia blanditiis. Exercitationem molestias cum
        eum, explicabo hic delectus debitis harum? Adipisci velit corrupti
        deserunt amet eius doloremque?"
        image={image4}
        likes="125"
        comments="600"
      />
      <Post
        title="User 5"
        subtitle="KIIT|CSSE"
        time="16h. Edited"
        desc=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
        voluptatem ullam vel quia blanditiis. Exercitationem molestias cum
        eum, explicabo hic delectus debitis harum? Adipisci velit corrupti
        deserunt amet eius doloremque?"
        image={image5}
        likes="125"
        comments="600"
      />
    </div>
  );
};

export default Home;
