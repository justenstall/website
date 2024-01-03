# Justen Stall's Website

My portfolio and blog website.

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

To test the site locally, install the dependencies using [Poetry] and run the .

## Deploying

The site is deployed to a CloudFlare-managed domain using [CloudFlare Pages]. The guide [Deploy an MkDocs site to CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-mkdocs-site/) was useful for setting this deployment up.

[MkDocs]: <https://www.mkdocs.org/> "MkDocs"
[Material for MkDocs]: <https://squidfunk.github.io/mkdocs-material/> "Material for MkDocs"
[Poetry]: <https://python-poetry.org/> "Poetry"
[CloudFlare Pages]: <https://developers.cloudflare.com/pages/> "CloudFlare Pages"
