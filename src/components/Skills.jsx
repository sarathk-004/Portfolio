import { SKILLS } from '../constants'

const Skills = () => {
  return (
    <div className="container mx-auto flex justify-center items-center" id="skills">
      <div className="text-center">
        <h2 className="mb-12 mt-8 text-center text-4xl text-blue-500 uppercase font-semibold">Skills</h2>
        <div className="gap-8 mx-2 flex flex-wrap justify-center rounded-xl px-4 py-10 lg:px-20">
          {SKILLS.map((skill, index) => (
            <div key={index} className="mb-8 flex justify-center items-center">
              <div className="flex flex-col items-center justify-center text-center">
                {skill.icon}
                <h3 className="mt-4 px-6 text-xl lg:text-2xl">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
