let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" }
  ];
  
  // GET all users
  app.get('/users', (req, res) => {
    res.json(users);
  });
  
  // POST new user
  app.post('/users', (req, res) => {
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
  });
  
  // PUT update user
  app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.map(user => user.id === id ? { ...user, ...req.body } : user);
    res.json({ message: "User updated successfully" });
  });
  
  // DELETE user
  app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id);
    res.json({ message: "User deleted successfully" });
  });
  