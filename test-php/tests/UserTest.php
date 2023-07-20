use PHPUnit\Framework\TestCase;

class UserTest extends TestCase
{
    public function testGetName()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $this->assertEquals($name, $user->getName());
    }

    public function testSetName()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $newName = 'Jane Doe';
        $user->setName($newName);

        $this->assertEquals($newName, $user->getName());
    }

    public function testGetEmail()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $this->assertEquals($email, $user->getEmail());
    }

    public function testSetEmail()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $newEmail = 'jane@example.com';
        $user->setEmail($newEmail);

        $this->assertEquals($newEmail, $user->getEmail());
    }

    public function testGetPassword()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $this->assertEquals($password, $user->getPassword());
    }

    public function testSetPassword()
    {
        $name = 'John Doe';
        $email = 'john@example.com';
        $password = '123456';

        $user = new User($name, $email, $password);

        $newPassword = '654321';
        $user->setPassword($newPassword);

        $this->assertEquals($newPassword, $user->getPassword());
    }
}
