---
slug: "/cicd"
date: "2022-04-29"
title: "CI/CD Training"
---

This is a very simple static page, built to help develop knowledge around the concept of 'continuous integration / contiunous development'.

The input box below is used to suggest a new tagline for Scott Logic. This uses a js function called 'sanitiseTagline' which checks if the tagline meets certain standards. If the suggestion is valid it returns it in CAPS; if it doesn't meet the standard it logs an error.
                
If you follow the docs provided you should be able to get this app deployed from your 'main' branch in github. The next step is to get your 'pipeline' set up in [CircleCi](https://circleci.com/). The first time you do this and run the tests you'll notice that one of them fails. Fix it to get the pipeline passing.

