import ProjectList from '../../components/Project';

const Projects = () => {
    const projects = [
        {
            title: 'Project1', 
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            tag1: 'webdev', 
            tag2: 'mern', 
            tag3: 'In progress', 
            id: 1
        },
        {
            title: 'Project2', 
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            tag1: 'webdev', 
            tag2: 'MERN', 
            tag3: 'In progress', 
            id: 2
        },
        {
            title: 'Project3', 
            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
            tag1: 'webdev', 
            tag2: 'MERN', 
            tag3: 'In progress', 
            id: 3
        }
    ]
    const bg = 'https://media.discordapp.net/attachments/779991636460699673/888447084620030032/unknown.png?width=1440&height=437';

    return (
    // todo: add list-group Scroll-spy - https://getbootstrap.com/docs/5.1/components/scrollspy/
    <div className="Projects-page" >
        <div className="Heading" >
            <img style={{
                width: '100%',
            }} src ={bg} />
        </div>
        <ProjectList projects= {projects} />    
    </div>
    )
};

export default Projects;