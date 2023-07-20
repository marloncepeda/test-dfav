class UserRepository
{
    private $users = [];

    public function save(User $user)
    {
        $this->users[] = $user;
    }

    public function update(User $user)
    {
        //agregar codigo
    }

    public function delete(User $user)
    {
        //agregar codigo
    }

    public function findAll()
    {
        return $this->users;
    }
}
