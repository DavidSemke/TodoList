const todo = (() => {
  const priorities = ["Low", "Mid", "High"];
  const maxDepth = 1;
  const projectList = [];
  let selectedProjectIndex = null;

  // todo items could be extended to have their own todo list
  // Parameter project can be null or another TodoItem
  function TodoItem(title, descrip = null, dueDate = null) {
    // title also serves as ID
    let _title = title;
    let _descrip = descrip;
    let _dueDate = dueDate;
    let _priority = "Low";
    let _project = null;
    const _todoList = [];
    let _depth = 0;
    let _complete = false;

    function getTitle() {
      return _title;
    }

    function setTitle(newTitle) {
      // not yet assigned to a project, so title need not be
      // checked for uniqueness
      if (!_project && !isRootProject()) {
        _title = newTitle;
        return;
      }

      let siblings = null;

      if (_project) {
        siblings = _project.getTodoList();
      } else {
        siblings = projectList;
      }

      for (const sibling of siblings) {
        const siblingTitle = sibling.getTitle().toUpperCase();
        const title = newTitle.toUpperCase();

        if (siblingTitle === title) {
          throw `New title '${newTitle}' already exists.`;
        }
      }

      _title = newTitle;
    }

    function getDescrip() {
      return _descrip;
    }

    function setDescrip(newDescrip) {
      _descrip = newDescrip;
    }

    function getDueDate() {
      return _dueDate;
    }

    function setDueDate(newDueDate) {
      _dueDate = newDueDate;
    }

    function getPriority() {
      return _priority;
    }

    function setPriority(newPriority) {
      if (!priorities.includes(newPriority)) {
        throw `'${newPriority}' is an invalid priority.`;
      }

      _priority = newPriority;
    }

    function getProject() {
      return _project;
    }

    function setProject(todoItem) {
      for (const child of todoItem.getTodoList()) {
        if (equals(child)) {
          _project = todoItem;
          _depth = todoItem.getDepth() + 1;
          return;
        }
      }

      throw (
        `Tried to set project of TodoItem '${_title}' to ` +
        `'${todoItem.getTitle()}' without adding to todoList first.`
      );
    }

    function getTodoList() {
      return _todoList;
    }

    function getDepth() {
      return _depth;
    }

    function getComplete() {
      return _complete;
    }

    function setComplete(newComplete) {
      _complete = newComplete;
    }

    function isRootProject() {
      for (const project of projectList) {
        if (equals(project)) {
          return true;
        }
      }

      return false;
    }

    function addToTodoList(todoItem) {
      if (!_project && !isRootProject()) {
        throw (
          `Tried to add to todoList of TodoItem '${_title}' ` +
          "without defining project or making it a root project."
        );
      }

      if (_depth === maxDepth) {
        throw (
          `Tried to add to TodoItem '${_title}', ` + "which is at max depth."
        );
      }

      const title = todoItem.getTitle().toUpperCase();

      for (const item of _todoList) {
        const existingTitle = item.getTitle().toUpperCase();

        if (title === existingTitle) {
          throw (
            `Tried to add TodoItem '${todoItem.getTitle()}' ` +
            `to todoList of TodoItem '${_title}', but title ` +
            "already exists."
          );
        }
      }

      _todoList.push(todoItem);
    }

    function removeFromTodoList(index) {
      _todoList.splice(index, 1);
    }

    function equals(todoItem) {
      let project = _project;
      let otherProject = todoItem.getProject();

      let title = _title.toUpperCase();
      let otherTitle = todoItem.getTitle().toUpperCase();

      while (title === otherTitle && title) {
        title = null;
        otherTitle = null;

        if (project) {
          title = project.getTitle().toUpperCase();
          project = project.getProject();
        }

        if (otherProject) {
          otherTitle = otherProject.getTitle().toUpperCase();
          otherProject = otherProject.getProject();
        }
      }

      return title === otherTitle;
    }

    return {
      getTitle,
      setTitle,
      getDescrip,
      setDescrip,
      getDueDate,
      setDueDate,
      getPriority,
      setPriority,
      getProject,
      setProject,
      getTodoList,
      getDepth,
      getComplete,
      setComplete,
      addToTodoList,
      removeFromTodoList,
    };
  }

  function getProjectList() {
    return projectList;
  }

  function addToProjectList(todoItem) {
    const title = todoItem.getTitle().toUpperCase();

    for (const item of projectList) {
      const existingTitle = item.getTitle().toUpperCase();

      if (title === existingTitle) {
        throw (
          `Tried to add TodoItem '${todoItem.getTitle()}' ` +
          "to projectList, but title already exists."
        );
      }
    }

    projectList.push(todoItem);
  }

  function removeFromProjectList(index) {
    projectList.splice(index, 1);
  }

  function getSelectedProjectIndex() {
    return selectedProjectIndex;
  }

  function setSelectedProjectIndex(index) {
    selectedProjectIndex = index;
  }

  function getPriorities() {
    return priorities;
  }

  return {
    TodoItem,
    getProjectList,
    addToProjectList,
    removeFromProjectList,
    getSelectedProjectIndex,
    setSelectedProjectIndex,
    getPriorities,
  };
})();

export { todo };
