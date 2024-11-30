const components = {
  "ctp-preview": HTMLElement,
};

export type TComponentName = keyof typeof components;
export type TComponents = {[key in TComponentName]?: typeof components[key]};

export type HTMLString<T> = string | T;