import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import colorPicker from "../../assets/colorpicker.png"
import calculator from "../../assets/Calculator.png"
import tableList from "../../assets/table-list.png"
import toDoList from "../../assets/Todolist.png"
import personInfo from "../../assets/personInfo.png"
import crudImage from "../../assets/CRUD.png"
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={colorPicker}
          link="https://color-picker-3kf5k4ukb-prabhakaran1605s-projects.vercel.app/"
          h3="Color"
          p="Color Picker"
        />
        <ProjectCard
          src={calculator}
          link="https://calculator-lhvw3skjo-prabhakaran-1605.vercel.app/"
          h3="Calculator"
          p="Manual Calculator"
        />
        <ProjectCard
          src={tableList}
          link="https://react-table-list-three.vercel.app/"
          h3="Tab"
          p="Table List"
        />
        <ProjectCard
          src={toDoList}
          link="https://react-crud-eight-dusky.vercel.app/"
          h3="To Do"
          p="To Do App"
        />
         <ProjectCard
          src={personInfo}
          link="https://contact-app-taupe.vercel.app/contactapp"
          h3="Person"
          p="Person Information"
        />
        <ProjectCard
          src={crudImage}
          link="https://react-social-media-app-brown.vercel.app/"
          h3="Crud"
          p="Crud App"
        />
      </div>
    </section>
  );
}

export default Projects;
