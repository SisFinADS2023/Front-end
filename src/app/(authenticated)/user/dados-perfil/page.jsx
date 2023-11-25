import Header from "@/components/Header"

const Dados = () => {
    return (
      
      <>
        <Header title="Dados do perfil" avatar="https://avatars.githubusercontent.com/u/102611166?s=70&v=4"/> 
        <div id="frame" className=" flex flex-col justify-center items-center">
            <div id="avatar-name" className="flex justify-start h-32 w-[1536px] bg-white rounded-t-[20px] mt-7 drop-shadow-md">
            <div className="flex rounded-full bg-neutral-300 w-[100px] h-[100px] mt-3.5 ml-[25px] ">

            </div>
            <div className="flex my-auto ml-[25px]">
                <h1>Nome de usuário</h1>
            </div>
            </div> 
            <div id="form" className="flex h-[669px] w-[1536px] bg-white justify-center rounded-b-[20px] mt-7 drop-shadow-md">
                <form>

                </form>
            </div>   
        </div>
      </>
    )
  }

  export default Dados