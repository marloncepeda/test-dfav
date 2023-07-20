class SaveUserUseCase
{
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function saveNewUser($name, $email, $password)
    {
        $user = new User($name, $email, $password);
        $this->userRepository->save($user);
    }
}
