# Contributing

<!-- ## Developing -->

<!-- - The site is maintained as an [MkDocs] website using the [Material for MkDocs] theme
  - See [`mkdocs.yml`](./mkdocs.yml)
- The site source is contained in the [`src/`](./src/) directory
  - This is configured in [`mkdocs.yml`](./mkdocs.yml)
  - Differed from the default (`docs/`) to reflect that this site is not documentation
- Dependencies are managed using [Poetry] for Python
  - See [`pyproject.toml`](./pyproject.toml)
- Common tasks are defined using [Taskfile](https://taskfile.dev/)
  - See [`Taskfile.yml`](./Taskfile.yml) -->

## Commands

Replace pnpm with your choice of npm / yarn

| Command          | Action                                                         |
| :--------------- | :------------------------------------------------------------- |
| `pnpm install`   | Installs dependencies                                          |
| `pnpm dev`       | Starts local dev server at `localhost:3000`                    |
| `pnpm build`     | Build your production site to `./dist/`                        |
| `pnpm postbuild` | Pagefind script to build the static search of your blog posts  |
| `pnpm preview`   | Preview your build locally, before deploying                   |
| `pnpm sync`      | Generate types based on your config in `src/content/config.ts` |

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

<!-- The site is deployed to a CloudFlare-managed domain using [CloudFlare Pages](https://developers.cloudflare.com/pages/). The guide [Deploy an MkDocs site to CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-mkdocs-site/) was useful for setting this deployment up. -->

- The site is deployed to [GitHub Pages] using [GitHub Actions]
- The custom domain "justenstall.com" is managed by CloudFlare

To trigger a deployment

<!-- [MkDocs]: <https://www.mkdocs.org/> "MkDocs"
[Material for MkDocs]: <https://squidfunk.github.io/mkdocs-material/> "Material for MkDocs"
[Poetry]: <https://python-poetry.org/> "Poetry" -->
[GitHub Pages]: <https://docs.github.com/en/pages> "GitHub Pages"
[GitHub Actions]: <https://docs.github.com/en/actions> "GitHub Actions"

## Troubleshooting

- macOS systems can show error for a missing "cairo" library, with various names. `brew install cairo` should resolve the errors.

The repository uses Git LFS for image storage, if you have not installed and set up Git LFS before cloning the repository, the images will download incorrectly.

> The easiest way to resolve it is to delete the clone and re-clone the project.
>
> There is an open issue for a more elegant solution from Git LFS: [git-lfs/issues/325](https://github.com/git-lfs/git-lfs/issues/325)
