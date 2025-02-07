import React from 'react'
import componentsMap from './config/componentsMap';

const PageRenderer = ({ layout }) => {
  return (
    <div>
      {layout.map((item, index) => {
        const { component, props } = item;
        const Component = componentsMap[component];
        if (!Component) {
          console.warn(`Componente ${component} não encontrado.`);
          return null;
        }
        return <Component key={index} {...props} />;
      })}
    </div>
  )
}

export default PageRenderer