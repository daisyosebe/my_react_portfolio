// Importing css
import "./Footer.css"

// Exporting functional component
export default function Footer(){

  return (
    <div className="footerBox">
      <footer>
        <div className="profileLink">
          {/* Image link to github */}
          <a href="https://github.com/daisyosebe" target="_blank"><img src="./dist/images/github.JPG" alt="github icon" /></a>
          {/* Image link to linkedin */}
          <a href="https://www.linkedin.com/in/daisy-osebe" target="_blank"><img src="./dist/images/linkedin.JPG" alt="linkedin icon" /></a>
          {/* Image link to facebook */}
          <a href="https://www.facebook.com/daisy.m.osebe/" target="_blank"><img src="./dist/images/facebook.JPG" alt="facebook icon" /></a>
        </div>
      </footer>
    </div>
  )
}