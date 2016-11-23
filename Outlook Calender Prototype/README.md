
Given a set of events, render the events on a single day calendar. There are several properties of the layout:

1) Events cannot overlap.
2) If two events should have same width if they collide.
3) An event should utilize the maximum width available if it not colliding with another event.
Each event is shown by a JS object with a start and end attribute. The value of these attributes is the number of minutes since 9am.


 
