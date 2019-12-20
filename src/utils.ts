export function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

export function $id(id: string): HTMLElement {
  return document.getElementById(id);
}
