var createGround = function(world) {
  // box shape definition
  var groundSd = new b2BoxDef();
  groundSd.extents.Set(250, 25);
  groundSd.restitution = 0.4;
  // body definition with the given shape we just created.
  var groundBd = new b2BodyDef();
  groundBd.AddShape(groundSd);
  groundBd.position.Set(250, 370);
  var body = world.CreateBody(groundBd);
  return body;
}
