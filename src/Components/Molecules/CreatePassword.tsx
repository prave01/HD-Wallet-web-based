import zxcvbn from "zxcvbn";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Shadcn_Components/shadcn_ui/card";
import { Input } from "@/Shadcn_Components/shadcn_ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/Shadcn_Components/shadcn_ui/button";

const CreatePassword = () => {
  const [Password, setPassword] = useState<string>("");
  const [ConfirmPassword, setConfirmPassword] = useState<string>("");
  const [Match, setMatch] = useState<boolean>(false);

  const [SubmitClick, setSubmitClick] = useState<boolean>(false);

  const result = zxcvbn(Password);
  useEffect(() => {
    if (ConfirmPassword == Password && (ConfirmPassword && Password) != "") {
      setMatch(true);
    } else {
      setMatch(false);
    }
  }, [ConfirmPassword, Password]);
  return (
    <Card className="text-secondary h-fit w-[500px] rounded-sm border-0 text-lg font-semibold tracking-wider shadow-none shadow-amber-800">
      <CardHeader className="">
        <CardTitle className="text-xl font-semibold underline underline-offset-2">
          Create wallet password
        </CardTitle>
        {/* <CardAction className="rounded-full text-lg -translate-y-5 border-2 border-green-800 p-1 px-2 text-green-500"> */}
        {/**/}
        {/* 	Ongoing */}
        {/* </CardAction> */}
        <br className="h-10 w-[40px] border-2 border-amber-200 bg-white text-amber-200" />
      </CardHeader>
      <CardContent>
        <Input
          value={Password}
          type="password"
          onPaste={(e) => e.preventDefault()}
          required
          disabled={result.score! >= 4 && SubmitClick ? true : false}
          className="text-primary border-0 bg-amber-900 outline-0"
          onInput={(target) => {
            target.preventDefault();
            setPassword(target.currentTarget.value);
            setConfirmPassword("");
          }}
          placeholder="PASSWORD"
        ></Input>
        <p className={cn(result.score < 4 ? "text-red-700" : "text-green-800")}>
          Score: {result.score}
        </p>
        <br />
        <Input
          value={ConfirmPassword}
          onPaste={(e) => e.preventDefault()}
          type="password"
          disabled={result.score! >= 4 && SubmitClick ? true : false}
          className="text-primary border-0 bg-amber-900 outline-0"
          onInput={(target) => {
            setConfirmPassword(target.currentTarget.value);
          }}
          placeholder="RETYPE PASSWORD"
        ></Input>
        <p className={cn(Match ? "text-green-800" : "text-red-700")}>
          {Match ? "Matched" : "Not Matched"}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setSubmitClick(true)}
          disabled={result.score >= 4 && Match && !SubmitClick ? false : true}
          className="text-primary cursor-pointer border-2 border-amber-600 bg-amber-700 text-lg font-medium hover:bg-transparent"
        >
          {" "}
          {SubmitClick ? "Loading..." : "Submit"}{" "}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreatePassword;
