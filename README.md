# Quidax Books Assessment

This project is my submission for the assessment by Quidax.

link to the finished work [https://quidax-books-theta.vercel.app ](https://quidax-books-theta.vercel.app)

## How to install and run the app

-   Clone the app `git clone https://github.com/justiceotuya/quidax-books.git`
-   Install the app by running `npm install`
-   After the install, run the app by running `npm start`
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Assumption Made`

-   screen with maximum is 1440px, because we need to clip the content so to a
    maximum screen so it doesnt get overstretched
-   realtime search is not on live data from the api but on fetched data (local
    search). i initially though that it was filtering done directly with the graphql
    server but on inspection of the schemas, the sorting does not support desired
    realtime search as shown in the design

### Issues

-   initially thinking the search manipulation is server side(use grapql to make
    filter /search the data), the instruction was not clear enough.
-   The Carousel component gave me some issues too

### Feedback

-   make it clear enough the search should be local since the schema does not
    provide the search that is needed.
-   the initial duration of 2 days in the assignment is too small, evn though
    extension was asked and was given, what it does is it puts doubt into the mind
    of the interviewee considering the fact that they may have some fulltime job
    already. a duration of one week will soothe nerves, as asking for extension
    might mean marks might be deducted
-   make it clear that CSSinJS packages can be used in the test since CSS
    libraries has been forbidden.
