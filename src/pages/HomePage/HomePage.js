import s from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={s.wrapper}>
    <h1 className={s.title}>Hi there! Please, sign in to continue</h1>
    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/3aAOSUcV5n8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> */}
  </div>
  )
};
