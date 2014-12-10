---
layout: page
cardOrder: 0
title: Panic Button Training Kit
published: true
---

<div id="hp" markdown="1">
{% include JB/setup %}
Imagine Panic Button as the tip of an iceberg. For the app to be as effective as it can be, it needs to be enveloped in a larger risk assessment process. Understanding who the actors are, what they can do for (and against) you, and planning beforehand is as important as learning how to use the app. 

We created a set of training cards for communities and HRD trainers, based on the methodology Amnesty International fine-tuned over months of assisting communities at risk to integrate the Panic Button into their work. The cards are meant to be used in 1-2 day workshops with a medium-sized group (20-30 participants), but they can also be consulted separately, each presenting a specific topic or theme.

You can browse the cards online, or print them for use in workshops. We appreciate feedback: please let us know how the cards have been useful for you, and how they can be more useful for you!    
<a href="#" class="btn btn-default">Download The Kit</a>

<ul class="cards container">
  {% assign cards = site.posts | sort:"cardOrder" %}
  {% for post in cards %}
    {% if post.layout contains 'post' %}
      <li class="row">
        <div class="cover col-sm-2">
          <a href="{{ BASE_PATH }}{{ post.url }}">
            <img src="{{ BASE_PATH }}/assets/img/{{ post.cardOrder }}_thumb.png" alt="{{ post.title }}">
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
</div>