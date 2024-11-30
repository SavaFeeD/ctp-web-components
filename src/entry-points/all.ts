import { PreviewWebComponent } from "@/preview/ctp-preview.component";
import { TComponentName, TComponents } from "models/components";

const components: TComponents = {
  "ctp-preview": PreviewWebComponent,
};

window.CrazyTeaParty ??= {
  // @ts-ignore
  version: VERSION,
  components: {},
};

window.CrazyTeaParty.components = components;

function registerWebComponents() {
  const customElementRegistry = window.customElements;
  Object.keys(components).forEach((componentName: TComponentName) => {
    const Component = components[componentName];
    customElementRegistry.define(componentName, Component);
  });
}

registerWebComponents();