# Zoo Animal Catalog

A web application that helps a zoo keep track of their animals. Design focus was given to making this application accessible to people with impaired vision.

## Details
Zoo Animal Catalog allows zoo keepers to manage their animal collection. Animals are logged into the system with various details including: species, name, date of birth, age-characteristic, diet, location, number of caretakers, sex, likes, dislikes, and image-icons. Zoo keepers can add new animals to the system as well as update information about existing animals. The application also allows users to either see a list of all animals or sort by certain specifications, such as location or age-characteristic. To make this application more accessible to the visually impaired, attention was given to text size and font, color contrast, required alternative text for images, and avoidance of using images as primary tools for navigation and discovery.  


### Planning

1. Models
  * Animal (species, name, dob, age-characteristic, diet, location, caretakers, sex, likes, dislikes, imageUrl, imageAlt)
2. Child Components
  * animal-list
  * animal-edit
  * animal-new
3. Pipes
  * location.pipe
  * age.pipe

## Prerequisites

You will need the following items properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)


## Installation

* $`git clone <https://github.com/stormihoebe/zoo-animal-catalog-angular>`
* $`cd zoo-animal-catalog-angular`
* $`npm install`
* $`bower install`

## Running
* `gulp build`
* `gulp serve`
* Visit your app at [http://localhost:3000](http://localhost:3000).

### Support and contact details

Contact Stormi at Epicodus
stormihoebe@gmail.com

### License

Copyright (c) 2017 **_MIT License_**
