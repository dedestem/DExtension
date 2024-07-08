function test() {
    console.log("Hello")
    setTimeout(test, 1000); // Schedule the next call to test() after 1000ms (1 second)
}

test(); // Initial call to start the function
