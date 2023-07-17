# Project Explanation

## Project Structure

- assets/main.css: Assets separated in a separate folder, you can use scoped style method, but as for basic CSS style such as width, margin, etc i put it in `main.css`. For specific CSS , use scoped style method in separate components or layouts

- components/: It holds global component and oftenly used components such as Modal, Card, Carousel, Navbar etc. It need on separate folder so it can be easily maintanable and scalable.

- layouts/: Folder for different kind of layout. Its important when we scale our application, we need different kind of layout such as user access , user auth etc.

# Data Fetching Method

I use dollar fetch or `$fetch` in this application for data fetching method, mainly because its lightweight, and easy to use and to learn. And also to avoid cache bug by using `useFetch`

## UX Approach

- This application use skeleton loader for when fetching data finished, it can give user a visual feedback.


## Naming method

- For `components/` i use `PascalCase` naming convention
- for `function` , `variables` i use `camelCase`

### Using of Nuxt Config

Config such as `BASE_URL` , `apiSecret` set in nuxt config so its easier to maintained and reducing repetitive writing.
