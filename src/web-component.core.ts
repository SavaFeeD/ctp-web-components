import { HTMLString } from "models/components";
import { IEmitter } from "models/events";

export interface IWebComponentWrapper {
  template: HTMLString<null>;
  emitter?: () => IEmitter;
}

export default class WebComponent extends HTMLElement {
  constructor(
    private WebComponentWrapper: IWebComponentWrapper
  ) {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });

    this.subscribeFromWrapper();

    const HTMLTemplate = this.serialize('default');

    shadowRoot.appendChild(HTMLTemplate);
  }

  private subscribeFromWrapper() {
    if (!!this.WebComponentWrapper?.emitter) {
      const emitter = this.WebComponentWrapper.emitter();
      emitter.eventList.forEach((event) => {
        this.addEventListener(event.type, event.action);
      });
    }
  }

  serialize(method: 'default'): HTMLElement {
    const template = {
      base: null as HTMLElement | null,
      HTMLString: this.WebComponentWrapper.template as string | null,
    };

    if (method === 'default') {
      template.base = document.createElement('div');
    }

    const regex= {
      variable: /({{).*?(}})/mg, // {{ var }}
      action: /(\[{).*?(}\])/mg,  // [{ action() }]
      variableWithTag: /(<).*?(>).*?({{).*?(}}).*?(<\/).*?(>)/mg, // <tag attr?>{{ var }}</tag>
    };

    const variables = new Proxy({}, {
      get(target, prop, receiver) {
        const data = target[prop];
        return data.staticBefore + data.value + data.staticAfter;
      },
      set(obj, prop, data) {
        const schema = {
          staticBefore: data.staticBefore || null,
          staticAfter: data.staticAfter || null,
          value: data.value || null,
        };
        obj[prop] = schema;
        return true;
      }
    });
    const actions = {};

    const vars = template.HTMLString.match(regex['variableWithTag']);
    console.log(vars);

    template.base.innerHTML = template.HTMLString;

    return template.base;
  }
}