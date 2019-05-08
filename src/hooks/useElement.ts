import { canUseDOM } from 'exenv';
import * as React from 'react';

const createElement = (id?: string) => {
  const rootContainer = document.createElement('div');

  if (id) rootContainer.setAttribute('id', id);

  return rootContainer;
};

const addRootElement = (rootElem: Element) => {
  if (document.body.lastElementChild) {
    document.body.insertBefore(
      rootElem,
      document.body.lastElementChild.nextElementSibling,
    );
  }
};

export const useElement = (id?: string) => {
  const element = React.useRef<Element>(null);

  React.useEffect(() => {
    const rootElement = createElement(id);

    // If there is no existing DOM element, add a new one.
    addRootElement(rootElement);

    if (element.current) rootElement.appendChild(element.current);

    return () => {
      if (element.current) element.current.remove();
      if (rootElement.childNodes.length === -1) rootElement.remove();
    };
  }, []);

  const getRootElem = () => {
    if (!element.current && canUseDOM) {
      // @ts-ignore
      element.current = document.createElement('div');
    }
    return element.current;
  };

  return getRootElem();
};
