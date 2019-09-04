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

export async function generate(tag: string, props: {key: string, value: any}[] = null) {
  const ce = document.createElement(tag);
  if (props) {
    props.forEach(({ key, value }) => {
      ce.setAttribute(key, value);
    });
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
