import React from "react";

import { useUser } from "../session/hooks";

import Loading from "./screens/Loading";
import api from "./resources";

const ProjectContext = React.createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = React.useState([]);
  const [status, setStatus] = React.useState("init");
  const user = useUser();

  function addDonation(project) {
    return api.addDonation(user, project);
  }

  const state = { projects };
  const actions = { addDonation };

  React.useEffect(
    () =>
      api.onChange(projects => {
        setProjects(projects);
        setStatus("resolved");
      }),
    []
  );

  if (status === "init") return <Loading />;

  return <ProjectContext.Provider value={{ state, actions }}>{children}</ProjectContext.Provider>;
};

export { ProjectContext as default, ProjectProvider as Provider };
