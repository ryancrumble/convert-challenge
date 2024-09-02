# TASK 2
Test cases for a carousel of products that is being provided to the frontend via
a recommendation platforms API.

These could be achieved via different build tools, steps. For example, using Jest, Mocha, etc. to write test cases and run them.

## Types of Test Cases
1. **Unit**
2. **Integration**
   1. For example, interaction between the carousel and the recommendation platform API, the interaction between the carousel and the backend.
3. **End-to-End**
   4. For example, real user scenarios.
4. **Snapshot**
4. **Accessibility**
   1. For example, keyboard navigation of the carousel, the screen reader support of the carousel, etc.
5. **Compatibility**
   1. For example, the compatibility of the carousel with different browsers and devices.

## Example Test Cases
### Unit Test Cases
#### Carousel
1. test the carousel is rendered on the page.
2. test the carousel displays the products correctly.
3. test the carousel scrolls to the next product on clicking the next button.
4. test the carousel scrolls to the previous product on clicking the previous button.
5. test the carousel loops back to the first product after reaching the last product.


#### Carousel Card
1. test card displays the product details.
2. test the card displays the product image.
3. test the card updates the variant of the product on clicking the variant buttons.
4. test it handles favouriting the product
5. test it lazy loads the product image.


### Integration Test Cases
