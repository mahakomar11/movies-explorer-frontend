import './Techs.css';

function Techs() {
  return (
    <section className='techs' id='techs'>
      <h2 className='main__subtitle'>О проекте</h2>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className='techs__stack'>
        <p className='techs__tech'>HTML</p>
        <p className='techs__tech'>CSS</p>
        <p className='techs__tech'>JS</p>
        <p className='techs__tech'>React</p>
        <p className='techs__tech'>Git</p>
        <p className='techs__tech'>Express.js</p>
        <p className='techs__tech'>mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
