# imageCarouselService

#### A replication of the Allbirds shop media component

> imageCarouselService contains a hoverable grid, a full-screen modal carousel, and product descriptions

## teamSloan Organization Repository

  - https://github.com/teamSloanAllBirds

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [React Component Breakdown](#React-Component-Breakdown)

## Usage

> This component is designed to be used with the productOptions and productReviews components to create a replica of the Allbirds site.

## Requirements

- Node > 6.13.0

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding the Database

Inside the ./server/database directory, modify the provided config.js to resemble:

```sh
module.exports = {user: 'YOUR_USERNAME_HERE', multipleStatements: true};
```

```sh
npm run seed-db
```

### Starting the server

From within the root directory:

Run webpack:
```sh
npm run build
```

Run the nodemon server:
```sh
npm run start
```

# React Component Breakdown

## App Component

### Child React Components
  - HoverGrid
  - CarouselModal
  - MidPageImages

### State
  - urls - array containing links AWS-stored images for given product ID
  - descriptions - array containing descriptions for given product ID
  - modal - boolean indicating whether modal is open
  - current - string holding currently selected image url
  - currentIndex - int holding index for currently selected image
  - nextIndex - int holding index for next image
  - previousIndex - int holding index for previous image

### Methods
  - componentDidMount()
    - Invoked when component mounts
    - Fetches image urls for product ID 1

  - toggleModal()
    - Toggles a boolean in state to open/close modal

  - fetchId(id)
    - Sends an axios request to the server with a provided ID
      - Then updates state with the returned urls and descriptions

  - selectImage(current)
    - Manages the currentIndex, nextIndex, and prevIndex in state when an image is clicked

## HoverGrid Component

### State
  - N/A

### Methods
  - clickHandler(e)
    - Calls selectImage on the corresponding image when clicked

## CarouselModal Component

### State
  - xHover - boolean indicating whether the xIcon is hovered
  - counter - int catching if the xIcon has been rotated yet to prevent rotating on first click
  - modalMeasurement - int determining size of square modal pop-up

### Methods
  - componentDidMount()
    - Invoked when component mounts
    - Adds event listener to check if window has been resized
      - calls updateDimension()

  - updateDimensions()
    - Adjusts modalMeasurement to be 90% of window height or width (depending on which is smaller)

  - hoverHandler()
    - Toggles xHover in state and increases counter

  - nextImage()
    - Called from the right arrow onClick, this function calls selectImage either on the next image or the first one, depending on if the carousel is displaying the last image

  - prevImage()
    - Called from the left arrow onClick, this function calls selectImage either on the previous image or the last one, depending on if the carousel is displaying the first image

  - pickFromDot()
    - Called from the dot onClick, this function calls selectImage on the the image of the corresponding dot

## MidPageImages Component

### Overview
  - Stateless component that dynamically renders and zooms in on images from the parent state