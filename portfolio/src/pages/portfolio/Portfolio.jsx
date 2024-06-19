// Importing css and project
import "./Portfolio.css";
import Project from "./Project.jsx";

// Exporting functionable page
export default function PortfolioPage(){

  return (
    <main className="container-fluid">
      <div className="space"></div>
      <h2>My Portfolio</h2>
      <div className="row">
        <Project />
      </div>
    </main>
  )
};