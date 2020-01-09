QUnit.test("Checking the User", function(assert) {
    // Set up user object.

    var user = new User("User1");

    // Test user properties.
    assert.ok(user, "Check user is not null.");
    assert.equal(user.username, "User1", "Check username");
});


