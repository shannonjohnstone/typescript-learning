# Web Framework

## Overview

### Model and views

Model Class: Handle the data used to represent items like a User, Blog Post, Images, etc
View Class: Handle the HTML and events triggered by user interaction

### Approach

The appraoch when building this project is to build a very specific User class implementation and then refactor this implementation to work with other data types.

### High level functionly and steps
1. User class that represents a users and all its data
1. User class needs the ability to store, retreive and change data
1. Notifiy other parts of the application when there is a data change
1. Persist data to be retrived at a later time
1. Refactor the above to be generic implementation that be represent different types of data, like Blog Post, Images, etc