export function waitForComponentToRender(tag: string): Promise<Element> {
  return new Promise(resolve => {
    function requestComponent() {
      const element = document.querySelector(tag);
      if (element) {
        resolve(element);
      } else {
        window.requestAnimationFrame(requestComponent);
      }
    }
    requestComponent();
  });
}

export async function generate(tag: string, options: GenerateOptions = null) {
  const ce = document.createElement(tag);
  if (options && options.props) {
    options.props.forEach(({ key, value }) => {
      ce.setAttribute(key, value);
    });
  }
  if (options && options.content) {
    ce.innerHTML = options.content;
  }
  document.body.append(ce);
  const el = await waitForComponentToRender(tag);
  return el;
}

export function rm(node: Node) {
  document.body.removeChild(node);
}

export function select(el: Element, tagName: string): Element {
  return el.shadowRoot.querySelector(tagName);
}

export function tick(ms = 300) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function newEvent(eventName: string, triggerEvent: string, el: Element, dispatcher: HTMLElement) {
  let called = false;
  el.addEventListener(eventName, () => {
    called = true;
  })

  dispatcher.dispatchEvent(new Event(triggerEvent));
  return called;
}

class GenerateOptions {
  props?: {key: string, value: any}[];
  content?: string;
}
