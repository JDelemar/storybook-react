class WebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const { shadowRoot } = this;
    shadowRoot.innerHTML = `
      <h2>Storybook Composition works!!!</h2>
      <p>Hosted on GitHub Pages</p>
    `;
  }
}

customElements.define('storybook-test', WebComponent);

export default {
  title: 'Web/Test',
};

const Template = (args) => {
  const template = document.createElement('storybook-test');

  return template;
};

export const Composition = Template.bind({});
Composition.args = {};
