import { useEffect, useState } from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";
import PageBanner from "@components/PageBanner";

const ProjectsGrid = dynamic(() => import("@components/ProjectsGrid"), {
  ssr: false,
});

const ProjectData = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    const fetchProjects = async () => {
      const response = await fetch("/project.json"); // JSON file path in the public folder
      const data = await response.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <>
     

      <ProjectsGrid projects={projects} layout={"grid"} sideFilter />
    </>
  );
};

export default ProjectData;
