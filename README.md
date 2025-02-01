# training-snippets-and-testing
Just some code I was testing for outcomes


Understanding how JavaScript passes values to functions is important. On the one hand it is pretty straightforward: when an argument is passed to a function its value is first copied and then assigned to
the corresponding parameter. But.. anyone can make some wrong assumptions. The real impact of pass-by-value is that any changes to a parameter’s value *WITHIN*  the function will affect only the parameter,
not the *ORIGINAL* variable passed to the function. That’s pretty much it.

