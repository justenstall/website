---
date: 2023-11-13
authors:
  - justenstall
description: >
  A test blog post
categories:
  - General
---

# My First Blog Post

Testing the blog feature.

```yaml
# yaml-language-server: $schema=https://squidfunk.github.io/mkdocs-material/schema.json
site_name: Justen Stall
site_description: |
  Justen Stall's portfolio and blog.
site_author: Justen Stall
site_url: https://justenstall.com
repo_name: justenstall/justenstall.github.io
edit_uri: ""
copyright: Copyright © 2023 Justen Stall

home:
  image: assets/justenstall.jpg
  tagline: Justen Stall
  description: |
    Data Science Engineer at the University of Dayton Research Institute.

theme:
  name: material
  logo: assets/favicon-t-white-black.png
  favicon: assets/favicon-fullres.png
  language: en
  font:
    text: Inter
    code: DM Mono
  custom_dir: docs/theme
  icon:
    repo: fontawesome/brands/git-alt
  features:
    - content.code.copy
    - navigation.sections
    - navigation.top
    - navigation.tabs
    - navigation.indexes

extra:
  social:
    - icon: fontawesome/brands/square-x-twitter
      link: https://x.com/justenstall
    - icon: fontawesome/brands/linkedin
      link: https://linkedin.com/in/justenstall
    - icon: fontawesome/brands/github
      link: https://github.com/justenstall

extra_css:
  - stylesheets/theme-colors.css

docs_dir: docs
plugins:
  - blog:
      draft_if_future_date: true
      categories_allowed:
        - General
  - social
  # - rss:
  #     enabled: !ENV [CI, false]
  #     match_path: blog/posts/.*
  #     date_from_meta:
  #       as_creation: date
  #     categories:
  #       - categories
  #       - tags
# - glightbox
# - blog:
#     post_excerpt: required
#     post_url_date_format: yyyy
#     archive_url_format: "{date}"
#     pagination_per_page: 5
# markdown_extensions:
#   - attr_list
#   - md_in_html
#   - admonition
#   - meta
#   - codehilite
#   - pymdownx.tilde
#   - pymdownx.progressbar
#   - pymdownx.tasklist
#   - pymdownx.superfences
#   - pymdownx.tabbed:
#       alternate_style: true
#   - pymdownx.superfences:
#       custom_fences:
#         - name: mermaid
#           class: mermaid
#           format: !!python/name:pymdownx.superfences.fence_code_format
#   - pymdownx.emoji:
#       emoji_index: !!python/name:material.extensions.emoji.twemoji
#       emoji_generator: !!python/name:material.extensions.emoji.to_svg
```