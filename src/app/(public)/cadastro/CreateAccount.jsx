import { useRegisterStore } from "@/Utils/Stores/userStore";

const handleCreateAccount = async (e) => {
  const { registerUser, isChecked, setRegisterUser, setIsChecked } = useRegisterStore();

  e.preventDefault();

  const aa = {
    userId: registerUser.userId,
    firstName: registerUser.firstName,
    lastName: registerUser.lastName,
    email: registerUser.email,
    password: registerUser.password,
  }

  try {
    const response = await fetch('https://nw1t7aelje.execute-api.us-east-1.amazonaws.com/dev/auth/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(aa),
    });

    // Handle the response
    const data = await response.json();
    alert('Cadastro realizado com sucesso!');

  } catch (error) {
    // Handle errors
    alert('Erro ao cadastrar usuário');
  }
};
export default handleCreateAccount;