---
layout: archive
title: "CV"
title_es: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}
{% assign cv = site.data.cv %}

<p class="cv-downloads i18n-en" lang="en"><a class="pub-link" href="{{ cv.pdf_en }}"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Full CV (English)</a> <a class="pub-link" href="{{ cv.pdf_es }}"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> Full CV (Spanish)</a></p>
<p class="cv-downloads i18n-es" lang="es"><a class="pub-link" href="{{ cv.pdf_es }}"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> CV completo (español)</a> <a class="pub-link" href="{{ cv.pdf_en }}"><i class="fa-solid fa-file-pdf" aria-hidden="true"></i> CV completo (inglés)</a></p>

{% include cv-sections.html placement="top" %}

<h1>{% include t.html en="Publications" es="Publicaciones" %}</h1>
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<h1>{% include t.html en="Talks" es="Charlas" %}</h1>
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

<h1>{% include t.html en="Teaching" es="Docencia" %}</h1>
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

{% include cv-sections.html placement="bottom" %}
