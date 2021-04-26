# SWAPI - a StarWars API running locally and used by micro-frontend application

## Getting Started
Clone folder or repository

Install dependencies

```bash
npm install
# or
yarn install
```

pre-charge database

```bash
npm run prestart:api
# or
yarn prestart:api
```

Start StarWars API

```bash
npm run start:api
# or
yarn start:api
```

Now if you go to [http://localhost:3010/people](http://localhost:3010/people), you'll get

```json
[
  {
    "id": "1",
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "planet": 1
  },
  {
    "id": "2",
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a",
    "planet": 1
  },
...
]
```

## Available ressources
3 routes are available to get data from StarWars API

### People route
Get all people from database
```bash
GET    /people
```

This route is paginated by default and return 10 people per page

### Specie route
Get all species from database
```bash
GET    /specie
```

This route is paginated by default and return 10 species per page

### Planet route
Get all planet from database
```bash
GET    /planet
```

This route is paginated by default and return 10 planet per page

### Starship route
Get all starship from database
```bash
GET    /starship
```

This route is paginated by default and return 10 starship per page

## Paginate
Use _page and optionally _limit to paginate returned data.

In the Link header you'll get first, prev, next and last links.

```bash
GET    /people?_page=2
GET    /people?_page=2&_limit=10
```

## Filter
Use json key to filter the result

```bash
GET    /people?name=luke
```

## Sort
Add _sort and _order (ascending order by default)

```bash
GET    /people?_sort=height&_order=asc
```
## Search
Add q as query for full text search
```bash
GET    /people?q=skywal
```
