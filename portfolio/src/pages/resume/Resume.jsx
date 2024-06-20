// imports

import './Resume.css';

// exports
export default function Resume() {
  return (
    <section className='resume'>
      <h2 className='resume-title'>Resume</h2>
      <a href="./dist/resumedaisy.pdf" download><h3>Resume Download</h3></a>

      <div className='wholelist'>
        <ul className='listgroup'>
          <h3 className='subtitle'>Front-end Development</h3>
          <li className='list'>CSS</li>
          <li className='list'>Bootstrap</li>
          <li className='list'>JavaScript</li>
          <li className='list'>JQuery</li>
          <li className='list'>React</li>
        </ul>
        <ul className='listgroup'>
          <h3 className='subtitle'>Back-end Development</h3>
          <li className='list'>APIs</li>
          <li className='list'>MongoDB, Mongoose</li>
          <li className='list'>Express</li>
          <li className='list'>Node</li>
          <li className='list'>PostgreSQL, Sequelize</li>
        </ul>
      </div>
    </section>
  )
}