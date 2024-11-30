import template from './ctp-preview.component.html';
import * as styles from './ctp-preview.component.css';

import WebComponent from "~/web-component.core";
import type { IWebComponentWrapper } from "~/web-component.core";
import { HTMLString } from 'models/components';


class PreviewWrapper implements IWebComponentWrapper {
  public template: HTMLString<null> = null;

  constructor() {
    this.template = template;
  }
}

export class PreviewWebComponent extends WebComponent {
  constructor() {
    super(
      new PreviewWrapper(),
    );
  }
}