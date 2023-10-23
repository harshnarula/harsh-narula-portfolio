import { useEffect } from "react";
import '../css/project.css'
// import ASHKLogo from '../images/ASHKlogo.png';

export default function Project({  projects, setProjects, width, setWidth }) {
  const updateProjectDetails = () => {
    const updatedDetails = [
      {
        img: '/images/ASHKlogo.png',
        name: 'ASHK',
        description: 'Developed a website named ASHK which is used for managing user-specific data based on traveling',
        domain: 'Web Development',
        tech: ['Flask', 'Jinja'],
        source: 'https://github.com/harshnarula/ASHK'
      },
      {
        img: 'https://img.icons8.com/color/200/000000/react-native.png',
        name: 'Video Chat Applicaton',
        description: 'This is an application where we can coumminicate with other persons virtually through a video call and also can cchat with them',
        domain: 'Web Development',
        tech: ['React', 'MySql'],
        source: 'https://github.com/harshnarula/video-chat-application'
      },
    ];

    // Update the 'projects' state with the updated details
    setProjects(updatedDetails);
  };

  useEffect(() => {
    updateProjectDetails();
  }, []);

  // useEffect(() => {
	// 	window.addEventListener("resize", () => {
	// 		if (
	// 			(width > 768 && window.innerWidth <= 768) ||
	// 			(width <= 768 && window.innerWidth > 768)
	// 		)
	// 			setWidth(window.innerWidth);
                
	// 	});
	// 	return () => {
	// 		window.removeEventListener("resize", () => {
	// 			if (
	// 				(width > 768 && window.innerWidth <= 768) ||
	// 				(width <= 768 && window.innerWidth > 768)
	// 			)
	// 				setWidth(window.innerWidth);
	// 		});
	// 	};
	// }, [width]);


  return (
    <div className='projects'>
      {projects.map((project, index) => (
        <div key={index} className='project-box'>
          <div className='project-box-01'>
            <div className='project-img'>
              <img src={project.img} alt='project-img' />
            </div>
          </div>

          <div className='project-box-02'>
            <div className='project-name'>
              <p>{project.name}</p>
            </div>

            <div className='project-description'>
              <p>{project.description}</p>
            </div>

            <div className='project-domain'>
              <p>{project.domain}</p>
            </div>

            <div className = 'project-tech-source'>
              <div className='project-tech'>
                {project.tech.length > 0 &&
                  project.tech.map((items, index) => {
                    return <p key={index} className='project-p'>{items}</p>;
                  })}
              </div>
              <div className = 'project-source'>
                <a className = 'source'  href= {project.source} target="_blank" rel="noopener noreferrer" >View Source</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
