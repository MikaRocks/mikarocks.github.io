---
layout: page
title: Über Mika
permalink: /about/
icon: mood
---

{% assign birth_date = '2015-06-04' | date: '%s' %}
{% assign current_date = 'now' | date: '%s' %}
{% assign age_in_seconds = current_date | minus: birth_date %}
{% assign age = age_in_seconds | divided_by: 31556952 %} <!-- Approx. seconds in a year -->

# Hi,

Ich bin Mika, sammle gern Steine und habe noch andere coole Hobbies.
Ich bin {{ age }} Jahre und komme aus Chemnitz.
Meine Heimatstadt liegt im Osten Deutschlands.

Auf dieser Seite findest du die schönsten Steine meiner Sammlung und andere coole Sachen, die dich vielleicht interessieren.

##### Viel Spaß <a href="{{ site.url }}">beim Stöbern</a>.