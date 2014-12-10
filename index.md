---
layout: page
cardNum: 0
title: Panic Button Training Kit
---
<div id="hp" markdown="1">
{% include JB/setup %}

<a href="#" class="btn btn-default">Download The Kit</a>

<ul class="cards container">
  {% assign cards = site.posts | sort:"date" %}
  {% for post in cards %}
    {% if post.layout contains 'post' %}
      <li class="row">
        <div class="cover col-sm-2">
          <a href="{{ BASE_PATH }}{{ post.url }}">
            <img src="{{ BASE_PATH }}/assets/img/{{ post.cardNum }}_thumb.png" alt="{{ post.title }}">
            {{ post.title }}
          </a>
        </div>
        <div class="card-meta col-sm-7">
          <div class="goals">
            <h3>Goals:</h3>
            {{post.goals}}
          </div>
          <div class="methodology">
            <h3>Methodology:</h3>
            {{post.methodology}}
          </div>
        </div>
        <div class="timespan col-sm-3">
          <h3>Timespan:</h3>
          {{post.timeSpan}}
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>

## Credits

This is where you should put some credit logos
</div>
