# Pokemon
Every case is handled by using an external API. Data isn't stored in bulk manner and we don't operate on those stored results. Everything has it's own API call and handled using API.

1. Cards Display:
    This projects displays pokemon cards that are fetched from an external API and displays the pokemon cards.
    Once the API response comes, again calls are made for the respective pokemon and then the data is rendered once all of   
    the data is ready to be displayed.

2. Search by name or ID:
   There is search implemented which uses the search API and gets results based on the search.

3. Pagination using API:
   Pagination of the cards is implemented by making an external API call for each set of new results/ each page.

4. Modal Data using API:
   A modal is created and data is fetched only on clicking of the 'i' icon of the pokemon.
   Modal is not opened untill there is no API result.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
