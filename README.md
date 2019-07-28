# NY Times Books App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Install modules

Please run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project structure

    ├── e2e
    ├── node_modules                # installed packages             
    ├── src                         # Source code
    │   ├── app          
    │   │   ├── components          
    │   │   │   ├── best-sellers    # Best sellers component
    │   │   │   ├── categories      # Categories component
    │   │   │   ├── page-not-found  # Page not found component
    │   │   ├── models              
    │   │   │   ├── Category        
    │   │   │   ├── book            
    │   │   ├── services            # injectors
    │   │   │   ├── books.service          
    │   ├── assets                  # public files: images/fonts/..
    │   └── environments            
    └── ...


## API used

The Books API provides information about book reviews and The New York Times Best Sellers lists. (https://developer.nytimes.com/docs/books-product/1/overview)


## Installed packages

* Angular material 8.1.1

## URLs

* ``http://localhost:4200/`` : Categories list
* ``http://localhost:4200/best-seller/:list_name_encoded`` : Category's best sellers
