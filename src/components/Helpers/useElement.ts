import * as React from 'react';

const createRootElement = (id: string) => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
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

export const useElement = (id: string) => {
  const rootElemRef = React.useRef<Element>(null);

  React.useEffect(() => {
    const parentElem = createRootElement(id);

    // If there is no existing DOM element, add a new one.
    addRootElement(parentElem);

    if (rootElemRef.current) {
      parentElem.appendChild(rootElemRef.current);
    }

    return () => {
      if (rootElemRef.current) rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, []);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      // @ts-ignore
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};
