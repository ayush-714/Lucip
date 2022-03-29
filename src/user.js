// import "../styles.css";
// import JSONDATA from "../mockData.json";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import ProjectService from "../services/ProjectService";
// import { LoremPicsum } from "react-lorem-picsum";
import axios from "axios";

export default function User() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getAllProjects();
  }, []);

  const getAllProjects = () => {
    axios
      .get("https://lucidfinal.herokuapp.com/api/teachers/getProjects", {})
      .then((response) => {
        const proj = response.data;
        setProjects(proj._materializedDocs);
        // console.log(proj._materializedDocs);
        // proj._materializedDocs.map((it) =>
        //   console.log(
        //     it._fieldsProto.name.stringValue +
        //       " & " +
        //       it._fieldsProto.by.stringValue +
        //       " & " +
        //       it._fieldsProto.details.stringValue
        //   )
        // );
      });
    // ProjectService.getAllProjects()
    //   .then((response) => {
    //     setProjects(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <h2 className="text-center"> Projects </h2>
      <table className="table table-bordered table-striped">
        <thead>
          {/* <th> Id </th> */}
          <th> Project Name </th>
          <th> Professor </th>
          <th> Description </th>
          <th> Actions </th>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._fieldsProto.name.stringValue}>
              {/* <td> {project.id} </td> */}
              <td> {project._fieldsProto.name.stringValue} </td>
              <td>{project._fieldsProto.by.stringValue}</td>
              <td>{project._fieldsProto.details.stringValue}</td>
              <td>
                <Link
                  className="btn btn-info"
                  to={`/apply/${project._fieldsProto.name.stringValue}/${project._ref._path.segments[1]}`}
                >
                  Apply
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
