
# How to use

- Copy & Paste the `.env.example` file, rename it to `.env` and populate the `API_BASE_URL` value
- Run "docker-compose up -d" to start the dockerized development container
- Visit "localhost:3000"

# Improvements
If there was more time, I would have loved to include/extend:
- eslint config with a11y and several other stricter rules
- adding linting to a pipeline (e.g. `/.github/workflows.node.js.yml` booting up a nodejs instance and running `yarn lint`)
- More time to figure out if `getServerSideProps` was the right choice or either use `getStaticProps` with the `revalidate` option.
- build custom hooks, e.g. a Toaster to handle errors in a more UX friendly way.

You can see some of above mentioned bulletpoints implemented in another code test i did recently: https://github.com/advename/Dwarf-Code-Challenge 
