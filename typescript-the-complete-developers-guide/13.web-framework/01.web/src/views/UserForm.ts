import { User } from '../modules/models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on('change', () => this.render());
  }

  onSubmit(): void {
    console.log('SUBMIT!');
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input') as HTMLInputElement;

    const name = input.value;
    this.model.set({ name });
  };

  setInitialFormValues = (): void => {
    const input = this.parent.querySelector('input') as HTMLInputElement;
    input.value = this.model.get('name') || '';
  };

  eventsMap: { [key: string]: () => void } = {
    'click:.set-age': this.model.setRandomAge,
    'click:.set-name': this.onSetNameClick,
  };

  bindEvents(fragments: DocumentFragment): void {
    const eventsMap = this.eventsMap;

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragments.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  template(): string {
    return `
      <div>
        <h2>User Form</h2>
        <div>User: ${this.model.get('name')}</div>
        <div>Age: ${this.model.get('age')}</div>
        <div>
          <label style="display: block;">User name</label>
          <input />
          <button class="set-name">Set name</button>
        </div>
        <button class="set-age">Set Random Age</button>
        <button>Submit</button>
      </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateContent = document.createElement('template');
    templateContent.innerHTML = this.template();
    this.bindEvents(templateContent.content);
    this.parent.append(templateContent.content);
    this.setInitialFormValues();
  }
}
