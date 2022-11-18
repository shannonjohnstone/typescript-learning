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

    console.log(validateItems);
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
      console.log(title, description, people, 'user inputs!');
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
