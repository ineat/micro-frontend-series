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
