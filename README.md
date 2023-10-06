# Modal Component

The Modal component allows you to create customizable modal dialogs for your React applications.

## Prerequisites

- [NodeJS (**version v20.0.0 or higher**)](https://nodejs.org/en/)
- [npm (**v9.6.4 or higher**)](https://www.npmjs.com/)
- [react (**version ^18.2.0 or higher**)](https://react.dev/)

## Installation

You can install this component via npm:

`npm install maximez_modal`

## Usage

# Import the component

`import { Modal } from 'maximez_modal';`

# Include the Modal componentn in your JSX

```
<Modal
  closeModal={closeModalFunction}
  maxWidth={number}
  modalBackgroundColor={string}
  iconColor={string}
  hoveredIconBackgroundColor={string}>
  {/* Content for your modal */}
</Modal>
```

# Customiwe the component by passing props

- `closeModal`: A function to close the modal.
- `maxWidth`: The maximum width of the modal.
- `modalBackgroundColor`: The background color of the modal.
- `iconColor`: The color of the close icon.
- `hoveredIconBackgroundColor`: The background color of the close icon on hover.
- `modalBackground`: The background color behind the modal (light or dark).
