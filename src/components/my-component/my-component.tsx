import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  elementRef: HTMLElement;

  componentDidLoad() {
    if (!this.elementRef.localName) {
      throw new Error('The element does not have a local name');
    }
  }

  render() {
    return <div ref={el => (this.elementRef = el)}>Hello, World!</div>;
  }
}
