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

### Implementation Notes

- `content/about/index.md` is an example of a content page.
- `content/blog/` has the blog posts but really they can live in any directory. They need only the `posts` tag to be included in the blog posts [collection](https://www.11ty.dev/docs/collections/).
- Use the `eleventyNavigation` key (via the [Eleventy Navigation plugin](https://www.11ty.dev/docs/plugins/navigation/)) in your front matter to add a template to the top level site navigation. This is in use on `content/index.njk` and `content/about/index.md`.
- Content can be in _any template format_ (blog posts needn’t exclusively be markdown, for example). Configure your project’s supported templates in `eleventy.config.js` -> `templateFormats`.
- The `public` folder in your input directory will be copied to the output folder (via `addPassthroughCopy` in the `eleventy.config.js` file). This means `./public/css/*` will live at `./_site/css/*` after your build completes.
- Provides two content feeds:
  - `content/feed/feed.njk`
  - `content/feed/json.njk`
- This project uses three [Eleventy Layouts](https://www.11ty.dev/docs/layouts/):
  - `_includes/layouts/base.njk`: the top level HTML structure
  - `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  - `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
- `_includes/postslist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `content/index.njk` has an example of how to use it.

#### Content Security Policy

If your site enforces a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (as public-facing sites should), you have a few choices (pick one):

1. In `base.njk`, remove `<style>{% getBundle "css" %}</style>` and uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`
2. Configure the server with the CSP directive `style-src: 'unsafe-inline'` (less secure).

## Deploying

<!-- The site is deployed to a CloudFlare-managed domain using [CloudFlare Pages](https://developers.cloudflare.com/pages/). The guide [Deploy an MkDocs site to CloudFlare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-an-mkdocs-site/) was useful for setting this deployment up. -->

- The site is deployed to [GitHub Pages] using [GitHub Actions]
- The custom domain "justenstall.com" is managed by CloudFlare

To trigger a deployment

[MkDocs]: <https://www.mkdocs.org/> "MkDocs"
[Material for MkDocs]: <https://squidfunk.github.io/mkdocs-material/> "Material for MkDocs"
[Poetry]: <https://python-poetry.org/> "Poetry"
[GitHub Pages]: <https://docs.github.com/en/pages> "GitHub Pages"
[GitHub Actions]: <https://docs.github.com/en/actions> "GitHub Actions"

## Troubleshooting

- macOS systems can show error for a missing "cairo" library, with various names. `brew install cairo` should resolve the errors.

The repository uses Git LFS for image storage, if you have not installed and set up Git LFS before cloning the repository, the images will download incorrectly.

> The easiest way to resolve it is to delete the clone and re-clone the project.
>
> There is an open issue for a more elegant solution from Git LFS: [git-lfs/issues/325](https://github.com/git-lfs/git-lfs/issues/325)
