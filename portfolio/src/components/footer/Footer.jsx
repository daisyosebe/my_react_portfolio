// Importing css
import "./Footer.css"

// Exporting functional component
export default function Footer(){

  return (
    <div className="footerBox">
      <footer>
        <div className="profileLink">
          {/* Image link to github */}
          <a href="" target="_blank"><img src="" alt="github icon" /></a>
          {/* Image link to linkedin */}
          <a href="" target="_blank"><img src="" alt="linkedin icon" /></a>
          {/* Image link to stackoverflow */}
          <a href="" target="_blank"><img src="" alt="stack overflow icon" /></a>
        </div>
      </footer>
    </div>
  )
}