import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'gcds-details',
  styleUrl: 'gcds-details.css',
  shadow: true,
})
export class GcdsDetails {
  @Element() el: HTMLElement;

  /**
   * The details title summarizes the panel content.
   */
  @Prop() detailsTitle!: string;

  /**
   * Defines if the details panel is open by default or not.
   */
  @Prop() open?: boolean;

  render() {
    const { detailsTitle, open } = this;

    return (
      <Host>
        <details class="gcds-details" open={open ? true : false}>
          <summary><p>{ detailsTitle }</p></summary>
          <div class="details-panel">
            <slot></slot>
          </div>
        </details>
      </Host>
    );
  }
}