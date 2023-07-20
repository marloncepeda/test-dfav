use PHPUnit\Framework\TestCase;

class SaveUserUseCaseTest extends TestCase
{
    public function testSaveNewUser()
    {
        // Mock UserRepository
        $userRepository = $this->getMockBuilder(UserRepository::class)
            ->getMock();

        // Expect save to be called once
        $userRepository->expects($this->once())
            ->method('save');

        $useCase = new SaveUserUseCase($userRepository);
        $useCase->saveNewUser('John Doe', 'john@example.com', 'password');
    }
}
