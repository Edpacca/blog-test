---
title: Scott Logic Blog
layout: "base.njk"
summary: This blog shares Scott Logic's thoughts and ideas, covering topics across Tech, UX Design, Testing and Delivery.
---

{% for post in collections.posts %}

- [{{ post.data.title }}]({{post.url}})
    {% endfor %}
