const project = {
  id: "12345",
  headline: "My Wedding Website!",
  subheading: "Personal",
  information: "Built in NodeJS and Express.",
};

function ProjectTile(props) {
  return (
    <div>
      <div className="image"></div>
      <div className="text">
        <h3>{project.headline}</h3>
        <span>{project.subheading}</span>
        <p>{project.information}</p>
      </div>
    </div>
  );
}
