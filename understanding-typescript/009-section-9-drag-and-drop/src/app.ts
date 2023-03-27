/* eslint-disable @typescript-eslint/no-non-null-assertion */
// This same result could be achived using an arrow function in most case
// but the purpose of the video was to practice using decorators
function autobind(_: unknown, __: unknown, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  const _descriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      return original.bind(this);
    },
  };
  return _descriptor;
}

// Project type
enum PROJECT_STATUS {
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: PROJECT_STATUS
  ) { }
}

type Listener = (items: Project[]) => void;

// Project State Management
class ProjectState {
  private listeners: Listener[] = [];
  private projects: any[] = [];
  private static instance: ProjectState;

  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      PROJECT_STATUS.ACTIVE
    );

    this.projects.push(newProject);

    for (const listenerFn of this.listeners) {
      listenerFn([...this.projects]);
    }
  }

  addListeners(listenersFn: Listener) {
    this.listeners.push(listenersFn);
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }
}

const projectState = ProjectState.getInstance();

interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(inputs: Validatable) {
  let isValid = true;
  // const value = inputs?.value?.trim();
  if (inputs.required) {
    isValid = isValid && inputs.value.toString().trim().length !== 0;
  }

  if (inputs.minLength != null && typeof inputs.value === 'string') {
    isValid = inputs.value.length > inputs.minLength;
  }

  if (inputs.maxLength != null && typeof inputs.value === 'string') {
    isValid = inputs.value.length < inputs.maxLength;
  }

  if (inputs.min != null && typeof inputs.value === 'number') {
    isValid = inputs.value >= inputs.min;
  }

  if (inputs.max != null && typeof inputs.value === 'number') {
    isValid = inputs.value <= inputs.max;
  }

  return isValid;
}

class ProjectList {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: PROJECT_STATUS.ACTIVE | PROJECT_STATUS.FINISHED) {
    this.templateElement = document.getElementById(
      'project-list'
    ) as HTMLTemplateElement;

    this.hostElement = document.getElementById('app') as HTMLDivElement;
    this.assignedProjects = [];

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLElement;
    this.element.id = `${this.type}-projects`;

    projectState.addListeners((projects: Project[]) => {
      const type = PROJECT_STATUS[this.type];
      this.assignedProjects = projects.filter(({ status }) => status === type);
      this.renderProjects();
    });

    this.attach();
    this.renderContent();
  }

  renderProjects() {
    const listElement = document.getElementById(
      `${this.type}-project-list`
    )! as HTMLUListElement;

    listElement.innerHTML = '';

    for (const item of this.assignedProjects) {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;
      listElement?.appendChild(listItem);
    }
  }

  private renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
}
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      'project-input'
    ) as HTMLTemplateElement;

    this.hostElement = document.getElementById('app') as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;

    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;

    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  @autobind
  private getUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = +this.peopleInputElement.value;

    const validateItems = [
      validate({ value: title, minLength: 3, required: true }),
      validate({ value: description, minLength: 3, required: true }),
      validate({ value: people, min: 1, max: 5, required: true }),
    ];

    if (validateItems.some((value: boolean) => !value)) {
      alert('Invalid user input, please try again');
    } else {
      return [title, description, people];
    }
  }

  @autobind
  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);

      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInputOne = new ProjectInput();
const activeProjectList = new ProjectList(PROJECT_STATUS.ACTIVE);
const unFinishedProjectList = new ProjectList(PROJECT_STATUS.FINISHED);
