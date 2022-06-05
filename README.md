#Unit Converter

This is a "somewhat" finished Scrimba solo project on making a website to convert different units of measure.

The constraints of the project are met, which were to create a website following [this design shown on Figma](https://www.figma.com/file/AdqUVRQCZGP1zRcEvzmJTm/Unit-Conversion?node-id=0%3A13) with flexibility to use our own gradient colors. We were to use just vanilla javascript, no frameworks.

As a stretch goal I'm trying to make the website fully functional by allowing for user input. That is not fully implemented yet.

Issues:
1. The website only allows for one change in number before not changing any further. I think use of loops is neccessary to allow for full functionality.
2. The website demonstrates strange saving behavior with the last number entered before a refresh. For example, if you type in 11 and hit submit, it will calculate for the number 11. If you type in a new number, say 27, and hit submit, nothing happens. However, if you refresh and type in a new number, say 12, it will instead calculate for 27. The number you entered before the refresh. I'm not sure why that is.