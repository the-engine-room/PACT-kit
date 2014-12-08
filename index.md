---
layout: page
cardOrder: 0
title: Panic Button Training Kit
tagline: subheading goes here
---
<div id="hp" markdown="1">
{% include JB/setup %}

<a href="#" class="btn btn-default">Download The Kit</a>

<p class="intro">
Some text about what to expect here
</p>

<a href="#" class="btn btn-default">Start</a>

<ul class="cards clearfix">
  {% assign cards = site.posts | sort:"cardOrder" %}
  {% for post in cards %}
    {% if post.layout contains 'post' %}
      <li><a href="{{ BASE_PATH }}{{ post.url }}">
        <img src="{{ BASE_PATH }}/assets/img/{{ post.cardOrder }}_thumb.png" alt="{{ post.title }}">
        {{ post.title }}
      </a></li>
    {% endif %}
  {% endfor %}
</ul>

## Credits

This is where you should put some credit logos
</div>
