import CreatePassword from "../Molecules/CreatePassword";
import GenerateMnemonics from "../Molecules/GenerateMnemonics";

const NewAccount = () => {
  return (
    <div className="bg-cardbg flex h-full w-full items-center justify-center rounded-lg">
      <GenerateMnemonics />
      <CreatePassword />
    </div>
  );
};

export default NewAccount;
