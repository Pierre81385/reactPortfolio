import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";

function Portfolio() {
  const projectInfo = [
    {
      id: 1,
      image: "./animation.gif",
      title: "BeerMe",
      desc: "An app that suggests beers to the user, and provides random translations to order it in different languages.",
      deploy: "https://tjcourey.github.io/beerMe-international/",
      github: "https://github.com/TJCourey/beerMe-international",
    },
    {
      id: 2,
      image: "./FavoriteRecipes.png",
      title: "Favorite Recipes",
      desc: "A blog style app that allows users to post and comment on favorite recipes.",
      deploy: "https://murmuring-river-43433.herokuapp.com/",
      github: "https://github.com/JaredWilliam97/Favorite-Recipes",
    },
    {
      id: 3,
      image: "./Weather Dashboard.png",
      title: "Weather Dashboard",
      desc: "An app to find the weather forecast in cities around the world.",
      deploy: "https://pierre81385.github.io/weatherDashboard-HW6/",
      github: "https://github.com/Pierre81385/weatherDashboard-HW6",
    },
    {
      id: 4,
      image: "",
      title: "Employee Tracker",
      desc: "A CLI employee management system.",
      deploy:
        "https://drive.google.com/drive/folders/10dWx594w9Lh1O3kSohOeJPt3f3X_Ur9P?usp=sharing",
      github: "https://github.com/Pierre81385/employeeTracker",
    },
    {
      id: 5,
      image: "",
      title: "Fitness Tracker",
      desc: "A application to help with fitness goals and exercise tracking",
      deploy: "https://lit-everglades-43357.herokuapp.com/",
      github: "https://github.com/Pierre81385/fitnesTracker",
    },
    {
      id: 6,
      image: "",
      title: "Budget Tracker",
      desc: "A budgeting tool that has both online and offline functionality",
      deploy: "https://cryptic-refuge-05653.herokuapp.com/ ",
      github: "https://github.com/Pierre81385/progressiveBudget",
    },
  ];

  const renderCard = (card) => {
    return (
      <Card className="card" style={{ width: "250px", flex: 1 }} key={card.id}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.desc}</Card.Text>
          <footer>
            <a
              href={card.deploy}
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Deploy
            </a>
            <a
              href={card.github}
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Github
            </a>
          </footer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <CardColumns
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        columnCount: 3,
      }}
    >
      {projectInfo.map(renderCard)}
    </CardColumns>
  );
}

export default Portfolio;
