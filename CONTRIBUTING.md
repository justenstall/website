# Contributing

## Developing

- The site is maintained as an [MkDocs] website using the [Material for MkDocs] theme
  - See [`mkdocs.yml`](./mkdocs.yml)
- The site source is contained in the [`src/`](./src/) directory
  - This is configured in [`mkdocs.yml`](./mkdocs.yml)
  - Differed from the default (`docs/`) to reflect that this site is not documentation
- Dependencies are managed using [Poetry] for Python
  - See [`pyproject.toml`](./pyproject.toml)
- Common tasks are defined using [Taskfile](https://taskfile.dev/)
  - See [`Taskfile.yml`](./Taskfile.yml)

## Testing

The site can be tested locally using `mkdocs serve` once Python dependencies are installed.

```sh
# Install Python dependencies
poetry install --no-root

# Serve the site locally
poetry run mkdocs serve
```

The "serve" task can automatically perform these steps.

```sh
# Run the "serve" task
task serve
```

## Deploying

The site is deployed to a CloudFlare-managed domain using [CloudFlare Pages]. The guide [Deploy an MkDocs site to CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-mkdocs-site/) was useful for setting this deployment up.

[MkDocs]: <https://www.mkdocs.org/> "MkDocs"
[Material for MkDocs]: <https://squidfunk.github.io/mkdocs-material/> "Material for MkDocs"
[Poetry]: <https://python-poetry.org/> "Poetry"
[CloudFlare Pages]: <https://developers.cloudflare.com/pages/> "CloudFlare Pages"
