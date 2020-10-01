# Automatic Tailwind CSS CND Builds For Rapid Prototyping

A simple, automated tool for creating custom Tailwind CSS builds for CDN access. Use this for development when you don't want to deal with setting up a builder right away.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/KevinBatdorf/tailwind-custom-cdn?label=version&style=flat-square)

## How it works
1. Submit a PR with a config file under the `configs/` directory. You may use subfolders if you wish. If you add any other file the PR will fail. The PR should have only a single, standard Tailwind CSS config file.
2. If all goes well, The PR will auto merge and a Release will be created.
3. Every time there is a new release from Tailwind CSS, a new build will be created
> ⚠ Be polite and keep the file names appropriate enough. We're all adults here :)

## How to use
The system will auto release on any push to master. After a few minutes, you should be able to use your script in the following way:

> Finding this project useful? Support it by [sponsoring me](https://github.com/sponsors/KevinBatdorf).

```html
<!-- Always stay current -->
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/tailwind-custom-cdn/builds/example.min.css"></script>

<!-- Tie to a specific Tailwind CSS version -->
<script src="https://cdn.jsdelivr.net/gh/kevinbatdorf/tailwind-custom-cdn@t1.8/builds/example.min.css"></script>
```


## FAQ
**Question:** Can I use this in production?

**Answer:** I wouldn't. For production you will want to use a build tool so that you can purge your unused CSS.

##
**Question:** Help! I made a mistake!

**Answer:** Just open a PR with the fix and I'll delete the original file so that the system will allow for the re-build. Be sure to tag me as I may not be monitoring everything here. Or you can just push a new config file with a different name.

##
**Question:** What about plugins?

**Answer:** Plugins aren't supported now, and I haven't looked into it. If there is some demand for plugins then I'll look into adding plugin support.
