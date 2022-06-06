import { useEffect, useState } from "react"

export default function Student(props) {
  const [gradeAverage, setGradeAverage] = useState(0);
  const [testsVisible, setTestsVisible] = useState(false);

  useEffect(() => {
    let avg = 0;

    if(props?.grades.length === 0) {
      return setGradeAverage(avg);
    }
    
    //
    props.grades.forEach(grade => {
      avg = avg + parseInt(grade);
    });

    avg = avg / props.grades.length;

    setGradeAverage(avg);
  }, [props.grades]);

  function toggleTests() {
    setTestsVisible(x => !x);
  }

  return(
    <div className='border-b-2 py-2'>
      <div className='flex flex-row w-full max-w-[900px] m-auto'>

        <div className='w-full max-w-[100px] sm:max-w-[125px] lg:max-w-[250px] flex justify-center items-start pl-4'>
          <img className='border-2 rounded-full w-full max-w-[150px] h-auto' src={props.pic} alt={props.firstName + " " + props.lastName} />
        </div>

        <div className='flex flex-row flex-grow'>
          <div className="flex flex-col flex-grow">
            <h1 className='text-4xl'>{props.firstName + " " + props.lastName}</h1>
            <div className="flex flex-col pl-4">
              <span className='font-light'>Email: {props.email}</span>
              <span className='font-light'>Company: {props.company}</span>
              <span className='font-light'>Skill: {props.skill}</span>
              <span className='font-light'>Average: {gradeAverage}%</span>

              {testsVisible && (
                <div className={"scores font-light"}>
                  <ul>
                    {props.grades.map((grade, index) => {
                      return <li key={index}>Test {index+1}: {grade}%</li>
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>

          <div>
            <button onClick={toggleTests} className={testsVisible ? "hidden" : "block"}>
              <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
            </button>

            <button onClick={toggleTests} className={testsVisible ? "block" : "hidden"}>
              <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19,13H5V11H19V13Z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
