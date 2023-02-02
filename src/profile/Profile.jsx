import React from "react";

function Profile(props) {
  const { about } = props;
  const { name, discription, image } = about;
  console.log(props);
  return (
    <div>
      <section id="about-me">
        <h1>
          Hello, my name is
          <span class="rotate text-important">{name}</span>,<br />
          {discription}
        </h1>
        <img class="avatar" src={image} alt="jhon-doe" />
      </section>
      ,
    </div>
  );
}

export default Profile;
