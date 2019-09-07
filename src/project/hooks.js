import React from "react";

import ProjectContext from "./context";

export function useProjects() {
  const {
    state: { projects },
  } = React.useContext(ProjectContext);

  return projects;
}

export function useProject(id) {
  const {
    state: { projects },
    actions: { addDonation },
  } = React.useContext(ProjectContext);

  return [projects.find(project => project.id === id), (...args) => addDonation(id, ...args)];
}
