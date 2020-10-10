# Automatic Tailwind CSS CDN Builds For Rapid Prototyping

A simple, automated tool for creating custom Tailwind CSS builds for CDN access. Use this for development when you don't want to deal with setting up a builder right away.

> ⚠ It's required to fork this repo.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/KevinBatdorf/tailwind-custom-cdn?label=version&style=flat-square)

## How it works
1. Fork this repo
1. Commit to master a single, standard Tailwind CSS config file placed inside the `configs/` directory.
1. If you only commit a single file, the repo will compile that one config. If you commit multiple files, then the entire config folder will be rebuilt (useful also for when dependabot commits are made to update tailwind)
1. That's it!

## How to use
The system will auto release on any push to master. After a few minutes, you should be able to use your script in the following way:

> Finding this project useful? Support it by [sponsoring me](https://github.com/sponsors/KevinBatdorf).

```html
<!-- Always keep your build current against the most recent Tailwind CSS version -->
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/tailwind-custom-cdn/builds/example.min.css"></script>

<!-- Tie to the current version (use the tag that was created during the build) -->
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/tailwind-custom-cdn@v1.8.10-0-1-0-282636193-24/builds/example.min.css"></script>
```

## FAQ
**Question:** Can I use this in production?

**Answer:** I wouldn't. For production you will want to use a build tool so that you can purge your unused CSS.

##
**Question:** Do I commit to your repo?

**Answer:** Only if you spot a bug or have an improvement. Otherwise you should fork this and use it on your own account.

##
**Question:** What about plugins?

**Answer:** Plugins aren't supported now, and I haven't looked into it. If there is some demand for plugins then I'll look into adding plugin support.

##
**Question:** Can others use my config file?

**Answer:** The repo needs to be public, so yes. If you're using this you should be aware of that and not include anything sensitive in your config.

##
**Question:** Is the cache working?

**Answer:** Sometimes jsDelivr will keep the cache longer depending on when the previous tag was made. So usually you just need to wait a short while longer.
