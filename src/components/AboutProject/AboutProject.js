import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <h2 className='main__subtitle'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__block'>
          <h3 className='about-project__highlight'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='about-project__text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__block'>
          <h3 className='about-project__highlight'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='about-project__text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timescale'>
        <div className='about-project__part'>
          <p className='about-project__duration about-project__duration_of_backend'>
            1 неделя
          </p>
          <p className='about-project__part-name'>Back-end</p>
        </div>
        <div className='about-project__part'>
          <p className='about-project__duration about-project__duration_of_frontend'>
            4 недели
          </p>
          <p className='about-project__part-name'>Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
