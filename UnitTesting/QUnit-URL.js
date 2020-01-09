QUnit.test("Checking the URL", function(assert) {
    // Set up url object.
    var url = new URL("https://www.youtube.com/watch?v=DVnROVci3GU");
    
    // Test url properties.
    assert.ok(url, "Check URL is not null.");
    assert.equal(url.link, "https://www.youtube.com/watch?v=DVnROVci3GU", "Check URL");
});
    
    
    