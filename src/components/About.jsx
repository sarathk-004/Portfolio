import { ABOUT } from '../constants';

const About = () => {
  return (
    <div className='container mx-auto overflow-hidden' id="about">
      <h1 className="text-4xl font-bold text-center uppercase text-blue-500">About</h1>
      <h3 className='p-4 text-5xl lg:text-[3.5em] leading-snug tracking-tighter' dangerouslySetInnerHTML={{ __html: ABOUT.text1 }} />
      <p className='mr-24 pl-4 text-lg leading-loose'>
        {ABOUT.text2}
      </p>
    </div>
  );
}

export default About;
