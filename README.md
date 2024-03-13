# myudakk portfolio site

Hello, welcome. This is my portfolio site!, or digital garden, or whatever. It's built with [Next js](https://nextjs.org/), and uses [Sanity IO](https://sanity.io) to edit the blog!

## See the site

[![Thumbnail myudak site](https://github.com/myudak/portofolio-next/assets/69108782/903ddd69-8388-4d2b-9510-59d6d747f7e4)](https://myudak.site)
[https://myudak.site](https://myudak.site)

## Stack

- [Next.js](https://nextjs.org/) - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- [Chakra UI](https://chakra-ui.com/) - A simple, modular and accessible component library for React
- [Three.js](https://threejs.org/) - 3D library for JavaScript
- [Framer Motion](https://www.framer.com/motion/) - An animation library for React

## Project structure

```
$PROJECT_ROOT
├───public
├───src
│   ├───app
│   │   # Page files
│   │   ├───images
│   │   ├───posts
│   │   ├───works
│   ├───components
│   |   # React component files
│   │   ├───card
│   │   ├───footer
│   │   ├───navbar
│   │   │   ├───navLink
│   │   │   └───navMobile
│   │   ├───pagination
│   │   ├───section
│   │   ├───splashScreen
│   │   ├───themeSwitcher
│   │   └───ui
│   ├───lib
│   |   # Non-react modules
│   └───utils
        # Utility functions and helper modules
```

## Run it yourself

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:3000`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |
